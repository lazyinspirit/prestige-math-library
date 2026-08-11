#!/usr/bin/env node
// step8b-contract-refresh.mjs — bring the batch proof contracts back into line
// with disk after the step-8 round-2 fatal repairs.
//
// Two distinct jobs, both contract-side only; no item file is touched here.
//
//  1. The eight items repaired this round whose proofs gained facts or steps.
//     A fatal repair that leaves its contract describing the pre-repair proof is
//     an unfinished repair: `proof-contract --strict` is what says so.
//  2. Nine errors that were ALREADY failing at HEAD, left by round 1 and by the
//     step-6 repairs before it. Step 8's gate table has no proof-contract gate,
//     so nothing caught them. They are licensed by those earlier confirmed_fatal
//     rows, not by this round's; see the Alpha report.
//
// Quotes are lifted verbatim from the source item's Statement on disk, so they
// cannot drift from it again by transcription.

import { readFileSync, writeFileSync } from 'node:fs';

const ITEM = (id) => readFileSync(`items/${id}.md`, 'utf8');

/** The source item's Statement/Example section, whitespace-normalised the way
 *  proof-contract.mjs normalises it before the substring test. */
const statement = (id) => {
  const body = ITEM(id).replace(/^---\n[\s\S]*?\n---\n/, '');
  // No `m` flag: `$` must mean end of file, not end of the heading's own line.
  const m = /\n## (?:Statement|Example|Definition)\n([\s\S]*?)(?=\n## |$)/.exec(`\n${body}`);
  if (!m) throw new Error(`no Statement section in ${id}`);
  return m[1].replace(/\r?\n/g, ' ').replace(/\s+/g, ' ').trim();
};

/** First `n` sentences of a source Statement, as an exact quotable substring. */
const lead = (id, n = 1) => {
  const text = statement(id);
  let cut = 0;
  for (let i = 0; i < n; i += 1) {
    const next = text.indexOf('. ', cut);
    if (next === -1) return text;
    cut = next + 1;
  }
  return text.slice(0, cut).trim();
};

// A `def-` item's body heading is `## Definition`, and proof-contract resolves
// the quote against that named section, so the label has to follow the source.
const cite = (fact, source, uses, sentences = 1) => ({
  fact,
  source,
  source_section: source.startsWith('def-') ? 'Definition' : 'Statement',
  quote: lead(source, sentences),
  uses,
});

const derive = (step, claim, inputs) => ({ id: `step-${step.replace('.', '-')}`, claim, inputs, step });

// ---------------------------------------------------------------------------
// batch 6 — the plane-graph cluster and colour focussing
// ---------------------------------------------------------------------------

const B6 = {
  'cor-planar-simple-graph-edge-bound': (c) => ({
    ...c,
    citations: [
      { ...c.citations[0], uses: ['1.1', '3.1'] },
      { ...c.citations[1], uses: ['1.1', '1.2'] },
      cite('L3', 'lem-plane-edge-face-incidence', ['1.2'], 3),
      cite('L4', 'thm-double-counting', ['1.2']),
    ],
    derivations: [
      c.derivations[0],
      derive('1.2',
        '[L2] is an inequality and cannot by itself give equality, so count the incidences between faces and local edge sides directly. The fibre over a face is its boundary walk, of length $\\ell(f)$; the fibre over an edge has exactly two elements by [L3]. Hence [L4] gives $\\sum_{f\\in F}\\ell(f)=2m$.',
        ['L2', 'L3', 'L4']),
      derive('2.1',
        'If the graph is disconnected, first redraw it into pairwise disjoint discs so that every component meets the unbounded face, then join the components by noncrossing edges through that face. This preserves simplicity and planarity, keeps $n$ fixed, and only increases the number of edges. Step 1.1 applied to the augmented graph therefore bounds the original $m$ by $3n-6$.',
        ['1.1']),
      derive('3.1',
        'Let the graph be a connected plane triangulation, so every face has boundary a triangle and $\\ell(f)=3$ for every face. Then step 1.2 reads $3|F|=2m$, and [L1] gives $|F|=2-n+m$, so $3(2-n+m)=2m$ and $m=3n-6$.',
        ['1.2', 'L1']),
    ],
    boundaries: c.boundaries.map((b) => (
      b.case === 'iff-reverse'
        ? { ...b, status: 'not_applicable', reason: 'The equality clause is one directional: a connected plane triangulation has $m=3n-6$. The converse is prop-maximally-planar-edge-characterisation, not this corollary.' }
        : b.case === 'iff-forward'
          ? { ...b, evidence: 'Step 3.1 proves that a connected plane triangulation attains the bound.' }
          : b
    )),
  }),

  'prop-maximal-plane-triangulation-characterisation': (c) => ({
    ...c,
    citations: [
      { ...c.citations[0], uses: ['1.1'] },
      cite('L2', 'prop-face-boundaries-in-two-connected-plane-graphs', ['1.1']),
      cite('L3', 'lem-polygonal-crossing-parity-is-locally-constant', ['5.1'], 2),
      cite('L3', 'lem-polygonal-ray-general-position', ['5.1']),
      cite('L4', 'def-plane-region-and-frontier', ['1.1', '1.2', '2.1', '3.1']),
      cite('L4', 'cor-components-of-open-subsets-of-rn-are-polygonally-connected', ['1.1', '1.2', '2.1', '3.1']),
      cite('L5', 'lem-plane-edge-face-incidence', ['1.1']),
      cite('L6', 'def-polygonal-arc-and-polygon', ['2.1', '4.1']),
      cite('L6', 'def-plane-graph-face-and-boundary', ['2.1', '4.1']),
    ],
    derivations: [
      derive('1.1',
        'By [L2] the boundary walk of a face $f$ is a cycle $C$, drawn as a polygon; by [L5] the frontier of $f$ is exactly the point set of $C$. Then $f$ is a nonempty clopen subset of the region of $C$ containing it [L1, L4], so the face is one of the two regions of its own boundary cycle.',
        ['L1', 'L2', 'L4', 'L5']),
      derive('1.2',
        'If instead every face is triangular, the interior of any proposed new plane edge is connected and disjoint from the drawing, so it lies in one face, with both endpoints on that face\'s boundary [L4]. Those endpoints are already adjacent because that boundary is a triangle, so no missing edge can be added.',
        ['given', 'L4']),
      derive('2.1',
        'A small enough disc about a vertex $u$ of $C$ meets the drawing only in initial straight segments of the edges at $u$ [L6], whose deletion leaves finitely many open sectors, each inside a single face [L4]. Since $u$ is on the frontier of $f$, one sector lies in $f$, and the straight radius from $u$ into it meets the drawing only at $u$.',
        ['1.1', 'L4', 'L6']),
      derive('3.1',
        'Two such radii at distinct vertices $u,v$ of $C$, joined by a polygonal path inside the polygonally connected region $f$ [L4] and made simple, give a polygonal arc from $u$ to $v$ meeting the drawing only at its ends. So nonadjacent $u,v$ on a facial boundary contradict maximality.',
        ['1.1', '2.1', 'L4']),
      derive('4.1',
        'Assume $G$ maximal plane with a facial boundary cycle $C$ of length at least four, and take $u_1,u_2,u_3,u_4$ in cyclic order with $u_1$–$u_3$ subpaths $P_1\\ni u_2$ and $P_2\\ni u_4$. Step 3.1 makes $u_1u_3$ and $u_2u_4$ edges of $G$, not edges of $C$; their arcs $e,e\'$ share no endpoint, so by [L6] each relative interior avoids $C$, the other arc, and $f$. Hence $J_1=e\\cup P_1$ and $J_2=e\\cup P_2$ are polygons.',
        ['3.1', 'L6']),
      derive('5.1',
        'One ray in general position for the finite union $C\\cup e$ [L3] serves $C$, $J_1$ and $J_2$ at once, and its crossings satisfy $J_1+J_2=C$ modulo two. Parity is constant on $f$ and on the relative interior of $e\'$ [L3]; local constancy at $u_4\\notin J_1$ and at $u_2\\notin J_2$ transfers both of $f$\'s parities to $e\'$, so $e\'$ has $f$\'s $C$-parity and meets $f$ itself by step 1.1. Part of the drawing cannot, so no facial boundary cycle has length four or more.',
        ['1.1', '4.1', 'L3']),
      derive('6.1',
        'The order assumption excludes the one- and two-vertex degeneracies, and steps 5.1 and 1.2 prove both directions.',
        ['5.1', '1.2']),
    ],
    boundaries: c.boundaries.map((b) => {
      if (b.case === 'degenerate') return { ...b, evidence: 'Step 1.1 derives that a facial boundary is a cycle from two-connectivity rather than assuming it, and step 6.1 discharges the small orders.' };
      if (b.case === 'endpoints') return { ...b, evidence: 'Steps 2.1 and 3.1 keep the constructed arc\'s interior inside the face and its ends exactly at the two chosen vertices.' };
      if (b.case === 'nonempty-choice') return { ...b, evidence: 'Step 4.1 selects four vertices from one fixed finite facial boundary cycle.' };
      if (b.case === 'iff-forward') return { ...b, evidence: 'Steps 3.1 to 5.1 prove maximal implies triangular faces.' };
      if (b.case === 'iff-reverse') return { ...b, evidence: 'Step 1.2 proves triangular faces imply maximality.' };
      return b;
    }),
  }),

  'lem-colour-focussing-for-arithmetic-progressions': (c) => ({
    ...c,
    derivations: c.derivations.map((d) => {
      if (d.step === '2.1') {
        return {
          ...d,
          claim: 'Apply the induction hypothesis to the first half of the first selected block, an interval of length $n=F(m,k,r-1)$. It gives either a monochromatic $m$-term progression, which finishes, or $r-1$ colour-focused progressions $A_i=\\{a_i+j d_i:0\\le j<m-1\\}$ of pairwise distinct colours focused at $f$. Each $A_i$ lies in that first half, so $a_i$ and $d_i$ are at most $n$ and the focus $f=a_i+(m-1)d_i\\le2n$ lies in the block, which is what the block length $2n$ is for, exactly as in step 1.1. The translates $A_i\'=\\{a_i+j(d_i+2nt):0\\le j<m-1\\}$ then occupy the same relative positions in blocks $b+jt$, so identical block vectors preserve their colours.',
          inputs: [...new Set([...d.inputs, '1.1'])],
        };
      }
      if (d.step === '3.1') {
        return {
          ...d,
          claim: 'The $A_i\'$ are focused at $f+(m-1)2nt$, and since $f$ lies in block $b$ the points $f,f+2nt,\\ldots,f+(m-2)2nt$ are a monochromatic $(m-1)$-term progression focused there, coloured as $f$ is. If that colour equals some $A_i$\'s, then $A_i\\cup\\{f\\}$ is a monochromatic $m$-term progression and the first alternative holds; otherwise the second alternative has $r$ focused progressions of distinct colours.',
          inputs: d.inputs,
        };
      }
      return d;
    }),
  }),
};

// The four batch-6 consumers whose recorded quote predates the step-6 insertion
// of "two-connected" into cor-planar-simple-graph-edge-bound's Statement.
const B6_QUOTE_FIX = {
  'cor-planar-graph-has-low-degree-vertex': ['L1', 'cor-planar-simple-graph-edge-bound'],
  'cor-k-five-and-k-three-three-are-nonplanar': ['L2', 'cor-planar-simple-graph-edge-bound'],
  'prop-maximally-planar-edge-characterisation': ['L1', 'cor-planar-simple-graph-edge-bound'],
  'cex-k-three-three-satisfies-the-planar-edge-bound': ['L1', 'cor-planar-simple-graph-edge-bound'],
};

// ---------------------------------------------------------------------------
// batch 4 — Dirichlet's test and its two consumers
// ---------------------------------------------------------------------------

const B4 = {
  'thm-dirichlet-test-for-improper-integrals': (c) => ({
    ...c,
    citations: [...c.citations, cite('L5', 'thm-ftc-first-part', ['1.2'])],
    derivations: c.derivations.map((d) => (d.step === '1.2' ? {
      ...d,
      claim: 'In clause 2 $f$ is continuous, hence integrable on every compact subinterval, so [L5] gives $F\'=f$ there — the hypothesis [L3] requires and which boundedness of $F$ does not supply. [L3] then gives the integration-by-parts identity; the boundary term $F(R)g(R)$ tends to zero because $F$ is bounded and $g(R)\\to0$, and $|Fg\'|\\le M|g\'|$ makes $\\int Fg\'$ converge by [L4]. Passing $R\\to\\infty$ proves convergence of $\\int fg$.',
      inputs: [...new Set([...d.inputs, 'L5'])],
    } : d)),
  }),
};

const B4_QUOTE_FIX = {
  'cor-abel-test-for-improper-integrals': ['L3', 'thm-dirichlet-test-for-improper-integrals'],
  'thm-dirichlet-divergence-transfer': ['L2', 'thm-dirichlet-test-for-improper-integrals'],
};

// ---------------------------------------------------------------------------
// batch 2 — the free-product action lemma
// ---------------------------------------------------------------------------

const B2 = {
  'lem-factor-elements-act-on-reduced-syllable-words': (c) => ({
    ...c,
    citations: c.citations.map((x) => ({ ...x, uses: [...new Set([...x.uses, ...(x.fact === 'L3' ? ['3.1'] : ['2.1', '3.1'])])].sort() })),
    derivations: c.derivations.map((d) => {
      if (d.step === '2.1') {
        return {
          ...d,
          claim: 'For $g\\ne e_i$ the three seam cases are checked in full. (a) $w$ empty or with first tag other than $i$: $P_{i,g}(w)=(i,g)w$ and $P_{i,g^{-1}}$ replaces $(i,g)$ by $(i,e_i)$ and deletes it. (b) $w=(i,h)w\'$ with $gh\\ne e_i$: $P_{i,g}(w)=(i,gh)w\'$ and $P_{i,g^{-1}}$ restores $(i,h)$, kept because $h\\ne e_i$. (c) $w=(i,h)w\'$ with $h=g^{-1}$: $P_{i,g}(w)=w\'$, which is empty or has first tag other than $i$ because $w$ is reduced [L1], so $P_{i,g^{-1}}(w\')=(i,h)w\'$. Each returns $w$; exchanging $g$ and $g^{-1}$ gives the other composite, so $P_{i,g}$ is a permutation with $P_{i,g}^{-1}=P_{i,g^{-1}}$ [L2].',
          inputs: [...new Set([...d.inputs, 'L1', 'L2'])],
        };
      }
      if (d.step === '3.1') {
        return {
          ...d,
          claim: 'For $P_{i,gh}=P_{i,g}\\circ P_{i,h}$ both sides are immediate when $g=e_i$ or $h=e_i$; otherwise the same three cases are carried out. (a) $w$ empty or first tag other than $i$: both sides give $(i,gh)w$, or $w$ when $gh=e_i$. (b) $w=(i,a)w\'$ with $ha\\ne e_i$: both sides split on the same product $gha$. (c) $w=(i,a)w\'$ with $ha=e_i$: the left side gives $(i,g)w\'$ by [L1] and the right side replaces $(i,a)$ by $(i,gha)=(i,g)$. Hence $g\\mapsto P_{i,g}$ satisfies (H1) of [L3] into the symmetric group of [L2].',
          inputs: [...new Set([...d.inputs, 'L1', 'L2', 'L3'])],
        };
      }
      return d;
    }),
  }),
};

// ---------------------------------------------------------------------------
// batch 5 — pre-existing: round 1 merged this proof's three steps into two and
// left the contract naming a step 3.1 that no longer exists.
// ---------------------------------------------------------------------------

const B5 = {
  'ex-cavalieri-shear-preserves-jordan-content': (c) => ({
    ...c,
    citations: c.citations.map((x) => (x.fact === 'L2' ? { ...x, uses: ['1.1'] } : x)),
    derivations: [
      derive('1.1',
        'The shear matrix is the identity with one off-diagonal entry $c$, so its determinant is $1$. By [L2] the linear image $S(E)$ is Jordan measurable and $\\operatorname{cont}(S(E))=|1|\\operatorname{cont}(E)=\\operatorname{cont}(E)$.',
        ['L2', 'given']),
      derive('2.1',
        'Sections show the same thing wherever [L1] applies: the section of $S(E)$ is the section of $E$ translated by $cx_i$, of the same one-dimensional content, and [L1] integrates these equal values. This is a second reading and not a second proof, because a bounded Jordan set need not have Jordan sections outside a content-zero parameter set, so step 1.1 carries the statement.',
        ['L1', '1.1']),
    ],
    boundaries: c.boundaries.map((b) => (b.case === 'endpoints'
      ? { ...b, evidence: 'The statement uses bounded Jordan sets and step 1.1 applies the linear-image theorem to the whole set, with no endpoint convention to preserve.' }
      : b)),
  }),
};

// ---------------------------------------------------------------------------

const applyQuoteFixes = (contracts, table) => {
  for (const [id, [fact, source]] of Object.entries(table)) {
    const entry = contracts[id];
    const row = entry.citations.find((x) => x.fact === fact && x.source === source);
    if (!row) throw new Error(`no ${fact} -> ${source} citation in ${id}`);
    row.quote = lead(source, source === 'thm-dirichlet-test-for-improper-integrals' ? 2 : 1);
  }
};

const patch = (batch, table, quoteTable) => {
  const path = `research/frontier-10-batch-${batch}.proof-contracts.json`;
  const json = JSON.parse(readFileSync(path, 'utf8'));
  for (const [id, fn] of Object.entries(table ?? {})) {
    if (!json.contracts[id]) throw new Error(`${path}: no contract for ${id}`);
    json.contracts[id] = fn(json.contracts[id]);
  }
  if (quoteTable) applyQuoteFixes(json.contracts, quoteTable);
  writeFileSync(path, `${JSON.stringify(json, null, 2)}\n`);
  console.log(`patched ${path}`);
};

patch(2, B2);
patch(4, B4, B4_QUOTE_FIX);
patch(5, B5);
patch(6, B6, B6_QUOTE_FIX);
