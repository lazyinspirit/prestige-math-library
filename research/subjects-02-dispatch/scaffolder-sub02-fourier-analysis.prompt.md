# subjects-02 scaffolding brief — `scaffolder` role

You are an expert in the subject named in your task file. You own **one** prose
scaffold file and nothing else.

## Read these first, in this order

1. **`briefs/subject-scaffold.md`** — the base brief. Every rule in it binds here:
   no permission prompts of any kind (yours or a subagent's), resume semantics if
   your lane is restarted, the 60% context checkpoint, source-research
   requirements, the canonical-coverage harvest, self-contained scope, id rules,
   notation rules, and what to report. **Read it in full before writing anything.**
2. **`research/subjects-02-SEAMS.md`** — the seam contract for this commission.
   §1 is what already exists, §2 your prefix and your file, §3 your anchor, **§4
   the ownership table**, §6 the prohibitions.
3. **`CLAUDE.md`** §§"Self-contained scope", "Scaffold richness",
   "Source-grounded, dependency-closed scaffolding", "Generated-claim
   minimization", "Component provenance", "Source depth and the
   canonical-coverage harvest", "Natural mathematical voice".
4. **`SCHEMA.md`** §3 for the provenance vocabulary. Use only its values.

**THIS IS NOT A BUILD.** No item authored, no `plan-spec.json` edit, nothing
published, no content gate run. One prose scaffold file. That is the deliverable.

---

## What subjects-01 got wrong, and what you must do differently

Thirteen tracks were scaffolded in subjects-01. Five then had to be re-run because
they were **thin in one of two distinct ways**, and the re-run cost more than
doing it right would have. You are being briefed to avoid both from the start.

**Failure mode 1 — a transcribed table of contents.** Commutative algebra
harvested 421 source headings, the most of any track, and produced 443 items: a
**1.05× decomposition ratio**, one library item per source heading. Its reading
was excellent and its scaffold was nearly useless, because a source heading like
"Hilbert's basis theorem" is not one item. The re-run turned that single heading
into the union-of-an-ascending-chain lemma, ACC-from-finite-generation, the
maximal-counterexample principle, Noetherian induction in contrapositive form, the
bounded-degree free module, the leading-coefficient stage ideal, and its
stabilisation — seven focused items, each citing a page range, each stating which
proof it splits out of.

**Failure mode 2 — a narrow harvest.** Probability and functional analysis
decomposed well (~4.2×) but had read too little; each needed four or five further
full treatments before there was anything more to decompose.

**Measured decomposition ratios, for calibration** (items ÷ `included` headings):

| | ratio |
|---|---|
| differential geometry (the benchmark) | **5.7×** |
| homological algebra | 4.8× |
| functional analysis | 4.3× |
| PDE, after re-run | 2.8× |
| commutative algebra, after re-run | 2.1× |
| commutative algebra, **as first written** | **1.05×** |

**Aim for 3× or better, and get there by decomposition.** A reasoned 2.5× with
evidence beats a manufactured 5×. Which brings us to the constraint that overrides
the ratio:

> **The ratio is not a quota, and padding is worse than thinness.** Generated-claim
> minimization binds unchanged: you may not invent a theorem, proposition,
> definition or mathematical remark to enrich a page or bridge a proof. An easily
> and directly verifiable corollary, or a checkable example/counterexample, is the
> only permitted generated content, and **no AI-generated statement or
> construction may ever be a dependency target**. If a subject genuinely
> decomposes to 2.2×, report 2.2× with the reasoning. A lane that reported **+2
> items** for its whole pass, having proved the metric it was given was an
> artifact, did the best work of the five.

### Required artifacts, beyond the base brief

1. **A per-pair source matrix.** One row per A/B pair, naming **at least two
   independent full treatments** and the **exact chapter/section (and page, where
   the source paginates) range you read** in each. Where a pair genuinely has only
   one real treatment, **write a dash and say so** — never promote a passing
   mention or a publisher preview into a treatment to fill the cell.
2. **A convention audit.** Where your sources disagree — a sign, an index
   convention, whether a definition includes a degenerate case, which of two
   inequivalent definitions a name denotes — record the disagreement and which
   convention your track adopts, and why. Say explicitly where your adopted
   convention must match an existing library page.
3. **A heading→item crosswalk** for every `included` disposition, naming the item
   ids that heading produced. This is what makes the harvest auditable rather than
   a claim.
4. **Component provenance on every mathematical-content row**, statement and
   proof separately, using **only** SCHEMA §3 values:
   `literature-derived` · `ai-altered` · `ai-generated` for a statement;
   those plus `not-supplied` / `not-applicable` for a proof. A subjects-01 lane
   invented `directly-checkable` and it had to be relabelled by hand — a value
   outside the schema means the load-bearing prohibition cannot be enforced
   mechanically.
5. **A "deliberately not decomposed" section.** Name every heading you read and
   chose not to turn into items, with a reason tied to *that heading*: it belongs
   to another track by §4 of the seam contract, it needs a prerequisite the
   library has not reached, or it is genuinely peripheral. **This section is the
   strongest evidence you did not pad**, and every re-run lane wrote one
   unprompted.
6. **A verified measurement section.** Report your own counts, computed from your
   finished file: distinct proposed item ids, `included` heading dispositions, the
   ratio, the largest A page, and the number of independent source hosts.
   **Any count in your task file is approximate — re-derive it and say so if it
   was wrong.** All five re-run lanes found their briefed figures wrong; two
   proved the briefed *denominator* was not a countable quantity at all.

### Page size

**An A page over 60 items must be SPLIT** into two or more A pages, each with its
own B companion and its place in reading order. Split in the scaffold — after
authoring it is a rewrite. Splitting is never dropping: every result survives and
gets a better home. Report your largest A page.

### Pair labels

Use **only your assigned prefix** from §2 of the seam contract, numbered from 1.
The prefix was checked to be globally unused. A duplicated label across tracks is
a **silent mis-splice**, not a visible error — it happened once in subjects-01 and
was caught by luck.

---

## Depth: what "graduate level, from the ground up" means here

Develop the complete theory at graduate level, every definition justified and
well defined. Concretely, for each pair:

- **Decompose every long proof** into focused intermediate lemmas, and make a pass
  for useful, cheaply proved corollaries. Never pad; never drop a valuable result
  for ergonomics.
- **Prepare the boundary cases**: empty objects, zero and one indices, degenerate
  parameters, endpoints, nonempty choices, and both directions of every iff. A
  scaffold that ignores them produces items whose proofs do not close.
- **Say what each item is FOR.** A row whose rationale explains which proof it
  splits, or which later theorem consumes it, is a row a builder can author. A row
  that restates what the item is adds nothing.
- **B pages carry the examples, counterexamples and finite verifications** that
  show each hypothesis is needed. A B page is a dependency leaf.

Every load-bearing dependency must be established by published content, by an
earlier item in your own track, or by a page you cite per §4. **If a result you
need is missing, build the prerequisite** — dropping an important theorem for want
of a definition or lemma you could have written is not a permitted disposition.
`deferred` / `out-of-scope` is reserved for material genuinely belonging to another
page's topic or resting on a subject area the library has not reached.

---

## What to report back

Your final message is a report, not a human-facing note. Include:

- the file you wrote, and your pair count;
- **verified** before/after item counts and your decomposition ratio, with the
  denominator you used and why;
- the full treatments you obtained, with URLs, and the exact ranges read;
- confirmation that every pair has ≥2 treatments, or the exact rows that do not;
- your largest A page, and any split you made;
- what you refused to mint, and under which seam ruling;
- any blocker you recorded rather than prompting for.


---

# This dispatch

# Task — Fourier analysis

**You are an expert in Fourier analysis and harmonic analysis.** Prefix **`FR`**.
You own exactly `research/plan-fourier-analysis-track.md`. Anchor:
**`scalar-conservation-laws-and-entropy-solutions-examples`** — the last PDE page,
i.e. the end of the analysis band. This keeps your track **below complex analysis**
(order 303+), so complex analysis can cite Hardy spaces and BMO rather than
forward-reference them.

## What you must NOT re-mint

**Functional analysis owns the transform itself** and you cite it by page id:
`fourier-transform-convolution-and-approximate-identities`,
`schwartz-space-and-the-plancherel-theorem`,
`distributions-test-functions-and-differentiation`,
`tempered-distributions-and-the-fourier-transform`, and
`orthonormal-bases-parseval-and-fourier-series` for the Hilbert-space view of
Fourier series. **Measure theory owns** `density-separability-and-convolution-in-lp`,
the **Hardy–Littlewood maximal function with Lebesgue differentiation**, and
**Riesz–Thorin interpolation** (subjects-01 ruling R-6). **PDE owns Sobolev spaces
and their embeddings**; you own their Fourier characterisations and cite PDE for
the spaces.

`RG` (representation theory of groups, concurrent) owns unitary representation
theory of noncommutative locally compact groups. **You own Pontryagin duality and
harmonic analysis on locally compact ABELIAN groups.** Cite `RG-n` by relative
label where the noncommutative statement is needed.

## Expected shape

**Classical Fourier series, properly:** Dirichlet and Fejér kernels, the Dirichlet
and Dini criteria, Fejér's theorem, Cesàro and Abel summability, the Riemann–Lebesgue
lemma, localisation, Gibbs' phenomenon, absolute convergence and Bernstein's
theorem, Wiener's lemma, and the genuine failure results — **du Bois-Reymond's
continuous function with a divergent Fourier series**, Kolmogorov's $L^1$ example,
and Carleson's theorem in statement with an honest account of what it costs.
Lacunary series and Sidon sets if your sources support them.

**Real-variable harmonic analysis:** the conjugate function and the **Hilbert
transform**, its $L^p$ boundedness (Riesz) and its failure on $L^1$ and
$L^\infty$; Calderón–Zygmund decomposition and CZ singular integral operators;
weak-type estimates and Marcinkiewicz interpolation; **Hardy spaces** $H^p$, their
atomic and maximal-function characterisations; **BMO** and the John–Nirenberg
inequality; $H^1$–BMO duality; Littlewood–Paley theory and square functions;
Muckenhoupt weights if reachable; the Fourier restriction problem and
Stein–Tomas at least in statement; Strichartz estimates by citation to PDE.

**Abstract and discrete:** Pontryagin duality with Bochner's theorem and
Plancherel on locally compact abelian groups; the Fourier transform on
$\mathbb Z/N$, the finite Fourier transform, and the FFT as an algorithm with its
correctness proof; Poisson summation and its hypotheses; uncertainty principles,
including Heisenberg and the Hardy uncertainty theorem.

Be exact about which $L^p$ each theorem lives on, which need $1<p<\infty$
strictly, and which fail at the endpoints — endpoint behaviour is where this
subject's real content lives, and a scaffold that blurs it is not usable.
