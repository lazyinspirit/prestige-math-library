## Selection reasons

- critical risk (12): 11 declared dependencies; 11 cited facts; 8 numbered proof steps; existence, choice, uniqueness, or well-definedness; induction, recursion, or minimality; analytic limiting/completeness language

## Target item — `thm-uniform-completion-universal-property-and-uniqueness`

Normalized current SHA-256: `debad3e152af4f9002a504ee186e2633a78c32297aebb9e6b7c8424fe47adec2`

The complete current item follows, including frontmatter:

````markdown
---
id: thm-uniform-completion-universal-property-and-uniqueness
kind: theorem
title: "Every uniformly continuous map into a complete Hausdorff uniform space extends uniquely across the Hausdorff completion; consequently completions are unique up to a unique uniform isomorphism"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-hausdorff-completion-of-a-uniform-space, def-uniformly-continuous-map, def-uniform-embedding-and-uniform-isomorphism, def-complete-uniform-space, def-separated-uniform-space, def-completion-of-a-uniform-space, lem-minimal-cauchy-filter-associated-to-a-cauchy-filter, lem-entourages-on-minimal-cauchy-filters-form-a-separated-uniformity, lem-symmetric-entourages-form-a-base, thm-uniformly-continuous-maps-are-continuous, cor-two-continuous-maps-into-a-hausdorff-space-agreeing-on-a-dense-set-are-equal]
aliases: []
landmark: true
proof_strategy: constructive
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-31
  audited: 2026-07-31
sources:
  scraped: []
  references: [{title: "J. Wodzicki, Uniform Structure", url: "https://math.berkeley.edu/~wodzicki/H104.F13/UniformStructure-alt.pdf"}, {title: "Encyclopedia of Mathematics, Uniform space", url: "https://encyclopediaofmath.org/wiki/Uniform_space"}]
pipeline_run: null
---

## Statement

For a Hausdorff completion $\eta:X\to\widehat X$ and a uniformly continuous $f:X\to Y$ into a complete separated uniform space $Y$, there is a unique uniformly continuous $\widehat f:\widehat X\to Y$ with $\widehat f\eta=f$. Consequently Hausdorff completions are unique up to a unique uniform isomorphism commuting with their canonical maps.

## Facts & Assumptions

**Given:** A Hausdorff completion $\eta:X\to\widehat X$ and a uniformly continuous $f:X\to Y$ with $Y$ complete and separated.

[L1] The minimal-Cauchy-filter construction gives a Hausdorff completion $\eta_c:X\to X_c$ ([[thm-hausdorff-completion-of-a-uniform-space]]), and every Cauchy filter has a canonical associated minimal Cauchy filter ([[lem-minimal-cauchy-filter-associated-to-a-cauchy-filter]]).

[L2] Uniform continuity, uniform isomorphism, completeness, and separatedness have their stated meanings ([[def-uniformly-continuous-map]], [[def-uniform-embedding-and-uniform-isomorphism]], [[def-complete-uniform-space]], [[def-separated-uniform-space]]).

[L3] The basic entourages of $X_c$ declare two minimal Cauchy filters close when they have cross-close members ([[lem-entourages-on-minimal-cauchy-filters-form-a-separated-uniformity]]), and symmetric entourages with prescribed finite-composite control exist ([[lem-symmetric-entourages-form-a-base]]).

[L4] Uniformly continuous maps are continuous, and two continuous maps into a Hausdorff space that agree on a dense subset agree everywhere ([[thm-uniformly-continuous-maps-are-continuous]], [[cor-two-continuous-maps-into-a-hausdorff-space-agreeing-on-a-dense-set-are-equal]]).

[A1] A Hausdorff completion has dense image and its source uniformity is exactly the pullback of the target uniformity ([[def-completion-of-a-uniform-space]]).

## Proof

**Proof technique:** constructive.

1.1 First use the canonical completion $X_c$. For a minimal Cauchy filter $\mathcal M\in X_c$, its image filter $$ f_*\mathcal M:=\{B\subseteq Y:f^{-1}[B]\in\mathcal M\} $$ is Cauchy: for a target entourage $V$, uniform continuity supplies a source entourage $E$ whose $E$-related pairs have $V$-related images, and an $E$-small member of $\mathcal M$ has $V$-small image. Completeness gives a limit, which is unique by separatedness. Define $\widehat f_c(\mathcal M)$ to be that limit. [L1, L2, construct]

2.1 For $x\in X$, the image under $f$ of the minimal point filter $\eta_c(x)$ converges to $f(x)$: for a neighbourhood ball $V[f(x)]$, uniform continuity supplies a source ball at $x$ whose image lies in it. Therefore $\widehat f_c\eta_c=f$. [step 1.1, L1, L2]

2.2 The map $\widehat f_c$ is uniformly continuous. Given a target entourage $V$, choose a symmetric $W$ with $W^{\circ3}\subseteq V$, and a source entourage $E$ whose $E$-related pairs have $W$-related images. If $\mathcal M\,\widehat E\,\mathcal N$, take witnesses $A\in\mathcal M$ and $B\in\mathcal N$ with $A\times B\subseteq E$. Since the image filters converge to $\widehat f_c(\mathcal M)$ and $\widehat f_c(\mathcal N)$, respectively, their members $f[A]$ and $f[B]$ meet the corresponding $W$-balls. Thus the two limits are related by $W\circ W\circ W\subseteq V$. [step 1.1, L2, L3]

3.1 Any two uniformly continuous extensions across $\eta_c$ agree on the dense set $\eta_c[X]$, hence agree everywhere by [L4]. Thus the canonical completion has the asserted extension property. [step 2.1, step 2.2, L1, L4]

4.1 Now let $\eta:X\to\widehat X$ be an arbitrary Hausdorff completion. Step 3.1 applied to $\eta$ gives a uniformly continuous $T:X_c\to\widehat X$ with $T\eta_c=\eta$. For $z\in\widehat X$, let $\mathcal F_z$ be the filter on $X$ generated by the sets $$ A_V(z):=\{x\in X:(\eta(x),z)\in V\}, $$ where $V$ ranges over symmetric entourages of $\widehat X$. Density makes these sets nonempty; intersections are refined by intersecting entourages. The pullback condition in [A1], together with a symmetric square root in $\widehat X$, shows that $\mathcal F_z$ is Cauchy. Define $S(z):=m(\mathcal F_z)\in X_c$. [step 3.1, L1, L3, A1, construct]

5.1 The same pullback calculation gives $S\eta=\eta_c$. It also proves that $S$ is uniformly continuous: for a basic $\widehat E$ of $X_c$, choose a symmetric source entourage $D$ with $D^{\circ3}\subseteq E$, then a symmetric target entourage $V$ whose pullback lies in $D$ and a symmetric $W$ with $W^{\circ3}\subseteq V$. If $(z,z')\in W$, then $A_W(z)\times A_W(z')$ is $D$-small across the two filters; enlarging these sets by $D$ gives members of their associated minimal filters whose cross product lies in $D^{\circ3}\subseteq E$. Hence $(S(z),S(z'))\in\widehat E$. [step 4.1, L1, L3, A1]

6.1 The maps $ST:X_c\to X_c$ and $TS:\widehat X\to\widehat X$ agree with the respective identity maps on the dense images of $X$. By [L4] they are the identity maps. Thus $T$ and $S$ are inverse uniform isomorphisms, uniquely so because any competing map agrees with $T$ on the dense image. [step 4.1, step 5.1, L1, L2, L4]

7.1 For the original map $f:X\to Y$, the composite $\widehat f:=\widehat f_c\circ S:\widehat X\to Y$ is uniformly continuous and satisfies $\widehat f\eta=f$. Uniqueness follows from density and [L4]. Consequently every Hausdorff completion has the extension property, and step 6.1 proves uniqueness of completions up to the unique stated uniform isomorphism. [step 2.1, step 2.2, step 5.1, step 6.1, L4, discharge-construct] ∎
````

## Wave 7 provenance row for the target

```json
{
  "id": "thm-uniform-completion-universal-property-and-uniqueness",
  "statement": "literature-derived",
  "proof": "ai-altered",
  "evidence": "exact-source",
  "urls": [
    "https://math.berkeley.edu/~wodzicki/H104.F13/UniformStructure-alt.pdf",
    "https://encyclopediaofmath.org/wiki/Uniform_space"
  ],
  "rationale": "Wodzicki 6.2.3 states the same unique extension of every uniformly continuous map into a complete Hausdorff uniform space. Uniqueness of completions is its exact categorical consequence.",
  "alpha_concurred": false,
  "at": "2026-08-08",
  "ledger": "wave7-topology-uniform.provenance.jsonl"
}
```

## Proof contract for the target

```json
{
  "citations": [
    {
      "fact": "L1",
      "source": "thm-hausdorff-completion-of-a-uniform-space",
      "source_section": "Statement",
      "quote": "Every uniform space $X$ has a Hausdorff completion $\\eta:X\\to\\widehat X$. The map has dense image, and it is a uniform embedding if and only if the original uniformity is separated.",
      "uses": [
        "1.1",
        "2.1",
        "3.1",
        "4.1",
        "5.1",
        "6.1"
      ]
    },
    {
      "fact": "L1",
      "source": "lem-minimal-cauchy-filter-associated-to-a-cauchy-filter",
      "source_section": "Statement",
      "quote": "Every Cauchy filter $\\mathcal F$ canonically determines a unique Cauchy filter $m(\\mathcal F)\\subseteq\\mathcal F$ that has no strictly coarser Cauchy filter. For every $x\\in X$, the principal filter $\\mathcal P_x:=\\{A\\subseteq X:x\\in A\\}$ is Cauchy and therefore has an associated minimal Cauchy filter $m(\\mathcal P_x)$.",
      "uses": [
        "1.1",
        "2.1",
        "3.1",
        "4.1",
        "5.1",
        "6.1"
      ]
    },
    {
      "fact": "L2",
      "source": "def-uniformly-continuous-map",
      "source_section": "Definition",
      "quote": "For uniform spaces $(X,\\mathcal U_X)$ and $(Y,\\mathcal U_Y)$, a map $f:X\\to Y$ is **uniformly continuous** if for every $V\\in\\mathcal U_Y$ there is $U\\in\\mathcal U_X$ such that $(x,x')\\in U$ implies $(f(x),f(x'))\\in V$. The controlling entourage $U$ is independent of the point $x$.",
      "uses": [
        "1.1",
        "2.1",
        "2.2",
        "6.1"
      ]
    },
    {
      "fact": "L2",
      "source": "def-uniform-embedding-and-uniform-isomorphism",
      "source_section": "Definition",
      "quote": "A map $f:X\\to Y$ of uniform spaces is a **uniform embedding** if it is injective and its corestriction $X\\to f[X]$, with the subspace uniformity, is a uniform isomorphism. A **uniform isomorphism** is a bijection whose map and inverse are uniformly continuous. Bijection and corestriction are understood in the sense of [[def-injection-surjection-bijection]].",
      "uses": [
        "1.1",
        "2.1",
        "2.2",
        "6.1"
      ]
    },
    {
      "fact": "L2",
      "source": "def-complete-uniform-space",
      "source_section": "Definition",
      "quote": "A uniform space is **complete** when every Cauchy filter ([[def-cauchy-filter-in-a-uniform-space]]) converges to at least one point of its induced topology ([[def-filter-convergence-and-cluster-point]]). No separatedness is built into this definition.",
      "uses": [
        "1.1",
        "2.1",
        "2.2",
        "6.1"
      ]
    },
    {
      "fact": "L2",
      "source": "def-separated-uniform-space",
      "source_section": "Definition",
      "quote": "A uniformity $\\mathcal U$ on $X$ is **separated** when $\\bigcap_{E\\in\\mathcal U}E=\\Delta_X$ ([[def-the-diagonal-of-a-space]]). Equivalently, whenever $x\\ne y$, some entourage $E$ satisfies $(x,y)\\notin E$. Separation is a property of the uniformity, not an additional convention in the meaning of uniform space.",
      "uses": [
        "1.1",
        "2.1",
        "2.2",
        "6.1"
      ]
    },
    {
      "fact": "L3",
      "source": "lem-entourages-on-minimal-cauchy-filters-form-a-separated-uniformity",
      "source_section": "Statement",
      "quote": "On the set $\\widehat X$ of minimal Cauchy filters, the relations $\\widehat E$ declaring that two filters have $E$-close members form a separated uniformity.",
      "uses": [
        "2.2",
        "4.1",
        "5.1"
      ]
    },
    {
      "fact": "L3",
      "source": "lem-symmetric-entourages-form-a-base",
      "source_section": "Statement",
      "quote": "If $\\mathcal U$ is a uniformity on $X$, then its symmetric entourages form a filter base: for every $E\\in\\mathcal U$ there is a symmetric $D\\in\\mathcal U$ with $D\\subseteq E$. More generally, for every entourage $E$ and every integer $n\\ge 1$, there is a symmetric entourage $D$ whose $n$-fold composite satisfies $D^{\\circ n}\\subseteq E$.",
      "uses": [
        "2.2",
        "4.1",
        "5.1"
      ]
    },
    {
      "fact": "L4",
      "source": "thm-uniformly-continuous-maps-are-continuous",
      "source_section": "Statement",
      "quote": "Every uniformly continuous map between uniform spaces is continuous for their induced topologies.",
      "uses": [
        "3.1",
        "6.1",
        "7.1"
      ]
    },
    {
      "fact": "L4",
      "source": "cor-two-continuous-maps-into-a-hausdorff-space-agreeing-on-a-dense-set-are-equal",
      "source_section": "Statement",
      "quote": "So a continuous map into a Hausdorff space is determined by its restriction to\nany dense subset of its domain. Nothing is asserted about *which* functions on\n$D$ extend: the statement is about uniqueness of an extension, not existence.",
      "uses": [
        "3.1",
        "6.1",
        "7.1"
      ]
    },
    {
      "fact": "A1",
      "source": "def-completion-of-a-uniform-space",
      "source_section": "Definition",
      "quote": "- The image $\\eta[X]$ is dense:\n  $\\overline{\\eta[X]}=\\widehat X$ ([[def-interior-closure-boundary-top]]).\n- The original uniformity is exactly the uniformity pulled back along $\\eta$:\n  for every $\\widehat E\\in\\widehat{\\mathcal U}$,\n  $(\\eta\\times\\eta)^{-1}[\\widehat E]\\in\\mathcal U$, and for every\n  $E\\in\\mathcal U$ there is $\\widehat E\\in\\widehat{\\mathcal U}$ with\n  $(\\eta\\times\\eta)^{-1}[\\widehat E]\\subseteq E$.",
      "uses": [
        "4.1",
        "5.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1.1",
      "claim": "First use the canonical completion $X_c$. For a minimal Cauchy filter $\\mathcal M\\in X_c$, its image filter $$ f_*\\mathcal M:=\\{B\\subseteq Y:f^{-1}[B]\\in\\mathcal M\\} $$ is Cauchy: for a target entourage $V$, uniform continuity supplies a source entourage $E$ whose $E$-related pairs have $V$-related images, and an $E$-small member of $\\mathcal M$ has $V$-small image. Completeness gives a limit, which is unique by separatedness. Define $\\widehat f_c(\\mathcal M)$ to be that limit. [L1, L2, construct]",
      "step": "1.1",
      "inputs": [
        "L1",
        "L2"
      ]
    },
    {
      "id": "step-2.1",
      "claim": "For $x\\in X$, the image under $f$ of the minimal point filter $\\eta_c(x)$ converges to $f(x)$: for a neighbourhood ball $V[f(x)]$, uniform continuity supplies a source ball at $x$ whose image lies in it. Therefore $\\widehat f_c\\eta_c=f$. [step 1.1, L1, L2]",
      "step": "2.1",
      "inputs": [
        "1.1",
        "L1",
        "L2"
      ]
    },
    {
      "id": "step-2.2",
      "claim": "The map $\\widehat f_c$ is uniformly continuous. Given a target entourage $V$, choose a symmetric $W$ with $W^{\\circ3}\\subseteq V$, and a source entourage $E$ whose $E$-related pairs have $W$-related images. If $\\mathcal M\\,\\widehat E\\,\\mathcal N$, take witnesses $A\\in\\mathcal M$ and $B\\in\\mathcal N$ with $A\\times B\\subseteq E$. Since the image filters converge to $\\widehat f_c(\\mathcal M)$ and $\\widehat f_c(\\mathcal N)$, respectively, their members $f[A]$ and $f[B]$ meet the corresponding $W$-balls. Thus the two limits are related by $W\\circ W\\circ W\\subseteq V$. [step 1.1, L2, L3]",
      "step": "2.2",
      "inputs": [
        "1.1",
        "L2",
        "L3"
      ]
    },
    {
      "id": "step-3.1",
      "claim": "Any two uniformly continuous extensions across $\\eta_c$ agree on the dense set $\\eta_c[X]$, hence agree everywhere by [L4]. Thus the canonical completion has the asserted extension property. [step 2.1, step 2.2, L1, L4]",
      "step": "3.1",
      "inputs": [
        "L4",
        "2.1",
        "2.2",
        "L1"
      ]
    },
    {
      "id": "step-4.1",
      "claim": "Now let $\\eta:X\\to\\widehat X$ be an arbitrary Hausdorff completion. Step 3.1 applied to $\\eta$ gives a uniformly continuous $T:X_c\\to\\widehat X$ with $T\\eta_c=\\eta$. For $z\\in\\widehat X$, let $\\mathcal F_z$ be the filter on $X$ generated by the sets $$ A_V(z):=\\{x\\in X:(\\eta(x),z)\\in V\\}, $$ where $V$ ranges over symmetric entourages of $\\widehat X$. Density makes these sets nonempty; intersections are refined by intersecting entourages. The pullback condition in [A1], together with a symmetric square root in $\\widehat X$, shows that $\\mathcal F_z$ is Cauchy. Define $S(z):=m(\\mathcal F_z)\\in X_c$. [step 3.1, L1, L3, A1, construct]",
      "step": "4.1",
      "inputs": [
        "3.1",
        "A1",
        "L1",
        "L3"
      ]
    },
    {
      "id": "step-5.1",
      "claim": "The same pullback calculation gives $S\\eta=\\eta_c$. It also proves that $S$ is uniformly continuous: for a basic $\\widehat E$ of $X_c$, choose a symmetric source entourage $D$ with $D^{\\circ3}\\subseteq E$, then a symmetric target entourage $V$ whose pullback lies in $D$ and a symmetric $W$ with $W^{\\circ3}\\subseteq V$. If $(z,z')\\in W$, then $A_W(z)\\times A_W(z')$ is $D$-small across the two filters; enlarging these sets by $D$ gives members of their associated minimal filters whose cross product lies in $D^{\\circ3}\\subseteq E$. Hence $(S(z),S(z'))\\in\\widehat E$. [step 4.1, L1, L3, A1]",
      "step": "5.1",
      "inputs": [
        "4.1",
        "L1",
        "L3",
        "A1"
      ]
    },
    {
      "id": "step-6.1",
      "claim": "The maps $ST:X_c\\to X_c$ and $TS:\\widehat X\\to\\widehat X$ agree with the respective identity maps on the dense images of $X$. By [L4] they are the identity maps. Thus $T$ and $S$ are inverse uniform isomorphisms, uniquely so because any competing map agrees with $T$ on the dense image. [step 4.1, step 5.1, L1, L2, L4]",
      "step": "6.1",
      "inputs": [
        "L4",
        "4.1",
        "5.1",
        "L1",
        "L2"
      ]
    },
    {
      "id": "step-7.1",
      "claim": "For the original map $f:X\\to Y$, the composite $\\widehat f:=\\widehat f_c\\circ S:\\widehat X\\to Y$ is uniformly continuous and satisfies $\\widehat f\\eta=f$. Uniqueness follows from density and [L4]. Consequently every Hausdorff completion has the extension property, and step 6.1 proves uniqueness of completions up to the unique stated uniform isomorphism. [step 2.1, step 2.2, step 5.1, step 6.1, L4, discharge-construct] ∎",
      "step": "7.1",
      "inputs": [
        "L4",
        "6.1",
        "2.1",
        "2.2",
        "5.1"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "checked",
      "evidence": "statement and step 1.1: the explicit empty-set or empty-family branch was checked against the displayed definitions"
    },
    {
      "case": "zero",
      "status": "checked",
      "evidence": "statement and step 1.1: zero distance, zero index, or the base-value case was inspected under the displayed inequalities and definitions"
    },
    {
      "case": "one",
      "status": "checked",
      "evidence": "statement and step 1.1: the singleton, identity, finite-one, or unit-scale case was inspected"
    },
    {
      "case": "degenerate",
      "status": "checked",
      "evidence": "statement and step 1.1: the diagonal, coincident-point, constant, minimal, or equality degeneration was checked"
    },
    {
      "case": "endpoints",
      "status": "not_applicable",
      "reason": "No interval endpoint, one-sided limit, or strict-versus-weak boundary enters the claim."
    },
    {
      "case": "nonempty-choice",
      "status": "checked",
      "evidence": "statement and step 1.1: every selection was checked for a stated nonempty source, a canonical definition, or the expressly assumed choice principle"
    },
    {
      "case": "iff-forward",
      "status": "not_applicable",
      "reason": "The statement is not a biconditional and has no forward iff direction."
    },
    {
      "case": "iff-reverse",
      "status": "not_applicable",
      "reason": "The statement is not a biconditional and has no reverse iff direction."
    }
  ],
  "finite_smoke": [],
  "risk_review": {
    "status": "complete",
    "reviewer": "Audit-Alpha wave 7 (owner-delegated); DeepSeek V4 Pro audit-refuter",
    "notes": "critical risk (12): 11 declared dependencies; 11 cited facts; 8 numbered proof steps; existence, choice, uniqueness, or well-definedness; induction, recursion, or minimality; analytic limiting/completeness language, routed by risk-report.mjs. The read-only DeepSeek V4 Pro audit-refuter received the complete target and every cited dependency and returned CLEAN. Boundary evidence: The empty-space, singleton, and degenerate (diagonal) entourage cases were checked. The empty space yields empty completions; all statements hold vacuously or trivially. The proof's filter manipulations use only the finite-intersection property, which is valid for proper filters, and no extra choice is required. No interval endpoint or iff direction applies. No counterexample was found. Checked surface: The title, public claim, every numbered proof step (1.1–7.1), and the absence of a Remarks section were read and verified. ``` Alpha adjudicated the return against the current item and cited dependencies on disk and found no fatal mathematical or dependency-citation defect. Evidence: research/audit/wave7-preserved-refuters/thm-uniform-completion-universal-property-and-uniqueness--f6045e132c6bb9db.result.json."
  }
}
```

## Generated audit-manifest relationships for the target

```json
[
  {
    "source": "thm-uniform-completion-universal-property-and-uniqueness",
    "sourcePage": "uniform-spaces",
    "batch": "wave7-topology-uniform",
    "target": "thm-hausdorff-completion-of-a-uniform-space",
    "declared_target": "thm-hausdorff-completion-of-a-uniform-space",
    "target_statement_provenance": "ai-altered",
    "targetPage": "uniform-spaces",
    "targetBatch": "wave7-topology-uniform",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-uniform-completion-universal-property-and-uniqueness",
    "sourcePage": "uniform-spaces",
    "batch": "wave7-topology-uniform",
    "target": "def-uniformly-continuous-map",
    "declared_target": "def-uniformly-continuous-map",
    "target_statement_provenance": "literature-derived",
    "targetPage": "uniform-spaces",
    "targetBatch": "wave7-topology-uniform",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-uniform-completion-universal-property-and-uniqueness",
    "sourcePage": "uniform-spaces",
    "batch": "wave7-topology-uniform",
    "target": "def-uniform-embedding-and-uniform-isomorphism",
    "declared_target": "def-uniform-embedding-and-uniform-isomorphism",
    "target_statement_provenance": "ai-altered",
    "targetPage": "uniform-spaces",
    "targetBatch": "wave7-topology-uniform",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-uniform-completion-universal-property-and-uniqueness",
    "sourcePage": "uniform-spaces",
    "batch": "wave7-topology-uniform",
    "target": "def-complete-uniform-space",
    "declared_target": "def-complete-uniform-space",
    "target_statement_provenance": "literature-derived",
    "targetPage": "uniform-spaces",
    "targetBatch": "wave7-topology-uniform",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-uniform-completion-universal-property-and-uniqueness",
    "sourcePage": "uniform-spaces",
    "batch": "wave7-topology-uniform",
    "target": "def-separated-uniform-space",
    "declared_target": "def-separated-uniform-space",
    "target_statement_provenance": "literature-derived",
    "targetPage": "uniform-spaces",
    "targetBatch": "wave7-topology-uniform",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-uniform-completion-universal-property-and-uniqueness",
    "sourcePage": "uniform-spaces",
    "batch": "wave7-topology-uniform",
    "target": "def-completion-of-a-uniform-space",
    "declared_target": "def-completion-of-a-uniform-space",
    "target_statement_provenance": "ai-altered",
    "targetPage": "uniform-spaces",
    "targetBatch": "wave7-topology-uniform",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-uniform-completion-universal-property-and-uniqueness",
    "sourcePage": "uniform-spaces",
    "batch": "wave7-topology-uniform",
    "target": "lem-minimal-cauchy-filter-associated-to-a-cauchy-filter",
    "declared_target": "lem-minimal-cauchy-filter-associated-to-a-cauchy-filter",
    "target_statement_provenance": "ai-altered",
    "targetPage": "uniform-spaces",
    "targetBatch": "wave7-topology-uniform",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-uniform-completion-universal-property-and-uniqueness",
    "sourcePage": "uniform-spaces",
    "batch": "wave7-topology-uniform",
    "target": "lem-entourages-on-minimal-cauchy-filters-form-a-separated-uniformity",
    "declared_target": "lem-entourages-on-minimal-cauchy-filters-form-a-separated-uniformity",
    "target_statement_provenance": "ai-altered",
    "targetPage": "uniform-spaces",
    "targetBatch": "wave7-topology-uniform",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-uniform-completion-universal-property-and-uniqueness",
    "sourcePage": "uniform-spaces",
    "batch": "wave7-topology-uniform",
    "target": "lem-symmetric-entourages-form-a-base",
    "declared_target": "lem-symmetric-entourages-form-a-base",
    "target_statement_provenance": "ai-altered",
    "targetPage": "uniform-spaces",
    "targetBatch": "wave7-topology-uniform",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-uniform-completion-universal-property-and-uniqueness",
    "sourcePage": "uniform-spaces",
    "batch": "wave7-topology-uniform",
    "target": "thm-uniformly-continuous-maps-are-continuous",
    "declared_target": "thm-uniformly-continuous-maps-are-continuous",
    "target_statement_provenance": "literature-derived",
    "targetPage": "uniform-spaces",
    "targetBatch": "wave7-topology-uniform",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-uniform-completion-universal-property-and-uniqueness",
    "sourcePage": "uniform-spaces",
    "batch": "wave7-topology-uniform",
    "target": "cor-two-continuous-maps-into-a-hausdorff-space-agreeing-on-a-dense-set-are-equal",
    "declared_target": "cor-two-continuous-maps-into-a-hausdorff-space-agreeing-on-a-dense-set-are-equal",
    "target_statement_provenance": "literature-derived",
    "targetPage": "hausdorff-via-the-diagonal",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  }
]
```

## Relevant pending generated-risk rows

```json
[]
```

## Full text of every cited or declared item (11)

### `cor-two-continuous-maps-into-a-hausdorff-space-agreeing-on-a-dense-set-are-equal`

````markdown
---
id: cor-two-continuous-maps-into-a-hausdorff-space-agreeing-on-a-dense-set-are-equal
kind: corollary
title: "Two continuous maps into a Hausdorff space that agree on a dense subset are equal"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-the-agreement-set-of-two-maps-into-a-hausdorff-space-is-closed,
       def-dense-top, thm-closure-characterisation-top, def-hausdorff-space,
       def-continuous-map-top, def-interior-closure-boundary-top]
justified_by: []
aliases: [cor-maps-determined-by-a-dense-set]
landmark: true
short: "maps into a Hausdorff space are determined on a dense set"
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: claude-fable-5
    verdict: certify
    date: 2026-07-29
    scope: page
    delegated_by: owner
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Dense set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Dense_set"
    - title: "Hausdorff space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Hausdorff_space"
    - title: "General Topology Notes (UC Riverside)"
      url: "https://math.ucr.edu/~res/math205A-2014/gentop-notes.pdf"
pipeline_run: null
---

## Statement

Let $Z$ be a topological space, let $D \subseteq Z$ be dense
([[def-dense-top]]), let $Y$ be Hausdorff ([[def-hausdorff-space]]) and let
$f, g : Z \to Y$ be continuous ([[def-continuous-map-top]]) with

$$f(d) = g(d) \qquad \text{for every } d \in D .$$

Then $f = g$.

So a continuous map into a Hausdorff space is determined by its restriction to
any dense subset of its domain. Nothing is asserted about *which* functions on
$D$ extend: the statement is about uniqueness of an extension, not existence.

## Facts & Assumptions

**Given:** A topological space $Z$, a dense subset $D \subseteq Z$, a Hausdorff space $Y$, and continuous maps $f, g : Z \to Y$ agreeing at every point of $D$.

[A1] $D$ is dense in $Z$, that is $\overline{D} = Z$ ([[def-dense-top]]).

[L1] The agreement set $E(f,g) = \{\, z \in Z : f(z) = g(z) \,\}$ is closed in $Z$ ([[cor-the-agreement-set-of-two-maps-into-a-hausdorff-space-is-closed]], [[def-hausdorff-space]], [[def-continuous-map-top]]).

[L2] $\overline{A}$ is the smallest closed superset of $A$: it is contained in every closed set containing $A$ ([[thm-closure-characterisation-top]], claim 2, [[def-interior-closure-boundary-top]]).

## Proof

**Proof technique:** direct.

1.1 $E(f,g)$ is closed in $Z$. [L1]

1.2 $D \subseteq E(f,g)$, since $f$ and $g$ agree at every point of $D$. [given]

2.1 $Z = \overline{D} \subseteq E(f,g)$, the equality by [A1] and the inclusion because $E(f,g)$ is a closed set containing $D$. [step 1.1, step 1.2, A1, L2]

3.1 $E(f,g) \subseteq Z$ holds by definition, so $E(f,g) = Z$, that is $f(z) = g(z)$ for every $z \in Z$ and $f = g$. [step 2.1] ∎

## Remarks

- **The Hausdorff hypothesis is spent exactly once**, inside [L1], and the density hypothesis exactly once, at step 2.1. Neither is used anywhere else, and neither can be weakened to the other: a dense agreement set alone does not force equality without a separation hypothesis on the codomain, and a Hausdorff codomain alone plainly does not.

- **Density is a hypothesis about $Z$, not about $Y$.** In particular the statement is about one domain and one dense subset of it; it says nothing about restrictions to subsets that are merely large in some other sense, and there is no cardinality condition anywhere in it.

- **The uniqueness/existence split matters.** A continuous $f : D \to Y$ need not extend continuously to $Z$ at all. What this corollary rules out is *two different* extensions, and that is exactly what makes an extension, when it exists, worth naming.
````

### `def-complete-uniform-space`

````markdown
---
id: def-complete-uniform-space
kind: definition
title: "Complete uniform space: every Cauchy filter converges"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-cauchy-filter-in-a-uniform-space, def-filter-convergence-and-cluster-point]
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-31
  audited: 2026-07-31
sources:
  scraped: []
  references: [{title: "J. Wodzicki, Uniform Structure", url: "https://math.berkeley.edu/~wodzicki/H104.F13/UniformStructure-alt.pdf"}, {title: "Encyclopedia of Mathematics, Complete uniform space", url: "https://encyclopediaofmath.org/wiki/Complete_uniform_space"}]
pipeline_run: null
---

## Definition

A uniform space is **complete** when every Cauchy filter ([[def-cauchy-filter-in-a-uniform-space]]) converges to at least one point of its induced topology ([[def-filter-convergence-and-cluster-point]]). No separatedness is built into this definition.
````

### `def-completion-of-a-uniform-space`

````markdown
---
id: def-completion-of-a-uniform-space
kind: definition
title: "A Hausdorff completion of a uniform space and its canonical dense map"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-complete-uniform-space, def-separated-uniform-space, def-uniform-embedding-and-uniform-isomorphism, def-interior-closure-boundary-top, def-uniformly-continuous-map]
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-31
  audited: 2026-07-31
sources:
  scraped: []
  references: [{title: "J. Wodzicki, Uniform Structure", url: "https://math.berkeley.edu/~wodzicki/H104.F13/UniformStructure-alt.pdf"}, {title: "Encyclopedia of Mathematics, Uniform space", url: "https://encyclopediaofmath.org/wiki/Uniform_space"}, {title: "Encyclopedia of Mathematics, Complete uniform space", url: "https://encyclopediaofmath.org/wiki/Complete_uniform_space"}]
pipeline_run: null
---

## Definition

A **Hausdorff completion** of a uniform space $(X,\mathcal U)$ is a complete
separated uniform space $(\widehat X,\widehat{\mathcal U})$ together with a map
$\eta:X\to\widehat X$ satisfying both of the following conditions.

- The image $\eta[X]$ is dense:
  $\overline{\eta[X]}=\widehat X$ ([[def-interior-closure-boundary-top]]).
- The original uniformity is exactly the uniformity pulled back along $\eta$:
  for every $\widehat E\in\widehat{\mathcal U}$,
  $(\eta\times\eta)^{-1}[\widehat E]\in\mathcal U$, and for every
  $E\in\mathcal U$ there is $\widehat E\in\widehat{\mathcal U}$ with
  $(\eta\times\eta)^{-1}[\widehat E]\subseteq E$.

The first half of the second condition is uniform continuity
([[def-uniformly-continuous-map]]); the second half prevents the completion map
from discarding any of the original uniform structure. The map is not required
to be injective. It is a uniform embedding
([[def-uniform-embedding-and-uniform-isomorphism]]) exactly when it is injective,
and this is the usual completion of a separated uniform space.
````

### `def-separated-uniform-space`

````markdown
---
id: def-separated-uniform-space
kind: definition
title: "Separated uniformity: the intersection of all entourages is the diagonal"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-uniform-space-by-entourages, def-the-diagonal-of-a-space]
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-31
  audited: 2026-07-31
sources:
  scraped: []
  references: [{title: "J. Wodzicki, Uniform Structure", url: "https://math.berkeley.edu/~wodzicki/H104.F13/UniformStructure-alt.pdf"}, {title: "Encyclopedia of Mathematics, Uniform space", url: "https://encyclopediaofmath.org/wiki/Uniform_space"}]
pipeline_run: null
---

## Definition

A uniformity $\mathcal U$ on $X$ is **separated** when $\bigcap_{E\in\mathcal U}E=\Delta_X$ ([[def-the-diagonal-of-a-space]]). Equivalently, whenever $x\ne y$, some entourage $E$ satisfies $(x,y)\notin E$. Separation is a property of the uniformity, not an additional convention in the meaning of uniform space.
````

### `def-uniform-embedding-and-uniform-isomorphism`

````markdown
---
id: def-uniform-embedding-and-uniform-isomorphism
kind: definition
title: "Uniform embedding and uniform isomorphism"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-uniformly-continuous-map, def-injection-surjection-bijection]
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-31
  audited: 2026-07-31
sources:
  scraped: []
  references: [{title: "J. Wodzicki, Uniform Structure", url: "https://math.berkeley.edu/~wodzicki/H104.F13/UniformStructure-alt.pdf"}, {title: "Encyclopedia of Mathematics, Uniform space", url: "https://encyclopediaofmath.org/wiki/Uniform_space"}]
pipeline_run: null
---

## Definition

A map $f:X\to Y$ of uniform spaces is a **uniform embedding** if it is injective and its corestriction $X\to f[X]$, with the subspace uniformity, is a uniform isomorphism. A **uniform isomorphism** is a bijection whose map and inverse are uniformly continuous. Bijection and corestriction are understood in the sense of [[def-injection-surjection-bijection]].
````

### `def-uniformly-continuous-map`

````markdown
---
id: def-uniformly-continuous-map
kind: definition
title: "Uniformly continuous map between uniform spaces"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-uniform-space-by-entourages]
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-31
  audited: 2026-07-31
sources:
  scraped: []
  references: [{title: "J. Wodzicki, Uniform Structure", url: "https://math.berkeley.edu/~wodzicki/H104.F13/UniformStructure-alt.pdf"}, {title: "M. Megrelishvili, Lecture Notes in Topological Groups", url: "https://u.math.biu.ac.il/~megereli/TGrNotes070217.pdf"}]
pipeline_run: null
---

## Definition

For uniform spaces $(X,\mathcal U_X)$ and $(Y,\mathcal U_Y)$, a map $f:X\to Y$ is **uniformly continuous** if for every $V\in\mathcal U_Y$ there is $U\in\mathcal U_X$ such that $(x,x')\in U$ implies $(f(x),f(x'))\in V$. The controlling entourage $U$ is independent of the point $x$.
````

### `lem-entourages-on-minimal-cauchy-filters-form-a-separated-uniformity`

````markdown
---
id: lem-entourages-on-minimal-cauchy-filters-form-a-separated-uniformity
kind: lemma
title: "The standard entourages on minimal Cauchy filters form a separated uniformity"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [lem-minimal-cauchy-filter-associated-to-a-cauchy-filter, def-uniform-space-by-entourages, def-separated-uniform-space, lem-symmetric-entourages-form-a-base]
aliases: []
landmark: true
proof_strategy: constructive
verification:
  precheck: pass
  verified:
    model: gpt-5.6-terra-codex-subscription
    verdict: certify
    date: 2026-08-09
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references: [{title: "J. Wodzicki, Uniform Structure", url: "https://math.berkeley.edu/~wodzicki/H104.F13/UniformStructure-alt.pdf"}, {title: "J. H. V. Hunt, Boletín de la Sociedad Matemática Mexicana 34 (1989), 11–21", url: "https://www.boletin.math.org.mx/pdf/2/34/BSMM%282%29.34.11-21.pdf"}]
pipeline_run: null
---

## Statement

On the set $\widehat X$ of minimal Cauchy filters, the relations $\widehat E$ declaring that two filters have $E$-close members form a separated uniformity.

## Facts & Assumptions

**Given:** Minimal Cauchy filters $\mathcal F,\mathcal G$ on $X$.

[L1] Every Cauchy filter has a unique associated minimal Cauchy filter, and every principal filter is Cauchy and therefore has an associated minimal Cauchy filter ([[lem-minimal-cauchy-filter-associated-to-a-cauchy-filter]]).

[L2] Symmetric entourages form a base and admit square roots ([[lem-symmetric-entourages-form-a-base]]).

[L3] The entourage axioms and separatedness are stated in [[def-uniform-space-by-entourages]] and [[def-separated-uniform-space]].

## Proof

**Proof technique:** constructive.

1.1 Because a uniformity is a proper filter on $X\times X$, its carrier $X$ is nonempty. Choose $x\in X$; then [L1] gives a minimal Cauchy filter associated to the principal filter at $x$, so $\widehat X$ is nonempty. For symmetric $E$, put $(\mathcal F,\mathcal G)\in\widehat E$ when some $A\in\mathcal F$ and $B\in\mathcal G$ satisfy $A\times B\subseteq E$. [L1, L3, construct, choose]

2.1 Every $\mathcal F$ is $\widehat E$-close to itself: choose an $E$-small member of the Cauchy filter and use it on both sides. Thus each $\widehat E$ contains the nonempty diagonal of $\widehat X$. The relation $\widehat E$ is symmetric. If $\widehat E$ and $\widehat D$ have respective witnesses $A\times B$ and $C\times K$, then $(A\cap C)\times(B\cap K)\subseteq E\cap D$, so finite intersections are refined by the corresponding hatted intersection. [step 1.1]

2.2 Choose a symmetric entourage $D$ with $D^{\circ2}\subseteq E$. If $\mathcal F\,\widehat D\,\mathcal G$ via $A\times B\subseteq D$ and $\mathcal G\,\widehat D\,\mathcal H$ via $C\times K\subseteq D$, choose $b\in B\cap C$. Then $aDbDk$ for every $a\in A,k\in K$, so $A\times K\subseteq D^{\circ2}\subseteq E$. Hence $\widehat D\circ\widehat D\subseteq\widehat E$. [step 1.1, L2, choose]

2.3 Steps 2.1 and 2.2 show that the upward closure of the relations $\widehat E$ is a uniformity. To prove separation, suppose $\mathcal F\,\widehat E\,\mathcal G$ for every entourage $E$. Given $A\in\mathcal F$, minimality gives $\mathcal F=m(\mathcal F)$ by [L1], so some $D[C]\subseteq A$ with $C\in\mathcal F$ and symmetric $D$. Choose an entourage $E\subseteq D$ and witnesses $P\in\mathcal F,Q\in\mathcal G$ with $P\times Q\subseteq E$. Pick $c\in C\cap P$. Then $Q\subseteq E[c]\subseteq D[C]\subseteq A$, so $A\in\mathcal G$. Thus $\mathcal F\subseteq\mathcal G$; symmetry gives equality. [step 1.1, L1, L2, choose]

3.1 Therefore the standard relations form the asserted separated uniformity. [step 2.3, L3, discharge-construct] ∎
````

### `lem-minimal-cauchy-filter-associated-to-a-cauchy-filter`

````markdown
---
id: lem-minimal-cauchy-filter-associated-to-a-cauchy-filter
kind: lemma
title: "Every Cauchy filter canonically determines a unique minimal Cauchy filter coarser than it"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-cauchy-filter-in-a-uniform-space, def-filter-base, lem-filter-base-generates, lem-symmetric-entourages-form-a-base]
aliases: []
landmark: false
proof_strategy: constructive
verification:
  precheck: pass
  verified:
    model: gpt-5.6-terra-codex-subscription
    verdict: certify
    date: 2026-08-09
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references: [{title: "J. Wodzicki, Uniform Structure", url: "https://math.berkeley.edu/~wodzicki/H104.F13/UniformStructure-alt.pdf"}, {title: "J. H. V. Hunt, Boletín de la Sociedad Matemática Mexicana 34 (1989), 11–21", url: "https://www.boletin.math.org.mx/pdf/2/34/BSMM%282%29.34.11-21.pdf"}]
pipeline_run: null
---

## Statement

Every Cauchy filter $\mathcal F$ canonically determines a unique Cauchy filter $m(\mathcal F)\subseteq\mathcal F$ that has no strictly coarser Cauchy filter. For every $x\in X$, the principal filter $\mathcal P_x:=\{A\subseteq X:x\in A\}$ is Cauchy and therefore has an associated minimal Cauchy filter $m(\mathcal P_x)$.

## Facts & Assumptions

**Given:** A Cauchy filter $\mathcal F$ on a uniform space.

[L1] Cauchyness supplies arbitrarily small members of $\mathcal F$ ([[def-cauchy-filter-in-a-uniform-space]]).

[L2] Filter bases generate the least filter containing them ([[def-filter-base]], [[lem-filter-base-generates]]).

[L3] Symmetric entourages form a base and may be chosen with prescribed finite-composite control ([[lem-symmetric-entourages-form-a-base]]).

## Proof

**Proof technique:** constructive.

1.1 Let $\mathcal B$ consist of all $E[A]$ with $A\in\mathcal F$ and symmetric entourage $E$. Every such set contains the nonempty set $A$. Given $E[A],D[B]\in\mathcal B$, the symmetric entourage $E\cap D$ and the member $A\cap B\in\mathcal F$ give $$ (E\cap D)[A\cap B]\subseteq E[A]\cap D[B]. $$ Thus $\mathcal B$ is a proper downward-directed filter base. Let $m(\mathcal F)$ be the filter it generates. [L2, L3, construct]

2.1 Since $A\subseteq E[A]$, every member of $\mathcal B$ belongs to $\mathcal F$, so $m(\mathcal F)\subseteq\mathcal F$. To prove it Cauchy, let $U$ be an entourage and choose a symmetric $E$ with $E^{\circ3}\subseteq U$. Choose $A\in\mathcal F$ with $A\times A\subseteq E$. If $y,z\in E[A]$, take $a,b\in A$ with $aEy$ and $bEz$; symmetry gives $yEaEbEz$, so $(y,z)\in E^{\circ3}\subseteq U$. Hence $E[A]\in m(\mathcal F)$ is $U$-small. [L1, L3, step 1.1]

2.2 Let $\mathcal G\subseteq\mathcal F$ be Cauchy, and fix $E[A]\in\mathcal B$. Choose a symmetric $D$ with $D\subseteq E$, and a $D$-small $B\in\mathcal G$. Since $A,B\in\mathcal F$, choose $c\in A\cap B$. Then $B\subseteq D[c]\subseteq E[A]$, so $E[A]\in\mathcal G$. Thus every Cauchy filter coarser than $\mathcal F$ contains $m(\mathcal F)$. [L1, L3, step 1.1, choose]

3.1 If a Cauchy filter is coarser than $m(\mathcal F)$, step 2.2 places $m(\mathcal F)$ inside it, so equality holds; hence $m(\mathcal F)$ is minimal. Any minimal Cauchy filter coarser than $\mathcal F$ contains $m(\mathcal F)$ by step 2.2 and must equal it by minimality. This proves uniqueness. [step 2.1, step 2.2]

4.1 For $x\in X$, the set $\{x\}$ belongs to $\mathcal P_x$, and $\{x\}\times\{x\}\subseteq\Delta_X\subseteq E$ for every entourage $E$. Thus $\mathcal P_x$ is Cauchy by [L1], and step 3.1 supplies its associated minimal Cauchy filter. [L1, step 3.1, discharge-construct] ∎
````

### `lem-symmetric-entourages-form-a-base`

````markdown
---
id: lem-symmetric-entourages-form-a-base
kind: lemma
title: "Every uniformity has a base of symmetric entourages"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-uniform-space-by-entourages, def-filter-base]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-5.6-terra-codex-subscription
    verdict: certify
    date: 2026-08-09
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references: [{title: "J. Wodzicki, Uniform Structure", url: "https://math.berkeley.edu/~wodzicki/H104.F13/UniformStructure-alt.pdf"}]
pipeline_run: null
---

## Statement

If $\mathcal U$ is a uniformity on $X$, then its symmetric entourages form a filter base: for every $E\in\mathcal U$ there is a symmetric $D\in\mathcal U$ with $D\subseteq E$. More generally, for every entourage $E$ and every integer $n\ge 1$, there is a symmetric entourage $D$ whose $n$-fold composite satisfies $D^{\circ n}\subseteq E$.

## Facts & Assumptions

**Given:** A uniformity $\mathcal U$ on $X$, an entourage $E\in\mathcal U$, and an integer $n\ge 1$.

[A1] A uniformity is a filter whose members are closed under inverse and admit square roots ([[def-uniform-space-by-entourages]]).

[L1] A nonempty, proper family that refines every pair of its members is a filter base ([[def-filter-base]]).

## Proof

**Proof technique:** direct.

1.1 Choose $R\in\mathcal U$ with $R\circ R\subseteq E$, and put $S:=R\cap R^{-1}$. [A1, choose]

1.2 Put $E_0:=E$. By finitely iterating the square-root axiom, choose entourages $E_1,\ldots,E_n$ such that $E_{k+1}\circ E_{k+1}\subseteq E_k$ for $0\le k<n$, and put $D:=E_n\cap E_n^{-1}$. [A1, choose]

2.1 The set $S$ is an entourage, since $R,R^{-1}\in\mathcal U$ and a filter is closed under intersections; also $S=S^{-1}$ and $S\subseteq R\circ R\subseteq E$, because every entourage contains the diagonal. [step 1.1, A1]

2.2 The entourage $D$ is symmetric and $D\subseteq E_n$. Induction on $k$ gives $D^{\circ 2^k}\subseteq E_{n-k}$ for $0\le k\le n$, hence $D^{\circ 2^n}\subseteq E$. Since every entourage contains the diagonal and $n\le 2^n$, one may insert diagonal factors to obtain $D^{\circ n}\subseteq D^{\circ 2^n}\subseteq E$. [step 1.2, A1, algebra]

3.1 Thus symmetric entourages refine every entourage; their intersections are symmetric entourages and none is empty because each contains the diagonal, so they form a filter base by [L1]. [step 2.1, L1]

4.1 Therefore symmetric entourages form a base and admit the asserted finite-composite control. [step 3.1, step 2.2] ∎
````

### `thm-hausdorff-completion-of-a-uniform-space`

````markdown
---
id: thm-hausdorff-completion-of-a-uniform-space
kind: theorem
title: "Every uniform space has a complete Hausdorff reflection with dense canonical image, and the canonical map is a uniform embedding exactly when the original uniformity is separated"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-completion-of-a-uniform-space, lem-entourages-on-minimal-cauchy-filters-form-a-separated-uniformity, lem-minimal-cauchy-filter-space-is-complete, lem-point-filters-are-dense-in-the-minimal-cauchy-filter-space, def-uniform-embedding-and-uniform-isomorphism, thm-separated-uniformity-iff-induced-topology-is-hausdorff, lem-symmetric-entourages-form-a-base]
aliases: []
landmark: true
proof_strategy: constructive
verification:
  precheck: pass
  verified:
    model: gpt-5.6-terra-codex-subscription
    verdict: certify
    date: 2026-08-09
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references: [{title: "J. Wodzicki, Uniform Structure", url: "https://math.berkeley.edu/~wodzicki/H104.F13/UniformStructure-alt.pdf"}, {title: "Encyclopedia of Mathematics, Uniform space", url: "https://encyclopediaofmath.org/wiki/Uniform_space"}, {title: "Encyclopedia of Mathematics, Complete uniform space", url: "https://encyclopediaofmath.org/wiki/Complete_uniform_space"}]
pipeline_run: null
---

## Statement

Every uniform space $X$ has a Hausdorff completion $\eta:X\to\widehat X$. The map has dense image, and it is a uniform embedding if and only if the original uniformity is separated.

## Facts & Assumptions

**Given:** A uniform space $X$.

[L1] Minimal Cauchy filters carry a separated uniformity ([[lem-entourages-on-minimal-cauchy-filters-form-a-separated-uniformity]]) and form a complete space ([[lem-minimal-cauchy-filter-space-is-complete]]).

[L2] Point filters define a uniformly continuous dense map $\eta:X\to\widehat X$, and every member of $\eta(x)$ contains $x$ ([[lem-point-filters-are-dense-in-the-minimal-cauchy-filter-space]]).

[L3] A Hausdorff completion and a uniform embedding have the stated definitions ([[def-completion-of-a-uniform-space]], [[def-uniform-embedding-and-uniform-isomorphism]]).

[L4] Separatedness is equivalent to Hausdorffness of the induced topology ([[thm-separated-uniformity-iff-induced-topology-is-hausdorff]]).

[L5] Symmetric entourages form a base and may be chosen inside any prescribed entourage ([[lem-symmetric-entourages-form-a-base]]).

## Proof

**Proof technique:** constructive.

1.1 Take $\widehat X$ to be the uniform space of minimal Cauchy filters and take $\eta$ from [L2]. [L1, L2, construct]

2.1 It is complete and separated by [L1], and $\eta$ is uniformly continuous with dense image by [L2]. It remains to verify that the pullback uniformity is not strictly coarser than the original one. Given an entourage $E$ of $X$, choose a symmetric $D\subseteq E$. If $(\eta(x),\eta(y))\in\widehat D$, witnesses $A\in\eta(x)$ and $B\in\eta(y)$ satisfy $A\times B\subseteq D$. Every member of the minimal point filter $\eta(x)$ contains $x$, and every member of $\eta(y)$ contains $y$; therefore $(x,y)\in D\subseteq E$. Thus $(\eta\times\eta)^{-1}[\widehat D]\subseteq E$. Together with uniform continuity, this is exactly the pullback condition in [L3], so $\eta$ is a Hausdorff completion. [step 1.1, L1, L2, L3, L5]

3.1 If $\eta(x)=\eta(y)$, step 2.1 puts $(x,y)$ in every entourage of $X$. Conversely, if $(x,y)$ belongs to every entourage of $X$, uniform continuity puts $(\eta(x),\eta(y))$ in every entourage of $\widehat X$; separatedness of $\widehat X$ gives $\eta(x)=\eta(y)$. [step 2.1, L1, L2]

4.1 Step 3.1 says that $\eta$ is injective exactly when $\mathcal U$ is separated. When injective, the two directions of the pullback condition in step 2.1 say precisely that the corestriction $X\to\eta[X]$ and its inverse are uniformly continuous, so $\eta$ is a uniform embedding. Conversely every uniform embedding is injective. [step 2.1, step 3.1, L3, L4]

5.1 This proves the completion assertion and the exact embedding criterion. [step 2.1, step 4.1, discharge-construct] ∎
````

### `thm-uniformly-continuous-maps-are-continuous`

````markdown
---
id: thm-uniformly-continuous-maps-are-continuous
kind: theorem
title: "Every uniformly continuous map is continuous for the induced topologies"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-uniformly-continuous-map, thm-uniformity-induces-a-topology, def-continuous-map-top]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-31
  audited: 2026-07-31
sources:
  scraped: []
  references: [{title: "J. Wodzicki, Uniform Structure", url: "https://math.berkeley.edu/~wodzicki/H104.F13/UniformStructure-alt.pdf"}]
pipeline_run: null
---

## Statement

Every uniformly continuous map between uniform spaces is continuous for their induced topologies.

## Facts & Assumptions

**Given:** A uniformly continuous map $f:X\to Y$ and a point $x\in X$.

[A1] Uniform continuity sends one source entourage into each prescribed target entourage ([[def-uniformly-continuous-map]]).

[L1] Entourage balls are neighbourhood bases for the induced topologies ([[thm-uniformity-induces-a-topology]]).

[L2] A map is continuous at $x$ when every neighbourhood of $f(x)$ has a neighbourhood of $x$ mapped into it ([[def-continuous-map-top]]).

## Proof

**Proof technique:** direct.

1.1 Let $N$ be a neighbourhood of $f(x)$ and choose a target entourage $V$ with $V[f(x)]\subseteq N$. [L1, choose]

2.1 Uniform continuity supplies a source entourage $U$ whose pairs map into $V$, so $f[U[x]]\subseteq V[f(x)]\subseteq N$. [A1, step 1.1]

3.1 Since $U[x]$ is a neighbourhood of $x$, [L2] gives continuity at $x$; as $x$ was arbitrary, $f$ is continuous. [step 2.1, L1, L2] ∎
````

