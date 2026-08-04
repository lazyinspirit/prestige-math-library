import { writeFileSync, mkdirSync, readFileSync } from 'node:fs';
mkdirSync('scratchpad/wave4/lanes', { recursive: true });
const CONVENTIONS = readFileSync('briefs/judge-conventions.txt','utf8').trim();

// lane -> { items: [{id, what}] }
const LANES = JSON.parse(readFileSync('scratchpad/wave4/certify-lanes.json','utf8'));

const brief = (lane, spec) => `# Wave 4 audit repair certifier — lane \`${lane}\`

> **NO SHELL-PERMISSION PROMPTS (owner, 2026-07-30) — binding on every current
> and future agent.** Use commands already allowed inside the workspace sandbox;
> choose non-escalated forms and never ask the owner to approve a shell command.
> If an indispensable operation has no escalation-free form, report a blocker.

You are an **independent read-only certifier** (GPT 5.6 Sol, xhigh) for the
wave-4 published-page retro-audit (\`AUDIT-WORKFLOW.md\` step A6). You did not
author any of the text below, and you never edit a file. **The rule you exist
to enforce: no author certifies its own repair.**

Your job is to read the CURRENT text on disk of each item below — not the diff,
not the repair description — and say whether that current text is
mathematically correct, correctly cited, and honestly stamped. A repair
description that matches the file is not enough: the mathematics has to be right.

## The standard

${CONVENTIONS}

## Triage — binding

- **Non-negotiable:** mathematical accuracy, logical validity, correct citation.
- **Explicitly acceptable, do not report:** minor citational quirks; gaps a
  competent reader closes within 30 seconds; prose style; page-summary length.

## Items to certify (${spec.items.length})

${spec.items.map((it) => `### \`items/${it.id}.md\`\n\n**What was repaired here:** ${it.what}\n`).join('\n')}

## What to do, per item

1. Read the whole current file from disk, including frontmatter.
2. Read the repaired passage in its full surrounding context and decide whether
   it is **true**, and whether it says what the cited targets actually state —
   open every cited target on disk and quote it.
3. Check the repair did not break something else: a removed Fact that a step
   still cites, a dependency removed from \`deps\` while still linked in the body,
   a renumbered label, a claim elsewhere in the item that still asserts the old
   (repaired) proposition, a Statement or title now out of step with the proof.
4. Check the **verification block**: after a material repair the item must carry
   NO stale \`judge:\` block and NO obsolete \`audited:\`/\`verified:\` stamp. Report
   any that survived.
5. Read every Remark in the item with a numbered step's suspicion.

## Output — the only thing you return

Plain markdown. For each item, one verdict block:

\`\`\`
### <item id> — CERTIFY | REFUSE
CURRENT TEXT READ: "<the exact repaired sentence(s) as they stand on disk>"
ASSESSMENT: <why it is correct and correctly cited, with a verbatim quote from
each cited target that licenses it; or exactly what is still wrong>
COLLATERAL: <anything the repair broke, or "none found">
STAMPS: <what the verification block currently holds, and whether that is correct>
\`\`\`

Finish with a one-line summary: \`N certified, M refused\`.

**Certify only what you actually verified.** If a passage is correct but a
different sentence in the same item is false, REFUSE and name it: your reading is
the only independent reading this text gets before it is judged.
`;

for (const [lane, spec] of Object.entries(LANES)) {
  writeFileSync(`scratchpad/wave4/lanes/certify-${lane}.md`, brief(lane, spec));
}
console.log('wrote', Object.keys(LANES).length, 'certifier briefs');
