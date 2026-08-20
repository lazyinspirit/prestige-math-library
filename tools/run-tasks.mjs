#!/usr/bin/env node
// run-tasks — render a run's per-stage task files from briefs/tasks/ templates.
//
// WHY THIS EXISTS. Through frontier-15 the ~16 `research/<run>-*.task.md` files
// a run needs were written by hand, and `plan` printed a reminder to do it. Two
// failures follow, and both happened:
//
//   1. A missing one is discovered by the stage that needs it, hours in.
//      `doctor` catches only the ones a stage's own `plan()` reaches — the
//      files a REPAIR ROUND reaches (source-scout, scaffold-fix,
//      contract-audit, contract-rework, rework-certify, impact-close, step4)
//      are invisible to it, so a run can pass doctor green and still block at
//      02:00 on a file nobody knew was needed.
//   2. The obvious way to produce them is to copy the previous run's and
//      rename. The machinery paragraphs survive that; the mathematics does
//      not. An Alpha briefed about the last run's pages reads that instruction
//      with exactly the authority of a true one.
//
// Generating them makes (1) impossible and (2) visible: a template cannot name
// a result, because it does not know what the run builds. Anything genuinely
// run-specific is DERIVED here from plan-spec.json and the batch manifests —
// ids, orders, requires, and the design section that carries each pair. This
// tool never writes a mathematical claim, because it has not read any
// mathematics.
//
// Usage:
//   node tools/run-tasks.mjs --run <run> [--force]
//   node tools/run-tasks.mjs --run <run> --check
//   node tools/run-tasks.mjs --run <run> --list
//
// --check is the complement to `doctor`: it enumerates EVERY task path the
// stage table can reference, including the repair-round ones, and reports any
// whose candidate list resolves to nothing on disk. Exit 1 if any is missing.
// --list prints every prompt file — brief or task — this run can actually be
// dispatched with, which is what `doctor` scans for identity placeholders.

import { readFileSync, writeFileSync, existsSync, readdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const REPO = join(dirname(fileURLToPath(import.meta.url)), '..');
const argv = process.argv.slice(2);
const opt = (name, fallback = null) => {
  const at = argv.indexOf(`--${name}`);
  return at >= 0 && argv[at + 1] && !argv[at + 1].startsWith('--') ? argv[at + 1] : fallback;
};
const has = (name) => argv.includes(`--${name}`);

const run = opt('run');
if (!run) {
  console.error('run-tasks: --run <run> is required');
  process.exit(2);
}
const force = has('force');
const checkOnly = has('check');

const R = (...p) => join(REPO, ...p);
const readJson = (p) => JSON.parse(readFileSync(p, 'utf8'));

// ---- the run's shape, read from disk -----------------------------------------

/** Batch numbers, from step-0's own output. Never configured in a second place. */
const batches = readdirSync(R('research'))
  .filter((f) => f.startsWith(`${run}-batch-`) && f.endsWith('.pages.json'))
  .map((f) => f.replace(`${run}-batch-`, '').replace('.pages.json', ''))
  .filter((n) => /^\d+$/.test(n))
  .sort((a, b) => Number(a) - Number(b));

if (!batches.length) {
  console.error(`run-tasks: no research/${run}-batch-*.pages.json — run \`autopilot plan --run ${run}\` first`);
  process.exit(2);
}

// One group Alpha per <=3 batches. Before `2-assign` writes the real assignment
// this is the same positional fallback `stages/mathlib.mts` uses, and it is only
// used here to enumerate which group-labelled paths COULD be asked for.
const groupLabels = [];
for (let i = 0; i < batches.length; i += 3) groupLabels.push(String.fromCharCode(97 + groupLabels.length));

const spec = readJson(R('research/plan-spec.json'));
const pageById = new Map(spec.pages.map((p) => [p.id, p]));

const manifestOf = (b) => readJson(R('research', `${run}-batch-${b}.pages.json`));
/** The A pages of a batch, in manifest order, with their spec records. */
const aPagesOf = (b) => {
  const m = manifestOf(b);
  const ids = Array.isArray(m) ? m.map((x) => x.id ?? x) : (m.pages ?? []).map((x) => x.id ?? x);
  return ids.map((id) => pageById.get(id)).filter((p) => p && p.kind === 'A');
};

// ---- the design index --------------------------------------------------------

// Which design document carries a pair, and at which heading. Derived by
// matching the page's TITLE against the headings of research/plan-*.md, then
// falling back to a mention of the page id. Both are reported when they
// disagree — the Beta opens the section either way, and a wrong guess that
// announced itself is cheaper than a confident one.
const normalize = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, ' ').replace(/\s+/g, ' ').trim();

const designDocs = readdirSync(R('research'))
  .filter((f) => f.startsWith('plan-') && f.endsWith('.md'))
  .map((f) => {
    const text = readFileSync(R('research', f), 'utf8');
    const lines = text.split('\n');
    const headings = [];
    lines.forEach((line, i) => {
      const m = /^(#{2,4})\s+(.*)$/.exec(line);
      if (m) headings.push({ line: i + 1, text: m[2].trim(), norm: normalize(m[2]) });
    });
    return { file: f, lines, headings };
  });

function designFor(page) {
  const wanted = normalize(page.title);
  const hits = [];
  for (const doc of designDocs) {
    for (const h of doc.headings) {
      // A design heading is usually "<code>. <Title> — <extra>"; the title is a
      // substring of it, not equal to it.
      if (h.norm.includes(wanted)) hits.push({ file: doc.file, line: h.line, text: h.text, kind: 'heading' });
    }
  }
  if (hits.length) return hits;
  for (const doc of designDocs) {
    const at = doc.lines.findIndex((l) => l.includes(page.id));
    if (at >= 0) hits.push({ file: doc.file, line: at + 1, text: doc.lines[at].trim().slice(0, 120), kind: 'mention' });
  }
  return hits;
}

// ---- substitutions -----------------------------------------------------------

const coverageList = batches.map((b) => `research/${run}-batch-${b}.coverage.json`).join(',');

function batchTable() {
  const rows = batches.map((b) => {
    const pages = aPagesOf(b);
    const cats = [...new Set(pages.map((p) => p.category))].join(', ');
    const ids = pages.map((p) => `\`${p.id}\``).join('<br>');
    return `| ${b} | ${cats} | ${ids} | \`research/${run}-beta-${b}.task.md\` |`;
  });
  return ['| batch | category | pairs | Beta task |', '|---|---|---|---|', ...rows].join('\n');
}

const SUBS = {
  run,
  n_batches: String(batches.length),
  batch_table: batchTable(),
  coverage_list: coverageList,
  batch_glob: `research/${run}-batch-*`,
};

const render = (text) => text.replace(/\{\{([a-z_]+)\}\}/g, (_match, key) => {
  if (!(key in SUBS)) throw new Error(`template uses {{${key}}}, which run-tasks does not define`);
  return SUBS[key];
});

// ---- what the stage table can ask for ----------------------------------------

// Parsed from the stage table's source rather than by walking plan(), because
// plan() only reaches a repair round's dispatches when that round is active.
// Every task path in the table is a literal template string, so this sees all
// of them.
// A candidate list mixes template literals with plain quoted paths — the
// `2-assign` stage falls back to `briefs/alpha-assign.md`, a role brief that is
// not per-run. Reading only the backticked entries made that fallback invisible
// and reported a satisfied stage as missing.
function stageTaskGroups() {
  const src = readFileSync(R('tools/autopilot/stages/mathlib.mts'), 'utf8');
  const groups = [];
  for (const m of src.matchAll(/task:\s*(\[[^\]]*\]|`[^`]*`|'[^']*'|"[^"]*")/g)) {
    const cands = [...m[1].matchAll(/`([^`]*)`|'([^']*)'|"([^"]*)"/g)].map((x) => x[1] ?? x[2] ?? x[3]);
    if (cands.length) groups.push(cands);
  }
  return groups;
}

/** The role briefs the stage table names. Static paths, but enumerated from the
 *  table for the same reason the task paths are: a brief renamed in `briefs/`
 *  and not in the table fails at dispatch, not at doctor. */
function stageBriefs() {
  const src = readFileSync(R('tools/autopilot/stages/mathlib.mts'), 'utf8');
  return [...new Set([...src.matchAll(/brief:\s*(?:`([^`]*)`|'([^']*)'|"([^"]*)")/g)]
    .map((m) => m[1] ?? m[2] ?? m[3]))];
}

/** Every prompt file this run can be dispatched with, that exists on disk. */
function resolvedPromptFiles() {
  const out = new Set();
  for (const b of stageBriefs()) if (existsSync(R(b))) out.add(b);
  for (const group of stageTaskGroups()) {
    const units = group.some((c) => c.includes('${g.label}')) ? groupLabels
      : group.some((c) => c.includes('${u}')) ? batches : [''];
    for (const u of units) {
      for (const c of group) {
        const p = c.replaceAll('${ctx.run}', run).replaceAll('${u}', u).replaceAll('${g.label}', u);
        if (existsSync(R(p))) out.add(p);
      }
    }
  }
  return [...out].sort();
}

function checkTaskFiles() {
  const missing = [];
  for (const group of stageTaskGroups()) {
    // Each group is a candidate list: the stage is satisfied if ANY resolves.
    // A group with a per-unit candidate has one obligation per unit.
    const perUnit = group.some((c) => c.includes('${u}')) || group.some((c) => c.includes('${g.label}'));
    if (!perUnit) {
      if (!group.some((c) => existsSync(R(c.replaceAll('${ctx.run}', run))))) {
        missing.push(group.map((c) => c.replaceAll('${ctx.run}', run)).join(' | '));
      }
      continue;
    }
    const units = group.some((c) => c.includes('${g.label}')) ? groupLabels : batches;
    for (const u of units) {
      const resolved = group.map((c) => c.replaceAll('${ctx.run}', run).replaceAll('${u}', u).replaceAll('${g.label}', u));
      if (!resolved.some((c) => existsSync(R(c)))) missing.push(resolved.join(' | '));
    }
  }
  return [...new Set(missing)];
}

if (has('list')) {
  for (const p of resolvedPromptFiles()) console.log(p);
  process.exit(0);
}

if (checkOnly) {
  const missing = checkTaskFiles();
  if (!missing.length) {
    const groups = stageTaskGroups().length;
    console.log(`run-tasks --check: every task path the stage table can reach resolves (${groups} reference(s), ${batches.length} batch(es), ${groupLabels.length} group(s))`);
    process.exit(0);
  }
  console.error(`run-tasks --check: ${missing.length} stage task path(s) resolve to nothing:`);
  for (const m of missing) console.error(`  ${m}`);
  process.exit(1);
}

// ---- render ------------------------------------------------------------------

const written = [];
const skipped = [];

const templateDir = R('briefs/tasks');
for (const f of readdirSync(templateDir).filter((x) => x.endsWith('.md') && x !== 'README.md')) {
  const name = f.replace(/\.md$/, '');
  const dest = R('research', `${run}-${name}.task.md`);
  const body = render(readFileSync(join(templateDir, f), 'utf8'));
  writeFileSync(dest, body);
  written.push(`research/${run}-${name}.task.md`);
}

// ---- per-batch Beta task files ----------------------------------------------

for (const b of batches) {
  const dest = R('research', `${run}-beta-${b}.task.md`);
  if (existsSync(dest) && !force) { skipped.push(`research/${run}-beta-${b}.task.md (exists)`); continue; }

  const pages = aPagesOf(b);
  const cats = [...new Set(pages.map((p) => p.category))];
  const lines = [];
  lines.push(`# Batch ${b} of run \`${run}\` — ${pages.map((p) => p.title).join(' · ')}`);
  lines.push('');
  lines.push(`${pages.length} A/B pair${pages.length === 1 ? '' : 's'}, ${cats.join(' and ')}. You own every page here and you author them all at step 5.`);
  lines.push('');

  for (const p of pages) {
    lines.push(`## \`${p.id}\``);
    lines.push('');
    lines.push('| | |');
    lines.push('|---|---|');
    lines.push(`| A page | \`${p.id}\` · order **${p.order}** · \`${p.category}\` |`);
    if (p.companion) lines.push(`| B page | \`${p.companion}\` |`);
    lines.push(`| title | ${p.title} |`);
    const reqs = (p.requires ?? []);
    lines.push(`| requires | ${reqs.length ? reqs.map((r) => `\`${r}\``).join(', ') : '— (nothing declared)'} |`);
    const design = designFor(p);
    if (design.length) {
      lines.push(`| design | ${design.slice(0, 3).map((d) => `\`${d.file}\` L${d.line}${d.kind === 'mention' ? ' (id mention, not a heading — locate the section yourself)' : ''}`).join('<br>')} |`);
    } else {
      lines.push('| design | **none found** — say so in your notes; scaffold from sources and record that no design section governed this pair |');
    }
    lines.push('');
    if (design.length > 1) {
      lines.push(`**More than one design location matched.** Open each before scaffolding: a track document and a completion/expansion document often both speak about this page, and where they differ the later amendment usually controls. Record in your notes which one you treated as controlling and why.`);
      lines.push('');
    }
    lines.push('**Open the design section and hold yourself to what it states.** The traps, the decided conventions and the chosen route for this page are written there, by whoever designed it, with the sources to hand. They are not repeated here: this file is generated and has read no mathematics. A scaffold that contradicts a decision the design records is wrong however rich it looks.');
    lines.push('');
    lines.push(`Check the design's stated \`order\` and prerequisites against \`research/plan-spec.json\` above. **If they disagree, do not pick one** — record it in your notes and carry on with the spec. Stage 1's \`drift\` unit adjudicates design-vs-spec conflicts for the whole run, and settling one inside a batch is how two batches end up built against two different plans.`);
    lines.push('');
  }

  lines.push('## Standing, for every pair here');
  lines.push('');
  lines.push('- **Two independent treatments**, at least one a textbook, monograph or full lecture-note set with a harvestable table of contents. Wikipedia is a convention tiebreaker, never a pair\'s backing.');
  lines.push('- **Enumerate each source\'s own section and named-result headings** over the exact range you read, and give every harvested heading a disposition: `included` (naming the item id), `inline`, `already-published`, `deferred` or `out-of-scope` — the last two with a written reason about that specific result.');
  lines.push('- **Self-contained scope.** No item may rest on a result the library has not established. If a needed result is missing, build the prerequisite definitions and theorems; dropping it for want of a lemma you could have written is not a permitted disposition.');
  lines.push('- **An A page over 60 items is SPLIT**, decided now. `validate-plan.mjs` enforces it, and after authoring a split is a rewrite.');
  lines.push('- **Never pad.** Decompose long proofs into focused lemmas and make a pass for cheaply proved corollaries; never mint a statement to enrich a page.');
  lines.push('');
  lines.push('**No permission prompts of any kind**, including inside an `&&` chain.');
  lines.push('');

  writeFileSync(dest, lines.join('\n'));
  written.push(`research/${run}-beta-${b}.task.md`);
}

// ---- the step-0 record -------------------------------------------------------

{
  const dest = R('research', `${run}-step0-notes.md`);
  if (existsSync(dest) && !force) {
    skipped.push(`research/${run}-step0-notes.md (exists)`);
  } else {
    const rows = [];
    for (const b of batches) {
      for (const p of aPagesOf(b)) {
        const d = designFor(p)[0];
        rows.push(`| ${b} | \`${p.id}\` | ${p.category} | ${p.order} | ${d ? `\`${d.file}\` L${d.line}` : '**none found**'} |`);
      }
    }
    const nPairs = batches.reduce((n, b) => n + aPagesOf(b).length, 0);
    const body = [
      `# ${run} — step-0 record`,
      '',
      `Generated by \`tools/run-tasks.mjs\` from \`research/plan-spec.json\` and the`,
      `step-0 batch manifests. Everything below is derived from disk; no line of it`,
      `is a judgement about mathematics.`,
      '',
      '## Scope',
      '',
      `${nPairs} A/B pair(s), ${nPairs * 2} pages, ${batches.length} batch(es).`,
      '',
      '| batch | pair | category | order | design |',
      '|---|---|---|---|---|',
      ...rows,
      '',
      '## Design-vs-spec drift',
      '',
      'Not adjudicated here. Stage 1 dispatches the `drift` unit against',
      `\`research/${run}-drift-evidence.json\`, and \`tools/drift-review-check.mjs\``,
      'gates the stage on its report. A Beta that notices a conflict records it and',
      'carries on with the spec.',
      '',
      '## Scope ledger',
      '',
      `\`research/${run}-scope-ledger.json\` is what this run owes. Every gate`,
      'validates what is present; the ledger is the only artifact that knows what',
      'was promised, which is what makes a page silently leaving a manifest visible.',
      '',
    ].join('\n');
    writeFileSync(dest, body);
    written.push(`research/${run}-step0-notes.md`);
  }
}

// ---- report ------------------------------------------------------------------

console.log(`run-tasks: ${written.length} file(s) written for ${run}`);
for (const w of written) console.log(`  ${w}`);
if (skipped.length) {
  console.log(`\n  kept (pass --force to regenerate):`);
  for (const s of skipped) console.log(`  ${s}`);
}

const missing = checkTaskFiles();
if (missing.length) {
  console.error(`\nrun-tasks: ${missing.length} stage task path(s) still resolve to nothing:`);
  for (const m of missing) console.error(`  ${m}`);
  process.exit(1);
}
console.log(`\nevery task path the stage table can reach now resolves.`);
