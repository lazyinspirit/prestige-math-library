## Selection reasons

- critical risk (11): 12 declared dependencies; 9 cited facts; 9 numbered proof steps; biconditional / both-direction claim; boundary-sensitive language

## Target item — `thm-a-locally-compact-hausdorff-space-is-completely-regular`

Normalized current SHA-256: `85b3f281a798478ef941987375eb677d4e8baa3b35d8fc31af811653402d32ae`

The complete current item follows, including frontmatter:

````markdown
---
id: thm-a-locally-compact-hausdorff-space-is-completely-regular
kind: theorem
title: "Under dependent choice a locally compact Hausdorff space is completely regular, hence Tychonoff"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-urysohn-lemma, def-one-point-compactification, thm-one-point-compactification-properties,
       thm-a-compact-hausdorff-space-is-regular-and-normal, def-locally-compact-space,
       def-completely-regular-and-tychonoff-spaces,
       def-t0-and-t1-spaces, def-hausdorff-space, def-subspace-topology-top,
       thm-t1-iff-singletons-are-closed, def-dependent-choice, def-interval]
justified_by: []
aliases: []
landmark: true
short: "locally compact Hausdorff is completely regular (DC)"
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
    - title: "Locally compact space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Locally_compact_space"
    - title: "Alexandroff extension (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Alexandroff_extension"
    - title: "J. Munkres, Topology, 2nd ed., §33, 38"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
    - title: "Tychonoff space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Tychonoff_space"
pipeline_run: null
---

## Statement

**Assume the Axiom of Dependent Choice** ([[def-dependent-choice]]). If
$(X,\mathcal{T})$ is locally compact ([[def-locally-compact-space]]) and
Hausdorff ([[def-hausdorff-space]]), then $X$ is completely regular
([[def-completely-regular-and-tychonoff-spaces]]), and hence, being Hausdorff,
$X$ is Tychonoff.

The proof passes through the one-point compactification
([[def-one-point-compactification]]) rather than through a hereditary
property of regularity or complete regularity: none is used or needed.

## Facts & Assumptions

**Given:** A locally compact Hausdorff space $(X,\mathcal{T})$, a closed set $C \subseteq X$, and a point $x_0 \in X \setminus C$.

[A1] $X$ is locally compact ([[def-locally-compact-space]]) and Hausdorff ([[def-hausdorff-space]]).

[L1] The one-point compactification $X^{*} = X \cup \{\infty\}$ of a locally compact Hausdorff space $X$: its open sets are the open sets of $X$ together with the sets $X^{*} \setminus K$ for $K$ a closed compact subset of $X$ ([[def-one-point-compactification]]); consequently its closed sets are $\{\, F \cup \{\infty\} : F \text{ closed in } X \,\}$ together with $\{\, K : K \text{ closed compact in } X \,\}$, the complements of the two families of open sets.

[L2] $X^{*}$ is compact and contains $X$ as an open subspace (so the subspace topology $X$ inherits from $X^{*}$ is its own topology $\mathcal{T}$); and $X^{*}$ is Hausdorff, since $X$ is locally compact and Hausdorff ([[thm-one-point-compactification-properties]]).

[L3] A compact Hausdorff space is regular and normal, hence $T_3$ and $T_4$ ([[thm-a-compact-hausdorff-space-is-regular-and-normal]]).

[L4] In a $T_1$ space every singleton is closed ([[thm-t1-iff-singletons-are-closed]]).

[L5] Urysohn's lemma, clause 1: assuming DC, a normal space's disjoint closed sets admit a continuous $[0,1]$-valued separating function ([[thm-urysohn-lemma]]).

[L6] If $g : X^{*} \to Y$ is continuous and $X \subseteq X^{*}$ carries the subspace topology, then $g|_X$ is continuous ([[def-subspace-topology-top]]).

[L7] Completely regular: for closed $C$ and $x_0 \notin C$, a continuous $f : X \to [0,1]$ with $f(x_0)=1$ and $f \equiv 0$ on $C$ ([[def-completely-regular-and-tychonoff-spaces]]).

## Proof

**Proof technique:** direct.

1.1 By [L2], $X^{*}$ is compact and Hausdorff; by [L3], $X^{*}$ is regular and normal, hence $T_3$ and $T_4$, that is normal and $T_1$. [A1, L2, L3]

1.2 $C \cup \{\infty\}$ is closed in $X^{*}$: $C$ is closed in $X$ (given), so $C \cup \{\infty\}$ is one of the sets $F \cup \{\infty\}$ of [L1] with $F=C$. [given, L1]

1.3 $\{x_0\}$ and $C \cup \{\infty\}$ are disjoint: $x_0 \in X$, so $x_0 \ne \infty$, and $x_0 \notin C$ (given). [given]

1.4 For $x \ne y$ in $X$, Hausdorffness (given, [A1]) supplies disjoint open $U \ni x$, $V \ni y$; then $y \notin U$ (else $y \in U \cap V = \varnothing$) and $x \notin V$ similarly, so $X$ is $T_1$ ([[def-t0-and-t1-spaces]]). [A1]

2.1 By step 1.1 ($T_1$) and [L4], $\{x_0\} \subseteq X \subseteq X^{*}$ is closed in $X^{*}$. [step 1.1, L4]

3.1 By step 1.1 ($X^{*}$ normal), steps 2.1, 1.2 and 1.3, and [L5], fix a continuous $g : X^{*} \to [0,1]$ with $C \cup \{\infty\} \subseteq g^{-1}(\{0\})$ and $\{x_0\} \subseteq g^{-1}(\{1\})$. [step 1.1, step 2.1, step 1.2, step 1.3, L5, choose]

4.1 By [L6] and [L2] ($X$ a subspace of $X^{*}$ with its own topology), $f := g|_X : X \to [0,1]$ is continuous. For $x \in C$: $x \in C \cup \{\infty\}$, so $f(x)=g(x)=0$; and $f(x_0) = g(x_0) = 1$, since $x_0 \in \{x_0\} \subseteq g^{-1}(\{1\})$. [step 3.1, L2, L6]

5.1 Since $C$ and $x_0 \notin C$ were arbitrary, step 4.1 exhibits, for every closed $C \subseteq X$ and $x_0 \in X \setminus C$, a continuous $f : X \to [0,1]$ with $f(x_0)=1$, $f \equiv 0$ on $C$; by [L7], $X$ is completely regular. [step 4.1, L7]

6.1 By steps 5.1 and 1.4, $X$ is completely regular and $T_1$, that is Tychonoff. [step 5.1, step 1.4] ∎

## Remarks

- **Only two facts about $X^{*}$ are used**: that it is compact Hausdorff (so normal, via [[thm-a-compact-hausdorff-space-is-regular-and-normal]]), and that $X$ sits inside it as an open subspace with its own topology, so that a Urysohn function on $X^{*}$ restricts to one on $X$ with no further argument. No property of $X^{*}$ beyond these two, and no hereditary behaviour of regularity, complete regularity or normality, is used anywhere in the proof.

- **The choice principle is the one already inside Urysohn's lemma**, applied once, inside the compact Hausdorff space $X^{*}$; nothing above performs a further selection.
````

## Wave 7 provenance row for the target

```json
{
  "id": "thm-a-locally-compact-hausdorff-space-is-completely-regular",
  "statement": "ai-altered",
  "proof": "ai-altered",
  "evidence": "semantic-source",
  "urls": [
    "https://en.wikipedia.org/wiki/Locally_compact_space",
    "https://en.wikipedia.org/wiki/Tychonoff_space"
  ],
  "rationale": "The literature states every locally compact Hausdorff space is Tychonoff; the library uses its bare complete-regular convention, adds DC inherited from Urysohn, and specifies the one-point-compactification route.",
  "alpha_concurred": false,
  "at": "2026-08-08",
  "ledger": "wave7-topology-separation-urysohn.provenance.jsonl"
}
```

## Proof contract for the target

```json
{
  "citations": [
    {
      "fact": "A1",
      "source": "def-locally-compact-space",
      "source_section": "Definition",
      "quote": "A topological space $(X, \\mathcal{T})$ ([[def-topological-space]]) is **locally\ncompact** when\n\n> every point of $X$ has a compact neighbourhood:\n\nthat is, for every $x \\in X$ there is a neighbourhood $N$ of $x$\n([[def-neighbourhood-top]]) that is a compact subset of $X$\n([[def-compact-space]], [[def-subspace-topology-top]]).\n\n**A neighbourhood need not be open here**, and that is what makes the condition\nthe weak one it is meant to be: $N$ is required only to contain some open set\ncontaining $x$. Writing \"compact **open** neighbourhood\" instead would define a\nstrictly stronger property, satisfied by no space in which a point has no compact\nopen neighbourhood, $\\mathbb{R}$ among them; and requiring the compact set merely\nto *contain* $x$ would define a property so weak that every space with a\nsingleton has it, singletons being compact.\n\n**Every compact space is locally compact**, since $X$ itself is a neighbourhood\nof each of its points and is a compact subset of itself. The converse fails, and\n$\\mathbb{R}^n$ is the standard witness.\n\n**What the condition says in a metric space.** Let $(X,d)$ be a metric space\ncarrying its metric topology ([[def-metric-topology]], [[def-metrizable-space]]),\nwith balls as in [[def-metric-ball]], and let $x \\in X$. Then\n\n> $x$ has a compact neighbourhood **if and only if** there are a real $r > 0$ and\n> a compact $K \\subseteq X$ with $B(x,r) \\subseteq K$.\n\n*Both directions are immediate and are discharged here.* If $N$ is a compact\nneighbourhood of $x$, fix an open $U$ with $x \\in U \\subseteq N$; by\n[[def-metric-topology]] there is $r > 0$ with $B(x,r) \\subseteq U \\subseteq N$, so\n$K := N$ serves. Conversely, if $B(x,r) \\subseteq K$ with $K$ compact, then $K$\ncontains the open set $B(x,r)$, which contains $x$, so $K$ is a neighbourhood of\n$x$ and is compact. Compactness of a subset of $(X,d)$ means the same thing read\nmetrically and read topologically\n([[thm-compactness-agrees-with-metric-compactness]]), so the criterion may be\napplied with either development's theorems.\n\n**$\\mathbb{R}^n$ is locally compact for every $n \\ge 1$.** Give $\\mathbb{R}^n$\nthe product topology, which is the metric topology of the Euclidean metric $d_2$\n([[lem-metrics-on-rn]], [[cor-heine-borel-in-the-product-topology]]). For\n$p \\in \\mathbb{R}^n$ the set\n\n$$Q_p \\;:=\\; \\{\\, x \\in \\mathbb{R}^n : d_2(x,p) \\le 1 \\,\\}$$\n\nis closed, being the complement of the union of the open balls $B(y, d_2(y,p) - 1)$\nover the points $y$ with $d_2(y,p) > 1$, and it is bounded\n([[def-metric-bounded-diameter]]), lying inside $B(p, 2)$; so $Q_p$ is compact by\n[[cor-heine-borel-in-the-product-topology]]. It contains the open ball $B(p,1)$,\nwhich contains $p$, so it is a compact neighbourhood of $p$. The space\n$\\mathbb{R}^n$ is not compact, so local compactness is strictly weaker than\ncompactness.",
      "uses": [
        "1.1",
        "1.4"
      ]
    },
    {
      "fact": "A1",
      "source": "def-hausdorff-space",
      "source_section": "Definition",
      "quote": "A topological space $(X, \\mathcal{T})$ ([[def-topological-space]]) is\n**Hausdorff** when any two distinct points are separated by disjoint open sets:\nfor all $x, y \\in X$ with $x \\ne y$ there are $U, V \\in \\mathcal{T}$ with\n\n$$x \\in U, \\qquad y \\in V, \\qquad U \\cap V = \\varnothing .$$\n\nSince an open set containing a point is an open neighbourhood of it\n([[def-neighbourhood-top]]), the condition reads: distinct points have disjoint\nopen neighbourhoods. Nothing is asserted about points that are equal, and the\ncondition is vacuous for a space with at most one point, so every such space is\nHausdorff.\n\n**Every metrizable space is Hausdorff.** This is not proved here, because it is\nalready discharged: [[def-metrizable-space]] records it among the two things\nevery metrizable space has, deriving it from\n[[thm-metric-hausdorff-separation]], which separates $p \\ne q$ in a metric space\nby the disjoint open balls $B(p,r)$ and $B(q,r)$ with $r = d(p,q)/2 > 0$. In\nparticular $\\mathbb{R}$ with its usual topology, every $\\mathbb{R}^n$, and every\nsubspace of a metrizable space are Hausdorff.\n\n**Not every space is Hausdorff.** The indiscrete topology\n$\\mathcal{T}_{\\mathrm{ind}} = \\{\\varnothing, X\\}$ on a set $X = \\{a,b\\}$ with\n$a \\ne b$ ([[def-standard-topologies]]) is not: the only open set containing $a$\nis $X$, the only one containing $b$ is $X$, and $X \\cap X = X \\ne \\varnothing$.\nThis is the same two-point space that [[def-metrizable-space]] uses to exhibit a\ntopology induced by no metric, and the reason is the same one: failure of the\nHausdorff condition is an obstruction to metrizability.\n\n**Being Hausdorff is a topological property** ([[def-homeomorphism-and-open-maps]]).\nIf $h : X \\to Z$ is a homeomorphism and $X$ is Hausdorff, then for $z \\ne z'$ in\n$Z$ the points $h^{-1}(z)$ and $h^{-1}(z')$ are distinct, so they have disjoint\nopen $U, V$; the images $h[U]$ and $h[V]$ are open, disjoint, and contain $z$ and\n$z'$ respectively, a homeomorphism carrying the open sets of one space\nbijectively onto those of the other. So no space homeomorphic to a Hausdorff\nspace fails the condition.\n\n**Scope of this item.** Only the definition, the metrizable case and the\ntwo-point failure are recorded here, because that is all this page uses. The\nHausdorff condition is one of a graded family of separation axioms; that family,\nits ordering, and the questions of which of its members are hereditary or\npreserved by products, are not available at this point in the reading order and\nnothing here anticipates them. What this page does use is a single negative\nresult: a quotient of a Hausdorff space need not be Hausdorff, which is recorded\nbelow as a false statement and witnessed on the companion page.",
      "uses": [
        "1.1",
        "1.4"
      ]
    },
    {
      "fact": "L1",
      "source": "def-one-point-compactification",
      "source_section": "Definition",
      "quote": "Let $(X, \\mathcal{T})$ be a topological space ([[def-topological-space]]).\n\n**A point outside $X$, named rather than assumed.** Put\n\n$$\\infty \\;:=\\; \\{\\, y \\in X : y \\notin y \\,\\},$$\n\na set by Separation. Then $\\infty \\notin X$: were $\\infty \\in X$, the defining\ncondition applied to $\\infty$ itself would give\n$\\infty \\in \\infty \\iff \\infty \\notin \\infty$. So no hypothesis about $X$ is\nneeded to obtain a point outside it, and the construction below is available for\nevery space.\n\n**The space.** Put $X^{*} := X \\cup \\{\\infty\\}$ and\n\n$$\\mathcal{T}^{*} \\;:=\\; \\mathcal{T} \\;\\cup\\; \\{\\, X^{*} \\setminus C \\;:\\; C \\subseteq X,\\ C \\text{ closed in } X \\text{ and a compact subset of } X \\,\\} .$$\n\nThe pair $(X^{*}, \\mathcal{T}^{*})$ is the **one-point compactification**, or\n**Alexandroff compactification**, of $X$. Members of $\\mathcal{T}$ are said to be\nof the **first kind** and the sets $X^{*} \\setminus C$ of the **second kind**; a\nset of the second kind is exactly an open set of $\\mathcal{T}^{*}$ containing\n$\\infty$, since a member of $\\mathcal{T}$ is a subset of $X$, and the set $C$ is\nrecovered from it as $C = X^{*} \\setminus (X^{*} \\setminus C)$.\n\n**$\\mathcal{T}^{*}$ is a topology on $X^{*}$, and this is discharged here.**\nThroughout, \"closed\" and \"compact\" without qualification mean closed in $X$ and a\ncompact subset of $X$ ([[def-compact-space]]); two facts about such sets are used\nand both are [[thm-closed-subspace-of-a-compact-space-is-compact]]: a subset of a\ncompact $C$ that is closed in $X$ is closed in the subspace $C$\n([[def-subspace-topology-top]]) and hence compact, and a union of two compact\nsubsets is compact.\n\n*(T1).* $\\varnothing \\in \\mathcal{T}$, and $X^{*} = X^{*} \\setminus \\varnothing$\nis of the second kind, $\\varnothing$ being closed in $X$ and compact.\n\n*(T2).* Let $\\mathcal{S} \\subseteq \\mathcal{T}^{*}$, let $\\mathcal{S}_1$ be the\nmembers of $\\mathcal{S}$ lying in $\\mathcal{T}$ and $\\mathcal{S}_2$ the rest, so\nthat every member of $\\mathcal{S}_2$ is of the second kind. If\n$\\mathcal{S}_2 = \\varnothing$ then $\\bigcup \\mathcal{S} = \\bigcup \\mathcal{S}_1$\nlies in $\\mathcal{T}$ by (T2) in $X$. Otherwise put\n$U := \\bigcup \\mathcal{S}_1 \\in \\mathcal{T}$ and\n$\\mathcal{D} := \\{\\, X^{*} \\setminus O : O \\in \\mathcal{S}_2 \\,\\}$, a nonempty\nfamily of closed compact subsets of $X$, and $C_0 := \\bigcap \\mathcal{D}$. Then\n$C_0$ is closed by (C2) of [[def-topological-space]], and it is a closed subset of\nany one member of $\\mathcal{D}$, hence compact. Now\n\n$$\\bigcup \\mathcal{S} \\;=\\; U \\cup (X^{*} \\setminus C_0) \\;=\\; X^{*} \\setminus (C_0 \\setminus U),$$\n\nand $C_0 \\setminus U = C_0 \\cap (X \\setminus U)$ is closed in $X$ and a subset of\nthe compact $C_0$, hence compact; so $\\bigcup \\mathcal{S}$ is of the second kind.\n\n*(T3).* For $U, V \\in \\mathcal{T}$ the intersection lies in $\\mathcal{T}$ by (T3)\nin $X$. For two sets of the second kind,\n$(X^{*} \\setminus C) \\cap (X^{*} \\setminus D) = X^{*} \\setminus (C \\cup D)$, and\n$C \\cup D$ is closed in $X$ and compact as a union of two compact subsets. For one\nof each, $\\infty \\notin U$ gives\n$U \\cap (X^{*} \\setminus C) = U \\cap (X \\setminus C)$, an intersection of two\nmembers of $\\mathcal{T}$.\n\n**Why the compact sets are also required to be closed.** The complement of a\ncompact set that is not closed in $X$ would not make $\\infty$'s neighbourhoods\nbehave: the union computation in (T2) uses that an intersection of the discarded\nsets is again closed, and the intersection of arbitrary compact subsets of a\nnon-Hausdorff space need not be compact. When $X$ is Hausdorff every compact\nsubset is closed ([[thm-compact-subset-of-a-hausdorff-space-is-closed]]) and the\ntwo descriptions agree, which is why many texts state the definition without the\nword \"closed\" and silently assume the Hausdorff case.",
      "uses": [
        "1.2"
      ]
    },
    {
      "fact": "L2",
      "source": "thm-one-point-compactification-properties",
      "source_section": "Statement",
      "quote": "Let $(X, \\mathcal{T})$ be a topological space ([[def-topological-space]]) and let\n$(X^{*}, \\mathcal{T}^{*})$ be its one-point compactification, with added point\n$\\infty$ ([[def-one-point-compactification]]). Then:\n\n1. **$X^{*}$ is compact** ([[def-compact-space]]).\n2. **$X$ is an open subspace of $X^{*}$**: $X \\in \\mathcal{T}^{*}$, and the\n   subspace topology that $X$ inherits from $X^{*}$\n   ([[def-subspace-topology-top]]) is $\\mathcal{T}$ itself.\n3. **$X$ is dense in $X^{*}$** ([[def-dense-top]]) **if and only if $X$ is not\n   compact.**\n4. **$X^{*}$ is Hausdorff** ([[def-hausdorff-space]]) **if and only if $X$ is\n   locally compact** ([[def-locally-compact-space]]) **and Hausdorff.**\n\nIn particular, a locally compact Hausdorff space is an open subspace of a compact\nHausdorff space, which is the reason the construction is made. **No choice\nprinciple is used**: the only cover thinned below is thinned by the indexed form\nof [[lem-compactness-of-a-subspace-is-ambient]], which returns its own indices.",
      "uses": [
        "1.1",
        "4.1"
      ]
    },
    {
      "fact": "L3",
      "source": "thm-a-compact-hausdorff-space-is-regular-and-normal",
      "source_section": "Statement",
      "quote": "Let $X$ be a compact ([[def-compact-space]]) Hausdorff\n([[def-hausdorff-space]]) topological space. Then:\n\n1. $X$ is **regular** ([[def-regular-and-t3-spaces]]);\n2. $X$ is **normal** ([[def-normal-and-t4-spaces]]);\n3. $X$ is $T_1$ ([[def-t0-and-t1-spaces]]), and hence $X$ is $T_3$ and $T_4$.\n\nFollowing [[def-regular-and-t3-spaces]] and [[def-normal-and-t4-spaces]],\n*regular* and *normal* name the separation conditions alone and the numerals\n$T_3$ and $T_4$ name their conjunctions with $T_1$; claim 3 is what supplies the\n$T_1$ half, and it is stated separately for that reason.\n\n**Nothing stronger is claimed.** In particular it is not asserted here that a\ncompact Hausdorff space is completely regular\n([[def-regular-and-t3-spaces]] distinguishes the two conditions), and no\ncontinuous real-valued function is produced anywhere below.",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L4",
      "source": "thm-t1-iff-singletons-are-closed",
      "source_section": "Statement",
      "quote": "Let $(X, \\mathcal{T})$ be a topological space ([[def-topological-space]]) and let\n$\\mathcal{T}_{\\mathrm{cof}}$ be the cofinite topology on the set $X$\n([[def-standard-topologies]]). The following four conditions are equivalent.\n\n- **(a)** $X$ is $T_1$ ([[def-t0-and-t1-spaces]]).\n- **(b)** $\\{x\\}$ is closed for every $x \\in X$.\n- **(c)** $F$ is closed for every finite $F \\subseteq X$ ([[def-countable]]).\n- **(d)** $\\mathcal{T}_{\\mathrm{cof}} \\subseteq \\mathcal{T}$, that is, the\n  topology of $X$ is finer than the cofinite topology on the same set.\n\nCondition (d) says that the cofinite topology is the **coarsest** $T_1$ topology\non any set: it is $T_1$ by the equivalence, and every $T_1$ topology on that set\ncontains it.",
      "uses": [
        "2.1"
      ]
    },
    {
      "fact": "L5",
      "source": "thm-urysohn-lemma",
      "source_section": "Statement",
      "quote": "**Assume the Axiom of Dependent Choice** ([[def-dependent-choice]]). Let\n$(X, \\mathcal{T})$ be a topological space.\n\n1. If $X$ is normal ([[def-normal-and-t4-spaces]]) and $A, B \\subseteq X$ are\n   disjoint closed sets, there is a continuous $f : X \\to [0,1]$\n   ([[def-continuous-map-top]], [[def-interval]]) with\n   $A \\subseteq f^{-1}(\\{0\\})$ and $B \\subseteq f^{-1}(\\{1\\})$.\n2. Conversely, if every pair of disjoint closed subsets of $X$ admits a\n   continuous function into $[0,1]$ separating them in the sense of clause 1,\n   then $X$ is normal. **This direction uses no choice principle.**\n\n**Where the choice principle of clause 1 is spent, and why not less.** The\nconstruction below builds, for each $n \\in \\mathbb{N}$, an assignment of an\nopen set to every dyadic rational of level $n$, extending the level-$(n-1)$\nassignment; at each single level the finitely many new open sets are chosen at\nonce by [[lem-finite-choice]], a theorem of ZF, but stringing together\ninfinitely many such levels, each depending on the one before, is exactly the\nsituation dependent choice is for. The published\n[[rem-urysohn-lemma-not-a-zf-theorem]] records, with its sources, that\n$\\mathrm{ZF}$ and even $\\mathrm{ZF}$ together with the Axiom of Countable\nChoice do not suffice, and that dependent choice does; nothing here claims\ndependent choice is *necessary* for clause 1, only that the construction given\nis carried out in $\\mathrm{ZF} + \\mathrm{DC}$.",
      "uses": [
        "3.1"
      ]
    },
    {
      "fact": "L6",
      "source": "def-subspace-topology-top",
      "source_section": "Definition",
      "quote": "Let $(X, \\mathcal{T})$ be a topological space ([[def-topological-space]]) and let\n$S \\subseteq X$. The **subspace topology** (also *relative topology*) on $S$ is\n\n$$\\mathcal{T}_S := \\{\\, U \\cap S : U \\in \\mathcal{T} \\,\\},$$\n\nthe family of **traces** on $S$ of the open sets of $X$. The pair\n$(S, \\mathcal{T}_S)$ is a **subspace** of $X$. A subset of $S$ that lies in\n$\\mathcal{T}_S$ is said to be **open in $S$**, and *relatively open* where the\nambient space needs emphasis.\n\n**$\\mathcal{T}_S$ is a topology, and this is discharged here.** (T1):\n$\\varnothing = \\varnothing \\cap S$ and $S = X \\cap S$ are traces. (T2): if\n$\\mathcal{S}' \\subseteq \\mathcal{T}_S$, choose for each member a set of\n$\\mathcal{T}$ tracing to it — no choice principle is needed, since\n$U' := \\bigcup \\{\\, U \\in \\mathcal{T} : U \\cap S \\subseteq W \\,\\}$ is a canonical\nsuch set for $W \\in \\mathcal{T}_S$, being open by (T2) in $X$ and satisfying\n$U' \\cap S = W$ — and then\n$\\bigcup_i (U_i \\cap S) = (\\bigcup_i U_i) \\cap S \\in \\mathcal{T}_S$ by (T2) in\n$X$. (T3): $(U \\cap S) \\cap (V \\cap S) = (U \\cap V) \\cap S \\in \\mathcal{T}_S$ by\n(T3) in $X$.\n\n**Closed sets of a subspace are the traces of the closed sets.** A set\n$C \\subseteq S$ is closed in $S$ if and only if $C = F \\cap S$ for some closed\n$F \\subseteq X$. Indeed $S \\setminus (U \\cap S) = (X \\setminus U) \\cap S$ and\n$S \\setminus (F \\cap S) = (X \\setminus F) \\cap S$, so complementation inside $S$\nmatches complementation inside $X$ under tracing.\n\n**Bases and subbases trace as well.** If $\\mathcal{B}$ is a basis for\n$\\mathcal{T}$ ([[def-topology-basis-subbasis]]) then\n$\\mathcal{B}_S := \\{\\, B \\cap S : B \\in \\mathcal{B} \\,\\}$ is a basis for\n$\\mathcal{T}_S$: its members are open in $S$, and for $W = U \\cap S$ open in $S$\nand $x \\in W$ there is $B \\in \\mathcal{B}$ with $x \\in B \\subseteq U$, whence\n$x \\in B \\cap S \\subseteq W$. The same computation with a subbasis $\\mathcal{S}$\nshows that $\\{\\, S_0 \\cap S : S_0 \\in \\mathcal{S} \\,\\}$ is a subbasis for\n$\\mathcal{T}_S$, since tracing commutes with finite intersections and with\nunions.\n\n**The inclusion is continuous.** The inclusion map $\\iota : S \\to X$,\n$\\iota(s) = s$, satisfies $\\iota^{-1}[U] = U \\cap S$ for every $U \\subseteq X$,\nso preimages of open sets are open and $\\iota$ is continuous\n([[thm-continuity-characterisations-top]], clause (b)). Moreover\n$\\mathcal{T}_S$ is the **coarsest** topology on $S$ making $\\iota$ continuous: any\ntopology on $S$ for which $\\iota$ is continuous must contain every\n$\\iota^{-1}[U] = U \\cap S$, hence contain $\\mathcal{T}_S$.\n\n**Characteristic property of a map into a subspace.** Let $(Z, \\mathcal{T}_Z)$ be\na topological space and let $g : Z \\to S$ be a function. Then\n\n$$g \\text{ is continuous as a map } Z \\to (S,\\mathcal{T}_S) \\iff \\iota \\circ g \\text{ is continuous as a map } Z \\to (X,\\mathcal{T}) .$$\n\n*Proof.* For $U \\in \\mathcal{T}$ one has\n$(\\iota \\circ g)^{-1}[U] = g^{-1}[\\iota^{-1}[U]] = g^{-1}[U \\cap S]$. If $g$ is\ncontinuous then each $g^{-1}[U \\cap S]$ is open, so $\\iota \\circ g$ is continuous;\nconversely if $\\iota \\circ g$ is continuous then for any $W = U \\cap S$ open in\n$S$ the set $g^{-1}[W] = (\\iota \\circ g)^{-1}[U]$ is open, so $g$ is continuous.\nBoth directions use only clause (b) of [[thm-continuity-characterisations-top]].\n\n**Restriction of a continuous map.** If $f : X \\to Y$ is continuous and\n$S \\subseteq X$, then $f|_S : S \\to Y$ is continuous, since\n$(f|_S)^{-1}[V] = f^{-1}[V] \\cap S$ is open in $S$ for every open $V \\subseteq Y$\n([[def-continuous-map-top]], [[thm-continuity-characterisations-top]]).\n\n**When relative and ambient agree.** If $S$ is open in $X$ then a subset of $S$\nis open in $S$ if and only if it is open in $X$: a trace $U \\cap S$ is then an\nintersection of two open sets of $X$, and conversely an open subset of $X$\ncontained in $S$ is its own trace. The same statement with \"closed\" throughout\nholds when $S$ is closed in $X$. Both are used in the pasting lemma of the next\nitem, and both fail without the hypothesis: $S$ itself is always open and closed\nin $S$, and need be neither in $X$.",
      "uses": [
        "4.1"
      ]
    },
    {
      "fact": "L7",
      "source": "def-completely-regular-and-tychonoff-spaces",
      "source_section": "Definition",
      "quote": "Let $(X, \\mathcal{T})$ be a topological space ([[def-topological-space]]) and let\n$[0,1] \\subseteq \\mathbb{R}$ carry the subspace topology of the usual topology of\n$\\mathbb{R}$ ([[def-interval]], [[def-subspace-topology-top]],\n[[lem-real-line-is-a-metric-space]], [[def-metrizable-space]]).\n\n- $X$ is **completely regular** when a point can be separated from a closed set\n  not containing it *by a continuous function*: for every closed $C \\subseteq X$\n  and every $x_0 \\in X \\setminus C$ there is a continuous\n  $f : X \\to [0,1]$ ([[def-continuous-map-top]]) with\n  $$f(x_0) = 1 \\qquad \\text{and} \\qquad f(y) = 0 \\ \\text{ for every } y \\in C .$$\n- $X$ is **Tychonoff**, also written **$T_{3\\frac{1}{2}}$** and *completely\n  regular Hausdorff*, when it is completely regular **and** $T_1$\n  ([[def-t0-and-t1-spaces]]).\n\nThe case $C = \\varnothing$ is allowed and is satisfied by the constant function\n$1$, which is continuous ([[def-zero-sets-and-cozero-sets]]); so the condition\nhides no nonemptiness hypothesis.\n\n**The same condition in the vocabulary of zero sets.** With $f$ as displayed,\n$C \\subseteq Z(f)$ and $x_0 \\in \\operatorname{coz}(f)$\n([[def-zero-sets-and-cozero-sets]]), so complete regularity says: for every\nclosed $C$ and every $x_0 \\notin C$ there is a continuous $f$ whose zero set\ncontains $C$ and whose cozero set contains $x_0$. In particular\n$\\operatorname{coz}(f)$ is an open set containing $x_0$ and disjoint from $C$;\nthat alone is weaker than regularity, and the passage from the function to two\n*disjoint* open sets is the next item.\n\n**The values $0$ and $1$ are a normalisation, not a restriction.** If\n$g : X \\to \\mathbb{R}$ is continuous with $g(x_0) = a$, $g[C] = \\{b\\}$ and\n$a \\ne b$, then the condition above is met by a function built from $g$ by an\naffine change of variable followed by truncation into $[0,1]$; this page never\nneeds that construction, because every function it builds is already normalised.\nThe *direction* of the normalisation is a genuine convention and is fixed here as\n$f(x_0) = 1$ and $f[C] = \\{0\\}$, following the most common usage; some texts\nwrite the reverse, and a reader must check which is meant before quoting a\nformula.\n\n**The convention fork over $T_1$ is the same one as for regularity.** *Completely\nregular* names the function-separation condition alone, and Tychonoff names the\nconjunction with $T_1$ ([[def-regular-and-t3-spaces]]). The indiscrete topology\non a two-point set ([[def-standard-topologies]]) is completely regular, its only\nclosed set disjoint from a point being $\\varnothing$, and it is not $T_0$; so the\ntwo halves are independent here as well.",
      "uses": [
        "5.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1.1",
      "claim": "By [L2], $X^{*}$ is compact and Hausdorff; by [L3], $X^{*}$ is regular and normal, hence $T_3$ and $T_4$, that is normal and $T_1$. [A1, L2, L3]",
      "step": "1.1",
      "inputs": [
        "A1",
        "L2",
        "L3"
      ]
    },
    {
      "id": "step-1.2",
      "claim": "$C \\cup \\{\\infty\\}$ is closed in $X^{*}$: $C$ is closed in $X$ (given), so $C \\cup \\{\\infty\\}$ is one of the sets $F \\cup \\{\\infty\\}$ of [L1] with $F=C$. [given, L1]",
      "step": "1.2",
      "inputs": [
        "given",
        "L1"
      ]
    },
    {
      "id": "step-1.3",
      "claim": "$\\{x_0\\}$ and $C \\cup \\{\\infty\\}$ are disjoint: $x_0 \\in X$, so $x_0 \\ne \\infty$, and $x_0 \\notin C$ (given). [given]",
      "step": "1.3",
      "inputs": [
        "given"
      ]
    },
    {
      "id": "step-1.4",
      "claim": "For $x \\ne y$ in $X$, Hausdorffness (given, [A1]) supplies disjoint open $U \\ni x$, $V \\ni y$; then $y \\notin U$ (else $y \\in U \\cap V = \\varnothing$) and $x \\notin V$ similarly, so $X$ is $T_1$ ([[def-t0-and-t1-spaces]]). [A1]",
      "step": "1.4",
      "inputs": [
        "A1"
      ]
    },
    {
      "id": "step-2.1",
      "claim": "By step 1.1 ($T_1$) and [L4], $\\{x_0\\} \\subseteq X \\subseteq X^{*}$ is closed in $X^{*}$. [step 1.1, L4]",
      "step": "2.1",
      "inputs": [
        "step 1.1",
        "L4",
        "1.1"
      ]
    },
    {
      "id": "step-3.1",
      "claim": "By step 1.1 ($X^{*}$ normal), steps 2.1, 1.2 and 1.3, and [L5], fix a continuous $g : X^{*} \\to [0,1]$ with $C \\cup \\{\\infty\\} \\subseteq g^{-1}(\\{0\\})$ and $\\{x_0\\} \\subseteq g^{-1}(\\{1\\})$. [step 1.1, step 2.1, step 1.2, step 1.3, L5, choose]",
      "step": "3.1",
      "inputs": [
        "step 1.1",
        "step 2.1",
        "step 1.2",
        "step 1.3",
        "L5",
        "choose",
        "1.1",
        "2.1",
        "1.2",
        "1.3"
      ]
    },
    {
      "id": "step-4.1",
      "claim": "By [L6] and [L2] ($X$ a subspace of $X^{*}$ with its own topology), $f := g|_X : X \\to [0,1]$ is continuous. For $x \\in C$: $x \\in C \\cup \\{\\infty\\}$, so $f(x)=g(x)=0$; and $f(x_0) = g(x_0) = 1$, since $x_0 \\in \\{x_0\\} \\subseteq g^{-1}(\\{1\\})$. [step 3.1, L2, L6]",
      "step": "4.1",
      "inputs": [
        "step 3.1",
        "L2",
        "L6",
        "3.1"
      ]
    },
    {
      "id": "step-5.1",
      "claim": "Since $C$ and $x_0 \\notin C$ were arbitrary, step 4.1 exhibits, for every closed $C \\subseteq X$ and $x_0 \\in X \\setminus C$, a continuous $f : X \\to [0,1]$ with $f(x_0)=1$, $f \\equiv 0$ on $C$; by [L7], $X$ is completely regular. [step 4.1, L7]",
      "step": "5.1",
      "inputs": [
        "step 4.1",
        "L7",
        "4.1"
      ]
    },
    {
      "id": "step-6.1",
      "claim": "By steps 5.1 and 1.4, $X$ is completely regular and $T_1$, that is Tychonoff. [step 5.1, step 1.4] ∎",
      "step": "6.1",
      "inputs": [
        "step 5.1",
        "step 1.4",
        "5.1",
        "1.4"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "checked",
      "evidence": "statement and step 1.4: empty-set or empty-family case was inspected and introduces no illicit witness"
    },
    {
      "case": "zero",
      "status": "checked",
      "evidence": "statement and step 1.3: zero or base-value case was inspected under the displayed definitions"
    },
    {
      "case": "one",
      "status": "checked",
      "evidence": "statement and step 1.1: unit, singleton, or one-term case was inspected"
    },
    {
      "case": "degenerate",
      "status": "not_applicable",
      "reason": "The statement has no distinguished degenerate or equality case parameter or case."
    },
    {
      "case": "endpoints",
      "status": "checked",
      "evidence": "statement and step 3.1: endpoint and codomain-boundary behavior was inspected"
    },
    {
      "case": "nonempty-choice",
      "status": "checked",
      "evidence": "statement and step 3.1: nonempty-choice obligations were checked against the stated hypothesis or explicit construction"
    },
    {
      "case": "iff-forward",
      "status": "not_applicable",
      "reason": "The statement is not an equivalence and has no forward iff direction."
    },
    {
      "case": "iff-reverse",
      "status": "not_applicable",
      "reason": "The statement is not an equivalence and has no reverse iff direction."
    }
  ],
  "finite_smoke": [],
  "risk_review": {
    "status": "complete",
    "reviewer": "Audit-Alpha wave 7 (owner-delegated); DeepSeek V4 Pro audit-refuter",
    "notes": "critical risk (11): 12 declared dependencies; 9 cited facts; 9 numbered proof steps; biconditional / both-direction claim; boundary-sensitive language, routed by risk-report.mjs. The read-only DeepSeek V4 Pro audit-refuter received the complete target and every cited dependency and returned CLEAN. Boundary evidence: The proof was checked against the empty space, a singleton space, and degenerate closed-set choices (C = ∅, C = X). No defect was found; the logic vacuously satisfies the conditions where no point x₀ ∉ C exists, and the separation functions are correctly produced otherwise. Endpoint values 0 and 1 are used per the Urysohn convention and the restriction preserves them. Checked surface: The title, the public claim, every numbered step (1.1 through 6.1), and the Remarks were read and verified for logical validity and accurate citation. ``` Alpha adjudicated the return against the current item and cited dependencies on disk and found no fatal mathematical or dependency-citation defect. Evidence: research/audit/wave7-preserved-refuters/thm-a-locally-compact-hausdorff-space-is-completely-regular--948e247a24a88998.result.json."
  }
}
```

## Generated audit-manifest relationships for the target

```json
[
  {
    "source": "thm-a-locally-compact-hausdorff-space-is-completely-regular",
    "sourcePage": "urysohn-lemma-and-tietze",
    "batch": "wave7-topology-separation-urysohn",
    "target": "thm-urysohn-lemma",
    "declared_target": "thm-urysohn-lemma",
    "target_statement_provenance": "ai-altered",
    "targetPage": "urysohn-lemma-and-tietze",
    "targetBatch": "wave7-topology-separation-urysohn",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-a-locally-compact-hausdorff-space-is-completely-regular",
    "sourcePage": "urysohn-lemma-and-tietze",
    "batch": "wave7-topology-separation-urysohn",
    "target": "def-one-point-compactification",
    "declared_target": "def-one-point-compactification",
    "target_statement_provenance": "ai-altered",
    "targetPage": "compactness",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-a-locally-compact-hausdorff-space-is-completely-regular",
    "sourcePage": "urysohn-lemma-and-tietze",
    "batch": "wave7-topology-separation-urysohn",
    "target": "thm-one-point-compactification-properties",
    "declared_target": "thm-one-point-compactification-properties",
    "target_statement_provenance": "ai-altered",
    "targetPage": "compactness",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-a-locally-compact-hausdorff-space-is-completely-regular",
    "sourcePage": "urysohn-lemma-and-tietze",
    "batch": "wave7-topology-separation-urysohn",
    "target": "thm-a-compact-hausdorff-space-is-regular-and-normal",
    "declared_target": "thm-a-compact-hausdorff-space-is-regular-and-normal",
    "target_statement_provenance": "ai-altered",
    "targetPage": "hausdorff-via-the-diagonal",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-a-locally-compact-hausdorff-space-is-completely-regular",
    "sourcePage": "urysohn-lemma-and-tietze",
    "batch": "wave7-topology-separation-urysohn",
    "target": "def-locally-compact-space",
    "declared_target": "def-locally-compact-space",
    "target_statement_provenance": "ai-altered",
    "targetPage": "compactness",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-a-locally-compact-hausdorff-space-is-completely-regular",
    "sourcePage": "urysohn-lemma-and-tietze",
    "batch": "wave7-topology-separation-urysohn",
    "target": "def-completely-regular-and-tychonoff-spaces",
    "declared_target": "def-completely-regular-and-tychonoff-spaces",
    "target_statement_provenance": "literature-derived",
    "targetPage": "separation-axioms",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-a-locally-compact-hausdorff-space-is-completely-regular",
    "sourcePage": "urysohn-lemma-and-tietze",
    "batch": "wave7-topology-separation-urysohn",
    "target": "def-t0-and-t1-spaces",
    "declared_target": "def-t0-and-t1-spaces",
    "target_statement_provenance": "literature-derived",
    "targetPage": "separation-axioms",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-a-locally-compact-hausdorff-space-is-completely-regular",
    "sourcePage": "urysohn-lemma-and-tietze",
    "batch": "wave7-topology-separation-urysohn",
    "target": "def-hausdorff-space",
    "declared_target": "def-hausdorff-space",
    "target_statement_provenance": "ai-altered",
    "targetPage": "subspaces-products-and-quotients",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-a-locally-compact-hausdorff-space-is-completely-regular",
    "sourcePage": "urysohn-lemma-and-tietze",
    "batch": "wave7-topology-separation-urysohn",
    "target": "def-subspace-topology-top",
    "declared_target": "def-subspace-topology-top",
    "target_statement_provenance": "ai-altered",
    "targetPage": "topological-spaces-and-continuity",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-a-locally-compact-hausdorff-space-is-completely-regular",
    "sourcePage": "urysohn-lemma-and-tietze",
    "batch": "wave7-topology-separation-urysohn",
    "target": "thm-t1-iff-singletons-are-closed",
    "declared_target": "thm-t1-iff-singletons-are-closed",
    "target_statement_provenance": "literature-derived",
    "targetPage": "separation-axioms",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-a-locally-compact-hausdorff-space-is-completely-regular",
    "sourcePage": "urysohn-lemma-and-tietze",
    "batch": "wave7-topology-separation-urysohn",
    "target": "def-dependent-choice",
    "declared_target": "def-dependent-choice",
    "target_statement_provenance": "ai-altered",
    "targetPage": "compactness-in-metric-spaces",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-a-locally-compact-hausdorff-space-is-completely-regular",
    "sourcePage": "urysohn-lemma-and-tietze",
    "batch": "wave7-topology-separation-urysohn",
    "target": "def-interval",
    "declared_target": "def-interval",
    "target_statement_provenance": "ai-altered",
    "targetPage": "monotone-sequences-and-cauchy-completeness",
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

## Full text of every cited or declared item (12)

### `def-completely-regular-and-tychonoff-spaces`

````markdown
---
id: def-completely-regular-and-tychonoff-spaces
kind: definition
title: "Completely regular spaces and Tychonoff ($T_{3\\frac{1}{2}}$) spaces"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-zero-sets-and-cozero-sets, def-regular-and-t3-spaces, def-t0-and-t1-spaces,
       def-continuous-map-top, def-interval, def-subspace-topology-top,
       def-metrizable-space, lem-real-line-is-a-metric-space, def-topological-space,
       def-standard-topologies]
justified_by: []
aliases: [def-completely-regular-space, def-tychonoff-space, def-t3-and-a-half-space]
landmark: true
short: "completely regular, Tychonoff"
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
  audited: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Tychonoff space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Tychonoff_space"
    - title: "Separation axiom (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Separation_axiom"
    - title: "J. Munkres, Topology, 2nd ed., §33"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
    - title: "R. Gardner, Introduction to Topology, notes on Munkres Section 33: The Urysohn Lemma (East Tennessee State University)"
      url: "https://faculty.etsu.edu/gardnerr/5357/notes/Munkres-33.pdf"
pipeline_run: null
---

## Definition

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]) and let
$[0,1] \subseteq \mathbb{R}$ carry the subspace topology of the usual topology of
$\mathbb{R}$ ([[def-interval]], [[def-subspace-topology-top]],
[[lem-real-line-is-a-metric-space]], [[def-metrizable-space]]).

- $X$ is **completely regular** when a point can be separated from a closed set
  not containing it *by a continuous function*: for every closed $C \subseteq X$
  and every $x_0 \in X \setminus C$ there is a continuous
  $f : X \to [0,1]$ ([[def-continuous-map-top]]) with
  $$f(x_0) = 1 \qquad \text{and} \qquad f(y) = 0 \ \text{ for every } y \in C .$$
- $X$ is **Tychonoff**, also written **$T_{3\frac{1}{2}}$** and *completely
  regular Hausdorff*, when it is completely regular **and** $T_1$
  ([[def-t0-and-t1-spaces]]).

The case $C = \varnothing$ is allowed and is satisfied by the constant function
$1$, which is continuous ([[def-zero-sets-and-cozero-sets]]); so the condition
hides no nonemptiness hypothesis.

**The same condition in the vocabulary of zero sets.** With $f$ as displayed,
$C \subseteq Z(f)$ and $x_0 \in \operatorname{coz}(f)$
([[def-zero-sets-and-cozero-sets]]), so complete regularity says: for every
closed $C$ and every $x_0 \notin C$ there is a continuous $f$ whose zero set
contains $C$ and whose cozero set contains $x_0$. In particular
$\operatorname{coz}(f)$ is an open set containing $x_0$ and disjoint from $C$;
that alone is weaker than regularity, and the passage from the function to two
*disjoint* open sets is the next item.

**The values $0$ and $1$ are a normalisation, not a restriction.** If
$g : X \to \mathbb{R}$ is continuous with $g(x_0) = a$, $g[C] = \{b\}$ and
$a \ne b$, then the condition above is met by a function built from $g$ by an
affine change of variable followed by truncation into $[0,1]$; this page never
needs that construction, because every function it builds is already normalised.
The *direction* of the normalisation is a genuine convention and is fixed here as
$f(x_0) = 1$ and $f[C] = \{0\}$, following the most common usage; some texts
write the reverse, and a reader must check which is meant before quoting a
formula.

**The convention fork over $T_1$ is the same one as for regularity.** *Completely
regular* names the function-separation condition alone, and Tychonoff names the
conjunction with $T_1$ ([[def-regular-and-t3-spaces]]). The indiscrete topology
on a two-point set ([[def-standard-topologies]]) is completely regular, its only
closed set disjoint from a point being $\varnothing$, and it is not $T_0$; so the
two halves are independent here as well.

## Remarks

- **Complete regularity is a strong hypothesis in disguise.** It asserts the
  existence of many continuous real-valued functions, and a space may have almost
  none; producing such functions is what Urysohn's lemma does for normal $T_1$
  spaces, and that lemma is not available at this point in the reading order
  ([[rem-separation-axiom-conventions]]).

- **Why the numeral is $3\frac12$.** Complete regularity implies regularity, as
  the next item proves, and every normal $T_1$ space is completely regular, which
  this page does **not** prove; so the axiom sits between $T_3$ and $T_4$, and
  the fractional numeral records that position and nothing more.

- **Both names are in use for the conjunction.** *Tychonoff*, *completely regular
  Hausdorff* and *$T_{3\frac12}$* denote the same class; this library writes
  Tychonoff.
````

### `def-dependent-choice`

````markdown
---
id: def-dependent-choice
kind: definition
title: "The axiom of dependent choice: a relation in which every element is related to something admits an $\\mathbb{N}$-indexed chain"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-choice-function, def-axiom-of-choice, def-countable-choice, def-sequence, def-natural-numbers]
justified_by: []
aliases: [def-dc]
landmark: true
short: "dependent choice (DC)"
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Axiom of dependent choice (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_dependent_choice"
    - title: "Axiom of countable choice (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_countable_choice"
    - title: "H. Herrlich, Axiom of Choice, Lecture Notes in Mathematics 1876, Springer 2006"
      url: "https://link.springer.com/book/10.1007/11601562"
pipeline_run: null
---

## Definition

Let $X$ be a set and let $R \subseteq X \times X$ be a binary relation on $X$.
Call $R$ **entire on $X$** when

$$\text{for every } x \in X \text{ there is } y \in X \text{ with } x \mathbin{R} y .$$

The **Axiom of Dependent Choice**, written $\mathrm{DC}$, is the following
statement.

> For every nonempty set $X$, every relation $R$ entire on $X$, and every
> $a \in X$, there is a sequence $x : \mathbb{N} \to X$ ([[def-sequence]],
> [[def-natural-numbers]]) with
> $$x_0 = a \qquad \text{and} \qquad x_n \mathbin{R} x_{n+1} \ \text{ for every } n \in \mathbb{N}.$$

As everywhere in this library $\mathbb{N}$ contains $0$, and the sequence is
indexed from $0$; the term $x_0$ is the prescribed starting point $a$ and every
later term is related to its predecessor.

**What DC adds to what came before.** [[def-choice-function]] and
[[def-axiom-of-choice]] select one element from each member of a family that is
fixed in advance, and [[def-countable-choice]] does the same for a family indexed
by $\mathbb{N}$. In both, the family is given before any selection is made. DC is
the principle needed when the $n$-th set to select from is not known until the
first $n$ selections have been made: here the admissible values of $x_{n+1}$ are
exactly the $R$-successors of $x_n$, so the family being chosen from is built
along the choosing. That is precisely the situation $\mathrm{AC}_\omega$ does not
cover, and it is why a construction "pick $x_{n+1}$ depending on $x_n$, for every
$n$ at once" is not licensed by countable choice.

**The starting point may be dropped.** The formally weaker statement obtained by
deleting the clause $x_0 = a$ — for every nonempty $X$ and every entire $R$ there
is a sequence with $x_n \mathbin{R} x_{n+1}$ for all $n$ — is an immediate
consequence of the form above, since $X$ is nonempty and any of its elements may
be taken as $a$. The reverse derivation is standard and is not needed anywhere in
this library, so it is not carried out; every use below prescribes $x_0$.

**$R$ need not be an order and the terms need not be distinct.** What DC delivers
is a sequence, that is a function $\mathbb{N} \to X$, not a chain in the
order-theoretic sense ([[def-chain]]). The relation may be symmetric, and the
sequence may repeat a value or be constant; all that is asserted is
$x_n \mathbin{R} x_{n+1}$ at every index.

## Remarks

**Where DC sits among the choice principles.** It is a standard fact, proved in
the references and **not** in this library, that

$$\mathrm{AC} \;\Longrightarrow\; \mathrm{DC} \;\Longrightarrow\; \mathrm{AC}_\omega ,$$

and that neither implication reverses. The non-reversals are relative-consistency
results: what they establish is that ZF, if consistent, does not prove the
missing implications, never that those implications are false. This library
contains neither forcing nor permutation models and proves no independence
result, so all of that is quoted from the references and used nowhere.

**Nothing in this library proves DC, and nothing assumes it silently.** Like
[[def-axiom-of-choice]] and [[def-countable-choice]], DC is a statement that may
be assumed or not. Every theorem whose proof uses it says so in its own
statement, and the accounting for the compactness page is collected in
[[rem-compactness-choice-ledger-metric]].

**An upper bound, never a lower one.** When a later item records that its proof
uses DC, the claim made is that the argument given here is carried out in
$\mathrm{ZF} + \mathrm{DC}$. No item claims that DC is *necessary* for the
statement proved, because establishing necessity means separating the statement
from ZF, and that is an independence result of exactly the kind this library does
not prove.
````

### `def-hausdorff-space`

````markdown
---
id: def-hausdorff-space
kind: definition
title: "Hausdorff space: distinct points have disjoint open neighbourhoods; every metrizable space is Hausdorff and the indiscrete topology on two points is not"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-topological-space, def-neighbourhood-top, def-standard-topologies,
       def-metrizable-space, thm-metric-hausdorff-separation,
       def-homeomorphism-and-open-maps]
justified_by: []
aliases: [def-hausdorff, def-t2-space]
landmark: true
short: "Hausdorff space"
verification:
  precheck: n/a
  verified:
    model: gpt-5.6-sol-codex-subscription
    verdict: certify
    date: 2026-08-04
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Hausdorff space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Hausdorff_space"
    - title: "Separation axiom (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Separation_axiom"
    - title: "J. Munkres, Topology, 2nd ed., §17"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Definition

A topological space $(X, \mathcal{T})$ ([[def-topological-space]]) is
**Hausdorff** when any two distinct points are separated by disjoint open sets:
for all $x, y \in X$ with $x \ne y$ there are $U, V \in \mathcal{T}$ with

$$x \in U, \qquad y \in V, \qquad U \cap V = \varnothing .$$

Since an open set containing a point is an open neighbourhood of it
([[def-neighbourhood-top]]), the condition reads: distinct points have disjoint
open neighbourhoods. Nothing is asserted about points that are equal, and the
condition is vacuous for a space with at most one point, so every such space is
Hausdorff.

**Every metrizable space is Hausdorff.** This is not proved here, because it is
already discharged: [[def-metrizable-space]] records it among the two things
every metrizable space has, deriving it from
[[thm-metric-hausdorff-separation]], which separates $p \ne q$ in a metric space
by the disjoint open balls $B(p,r)$ and $B(q,r)$ with $r = d(p,q)/2 > 0$. In
particular $\mathbb{R}$ with its usual topology, every $\mathbb{R}^n$, and every
subspace of a metrizable space are Hausdorff.

**Not every space is Hausdorff.** The indiscrete topology
$\mathcal{T}_{\mathrm{ind}} = \{\varnothing, X\}$ on a set $X = \{a,b\}$ with
$a \ne b$ ([[def-standard-topologies]]) is not: the only open set containing $a$
is $X$, the only one containing $b$ is $X$, and $X \cap X = X \ne \varnothing$.
This is the same two-point space that [[def-metrizable-space]] uses to exhibit a
topology induced by no metric, and the reason is the same one: failure of the
Hausdorff condition is an obstruction to metrizability.

**Being Hausdorff is a topological property** ([[def-homeomorphism-and-open-maps]]).
If $h : X \to Z$ is a homeomorphism and $X$ is Hausdorff, then for $z \ne z'$ in
$Z$ the points $h^{-1}(z)$ and $h^{-1}(z')$ are distinct, so they have disjoint
open $U, V$; the images $h[U]$ and $h[V]$ are open, disjoint, and contain $z$ and
$z'$ respectively, a homeomorphism carrying the open sets of one space
bijectively onto those of the other. So no space homeomorphic to a Hausdorff
space fails the condition.

**Scope of this item.** Only the definition, the metrizable case and the
two-point failure are recorded here, because that is all this page uses. The
Hausdorff condition is one of a graded family of separation axioms; that family,
its ordering, and the questions of which of its members are hereditary or
preserved by products, are not available at this point in the reading order and
nothing here anticipates them. What this page does use is a single negative
result: a quotient of a Hausdorff space need not be Hausdorff, which is recorded
below as a false statement and witnessed on the companion page.

## Remarks

- **Hausdorff spaces have closed singletons.** Fix $x \in X$ and take the union
  of all open subsets of $X$ that avoid $x$. Every $y \ne x$ belongs to one of
  them, by Hausdorff separation of $x$ and $y$, while $x$ belongs to none. The
  union is therefore exactly $X \setminus \{x\}$, so $\{x\}$ is closed.
  Thus the Hausdorff property implies the singleton-closed ($T_1$) property.
  The converse fails: closed singletons need not give disjoint neighbourhoods
  of distinct points.

- **What the Hausdorff condition buys, in the one place this page needs it.**
  Separation of distinct points by disjoint open sets is exactly what a quotient
  map can destroy: identifying points of a Hausdorff space can leave two classes
  every pair of whose open neighbourhoods meet, and the companion page exhibits
  such a quotient of a metrizable space. Nothing weaker than an explicit witness
  settles that, since the condition is a statement about all pairs of open sets.

- **The name.** Hausdorff's own 1914 axiom system for a topological space
  included this condition, so "topological space" once meant what is now called a
  Hausdorff space; this library follows the modern convention in which
  [[def-topological-space]] assumes no separation at all and every separation
  hypothesis is stated where it is used.
````

### `def-interval`

````markdown
---
id: def-interval
kind: definition
title: "Intervals of $\\mathbb{R}$: the nine order-convex forms, nondegeneracy, and length"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-complete-ordered-field, def-ordered-field, def-real-order, def-bounded-set]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-26
  audited: 2026-07-26
sources:
  scraped: []
  references:
    - title: "Interval (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Interval_(mathematics)"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2 (segments and cells)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §0.3 and §1.1"
      url: "https://www.jirka.org/ra/"
---

## Definition

Throughout, $\mathbb{R}$ is the complete ordered field
([[def-complete-ordered-field]], [[def-ordered-field]]) with its order
([[def-real-order]]).

A subset $I \subseteq \mathbb{R}$ is **order-convex** when

$$x, y \in I \text{ and } x \le z \le y \;\Longrightarrow\; z \in I .$$

The **intervals** of $\mathbb{R}$ are the sets of the following nine forms, where
$a, b \in \mathbb{R}$:

| | bounded forms | | one-sided and full forms |
|---|---|---|---|
| $(a,b)$ | $\{x : a < x < b\}$ | $(a,\infty)$ | $\{x : a < x\}$ |
| $[a,b]$ | $\{x : a \le x \le b\}$ | $[a,\infty)$ | $\{x : a \le x\}$ |
| $[a,b)$ | $\{x : a \le x < b\}$ | $(-\infty,b)$ | $\{x : x < b\}$ |
| $(a,b]$ | $\{x : a < x \le b\}$ | $(-\infty,b]$ | $\{x : x \le b\}$ |
| | | $(-\infty,\infty)$ | $\mathbb{R}$ |

An interval is **open** when both of its written endpoints are excluded, that is
for the forms $(a,b)$, $(a,\infty)$, $(-\infty,b)$ and $(-\infty,\infty)$; it is
**closed** when both written endpoints are included, that is for $[a,b]$,
$[a,\infty)$, $(-\infty,b]$ and $(-\infty,\infty)$. The forms $[a,b)$ and
$(a,b]$ are **half-open**.

**The symbols $\pm\infty$ are notation and not elements of $\mathbb{R}$.** They
mark which side carries no endpoint condition at all; the five forms in the right
column are defined by the displayed conditions on $x$ alone, and no arithmetic is
ever performed with $\infty$. This is the same refusal to extend $\mathbb{R}$
silently that [[rem-sup-conventions]] records for suprema.

**Every one of the nine forms is order-convex.** Each is defined by a conjunction
of at most two conditions, each of the shape $a < x$, $a \le x$, $x < b$ or
$x \le b$, and each such condition is inherited by an intermediate point: if
$a < x$ and $x \le z$ then $a < z$, and if $z \le y$ and $y < b$ then $z < b$,
by transitivity of the order ([[def-ordered-field]]). Applying this to whichever
one or two conditions define the form in question gives $z \in I$ whenever
$x, y \in I$ and $x \le z \le y$.

**Bounded intervals.** An interval is **bounded** ([[def-bounded-set]]) exactly
when it is of one of the four forms in the left column: for those, $a$ is a lower
bound and $b$ an upper bound. The other five forms are unbounded, on the side or
sides written with $\infty$; the verification is in the remarks below.

**Nondegeneracy.** An interval is **degenerate** when it has at most one element,
and **nondegenerate** when it has at least two. For the four bounded forms with
endpoints $a$ and $b$:

- $[a,b]$ is nonempty exactly when $a \le b$, and it is nondegenerate exactly
  when $a < b$. It is the singleton $\{a\}$ when $a = b$.
- $(a,b)$, $[a,b)$ and $(a,b]$ are nonempty exactly when $a < b$, and then each
  is nondegenerate.

The only assertion here that is not immediate from the defining conditions is
that $a < b$ makes $(a,b)$ nonempty with at least two points. It holds because
$a < (a+b)/2 < b$, which follows from $a < b$ by adding $a$, respectively $b$, to
both sides and halving ([[def-ordered-field]]); repeating the halving inside
$(a, (a+b)/2)$ produces a second point.

**Closed bounded intervals.** These are the sets $[a,b]$ with $a \le b$, which is
exactly the condition making them nonempty. They are the intervals the nested
interval property is stated for, and the phrase *closed bounded interval* always
carries the hypothesis $a \le b$ in this library.

**Length.** The **length** of a bounded interval presented by its endpoints
$a \le b$ is

$$\ell = b - a \;\ge\; 0 .$$

Length is attached to the presentation by endpoints and is not recovered from the
set: $(a,b)$, $[a,b)$ and $(a,b]$ are all empty when $a = b$, and so is
$(c,c)$ for any other $c$, while each of these presentations has length $0$, so
nothing inconsistent arises; but the endpoints are named explicitly at every
point where a length is used in this library, and never inferred from the set.
Unbounded intervals are assigned no length.

## Remarks

- **Why the five unbounded forms really are unbounded.** Take $[a,\infty)$ and
  suppose $u \in \mathbb{R}$ were an upper bound of it. The element
  $x = a + |u - a| + 1$ satisfies $x \ge a$, so $x \in [a,\infty)$, and
  $x \ge a + (u - a) + 1 = u + 1 > u$, since $|t| \ge t$ ([[lem-of-abs-value]])
  and $1 > 0$ ([[cor-of-one-positive]]). That contradicts $x \le u$. The same
  computation with $a$ replaced by any element of $(a,\infty)$ handles the open
  form, and reflecting through the origin handles $(-\infty,b)$ and
  $(-\infty,b]$; $\mathbb{R}$ itself is unbounded on both sides for the same
  reason. Note that this uses no Archimedean property: it is the failure of a
  *single* bound, not the cofinality of the naturals.

- **The converse classification is not asserted here.** It is true that every
  order-convex subset of $\mathbb{R}$ is empty or one of the nine forms, and the
  proof runs through suprema and infima, but nothing in this library needs it and
  it is not proved anywhere here. What is used is only the direction proved
  above: each of the nine forms is order-convex.

- **Degenerate intervals are kept, not excluded.** $[a,a] = \{a\}$ and
  $(a,a) = \emptyset$ are intervals under this definition. Excluding them would
  force a nonemptiness hypothesis into every statement that produces an interval,
  and the nested interval property is a good illustration: its conclusion is that
  the intersection is nonempty, and in the equality case the intersection is the
  degenerate interval $[a,a]$, which is exactly the single point.
````

### `def-locally-compact-space`

````markdown
---
id: def-locally-compact-space
kind: definition
title: "Locally compact topological space: every point has a compact neighbourhood; and what this says in a metric space"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-compact-space, def-neighbourhood-top, def-topological-space, def-subspace-topology-top, def-metrizable-space, def-metric-topology, def-metric-ball, def-metric-bounded-diameter, thm-compactness-agrees-with-metric-compactness, cor-heine-borel-in-the-product-topology, lem-metrics-on-rn]
justified_by: []
aliases: [def-locally-compact]
landmark: true
short: "locally compact space"
verification:
  precheck: n/a
  verified:
    model: gpt-5.6-sol-codex-subscription
    verdict: certify
    date: 2026-08-05
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Locally compact space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Locally_compact_space"
    - title: "J. Munkres, Topology, 2nd ed., §29"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
    - title: "Stacks Project, Tag 08ZQ"
      url: "https://stacks.math.columbia.edu/tag/08ZQ"
    - title: "I. Khatchatourian, Compactifications (MAT327 notes)"
      url: "https://www.math.toronto.edu/ivan/mat327/docs/notes/19-compactifications.pdf"
pipeline_run: null
---

## Definition

A topological space $(X, \mathcal{T})$ ([[def-topological-space]]) is **locally
compact** when

> every point of $X$ has a compact neighbourhood:

that is, for every $x \in X$ there is a neighbourhood $N$ of $x$
([[def-neighbourhood-top]]) that is a compact subset of $X$
([[def-compact-space]], [[def-subspace-topology-top]]).

**A neighbourhood need not be open here**, and that is what makes the condition
the weak one it is meant to be: $N$ is required only to contain some open set
containing $x$. Writing "compact **open** neighbourhood" instead would define a
strictly stronger property, satisfied by no space in which a point has no compact
open neighbourhood, $\mathbb{R}$ among them; and requiring the compact set merely
to *contain* $x$ would define a property so weak that every space with a
singleton has it, singletons being compact.

**Every compact space is locally compact**, since $X$ itself is a neighbourhood
of each of its points and is a compact subset of itself. The converse fails, and
$\mathbb{R}^n$ is the standard witness.

**What the condition says in a metric space.** Let $(X,d)$ be a metric space
carrying its metric topology ([[def-metric-topology]], [[def-metrizable-space]]),
with balls as in [[def-metric-ball]], and let $x \in X$. Then

> $x$ has a compact neighbourhood **if and only if** there are a real $r > 0$ and
> a compact $K \subseteq X$ with $B(x,r) \subseteq K$.

*Both directions are immediate and are discharged here.* If $N$ is a compact
neighbourhood of $x$, fix an open $U$ with $x \in U \subseteq N$; by
[[def-metric-topology]] there is $r > 0$ with $B(x,r) \subseteq U \subseteq N$, so
$K := N$ serves. Conversely, if $B(x,r) \subseteq K$ with $K$ compact, then $K$
contains the open set $B(x,r)$, which contains $x$, so $K$ is a neighbourhood of
$x$ and is compact. Compactness of a subset of $(X,d)$ means the same thing read
metrically and read topologically
([[thm-compactness-agrees-with-metric-compactness]]), so the criterion may be
applied with either development's theorems.

**$\mathbb{R}^n$ is locally compact for every $n \ge 1$.** Give $\mathbb{R}^n$
the product topology, which is the metric topology of the Euclidean metric $d_2$
([[lem-metrics-on-rn]], [[cor-heine-borel-in-the-product-topology]]). For
$p \in \mathbb{R}^n$ the set

$$Q_p \;:=\; \{\, x \in \mathbb{R}^n : d_2(x,p) \le 1 \,\}$$

is closed, being the complement of the union of the open balls $B(y, d_2(y,p) - 1)$
over the points $y$ with $d_2(y,p) > 1$, and it is bounded
([[def-metric-bounded-diameter]]), lying inside $B(p, 2)$; so $Q_p$ is compact by
[[cor-heine-borel-in-the-product-topology]]. It contains the open ball $B(p,1)$,
which contains $p$, so it is a compact neighbourhood of $p$. The space
$\mathbb{R}^n$ is not compact, so local compactness is strictly weaker than
compactness.

## Remarks

**Local compactness is a local condition and compactness is not.** The definition
quantifies over points and asks for something in a neighbourhood of each; nothing
is asserted about covers of the whole space. That is why a locally compact space
may be as large as one likes, and why the two properties separate.

**Where the extra strength is needed.** For an arbitrary space, "every point has
a compact neighbourhood" does not by itself give a *base* of compact
neighbourhoods at each point, nor an open set with compact closure around each
compact set. Both of those do follow once the space is also Hausdorff, and that
is [[thm-locally-compact-hausdorff-basics]]; several authors build the stronger
condition into the definition and then note the agreement in the Hausdorff case.
This library takes the weak definition and proves the strengthening under the
hypothesis that licenses it.

**Local compactness is not hereditary**, unlike metrizability. A subspace of a
locally compact space need not be locally compact, and
[[fs-local-compactness-is-hereditary]] records the failure with a witness; what
does survive is heredity along open and along closed subspaces of a locally
compact **Hausdorff** space ([[thm-locally-compact-hausdorff-basics]]).
````

### `def-one-point-compactification`

````markdown
---
id: def-one-point-compactification
kind: definition
title: "The one-point (Alexandroff) compactification $X^{*} = X \\cup \\{\\infty\\}$, whose open sets are the open sets of $X$ together with the complements in $X^{*}$ of the closed compact subsets of $X$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-compact-space, def-topological-space, def-subspace-topology-top, thm-closed-subspace-of-a-compact-space-is-compact]
justified_by: [thm-one-point-compactification-properties]
aliases: [def-alexandroff-compactification]
landmark: true
short: "one-point compactification"
verification:
  precheck: n/a
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
    - title: "Alexandroff extension (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Alexandroff_extension"
    - title: "J. Munkres, Topology, 2nd ed., §29"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
    - title: "Stacks Project, Tag 090A"
      url: "https://stacks.math.columbia.edu/tag/090A"
pipeline_run: null
---

## Definition

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]).

**A point outside $X$, named rather than assumed.** Put

$$\infty \;:=\; \{\, y \in X : y \notin y \,\},$$

a set by Separation. Then $\infty \notin X$: were $\infty \in X$, the defining
condition applied to $\infty$ itself would give
$\infty \in \infty \iff \infty \notin \infty$. So no hypothesis about $X$ is
needed to obtain a point outside it, and the construction below is available for
every space.

**The space.** Put $X^{*} := X \cup \{\infty\}$ and

$$\mathcal{T}^{*} \;:=\; \mathcal{T} \;\cup\; \{\, X^{*} \setminus C \;:\; C \subseteq X,\ C \text{ closed in } X \text{ and a compact subset of } X \,\} .$$

The pair $(X^{*}, \mathcal{T}^{*})$ is the **one-point compactification**, or
**Alexandroff compactification**, of $X$. Members of $\mathcal{T}$ are said to be
of the **first kind** and the sets $X^{*} \setminus C$ of the **second kind**; a
set of the second kind is exactly an open set of $\mathcal{T}^{*}$ containing
$\infty$, since a member of $\mathcal{T}$ is a subset of $X$, and the set $C$ is
recovered from it as $C = X^{*} \setminus (X^{*} \setminus C)$.

**$\mathcal{T}^{*}$ is a topology on $X^{*}$, and this is discharged here.**
Throughout, "closed" and "compact" without qualification mean closed in $X$ and a
compact subset of $X$ ([[def-compact-space]]); two facts about such sets are used
and both are [[thm-closed-subspace-of-a-compact-space-is-compact]]: a subset of a
compact $C$ that is closed in $X$ is closed in the subspace $C$
([[def-subspace-topology-top]]) and hence compact, and a union of two compact
subsets is compact.

*(T1).* $\varnothing \in \mathcal{T}$, and $X^{*} = X^{*} \setminus \varnothing$
is of the second kind, $\varnothing$ being closed in $X$ and compact.

*(T2).* Let $\mathcal{S} \subseteq \mathcal{T}^{*}$, let $\mathcal{S}_1$ be the
members of $\mathcal{S}$ lying in $\mathcal{T}$ and $\mathcal{S}_2$ the rest, so
that every member of $\mathcal{S}_2$ is of the second kind. If
$\mathcal{S}_2 = \varnothing$ then $\bigcup \mathcal{S} = \bigcup \mathcal{S}_1$
lies in $\mathcal{T}$ by (T2) in $X$. Otherwise put
$U := \bigcup \mathcal{S}_1 \in \mathcal{T}$ and
$\mathcal{D} := \{\, X^{*} \setminus O : O \in \mathcal{S}_2 \,\}$, a nonempty
family of closed compact subsets of $X$, and $C_0 := \bigcap \mathcal{D}$. Then
$C_0$ is closed by (C2) of [[def-topological-space]], and it is a closed subset of
any one member of $\mathcal{D}$, hence compact. Now

$$\bigcup \mathcal{S} \;=\; U \cup (X^{*} \setminus C_0) \;=\; X^{*} \setminus (C_0 \setminus U),$$

and $C_0 \setminus U = C_0 \cap (X \setminus U)$ is closed in $X$ and a subset of
the compact $C_0$, hence compact; so $\bigcup \mathcal{S}$ is of the second kind.

*(T3).* For $U, V \in \mathcal{T}$ the intersection lies in $\mathcal{T}$ by (T3)
in $X$. For two sets of the second kind,
$(X^{*} \setminus C) \cap (X^{*} \setminus D) = X^{*} \setminus (C \cup D)$, and
$C \cup D$ is closed in $X$ and compact as a union of two compact subsets. For one
of each, $\infty \notin U$ gives
$U \cap (X^{*} \setminus C) = U \cap (X \setminus C)$, an intersection of two
members of $\mathcal{T}$.

**Why the compact sets are also required to be closed.** The complement of a
compact set that is not closed in $X$ would not make $\infty$'s neighbourhoods
behave: the union computation in (T2) uses that an intersection of the discarded
sets is again closed, and the intersection of arbitrary compact subsets of a
non-Hausdorff space need not be compact. When $X$ is Hausdorff every compact
subset is closed ([[thm-compact-subset-of-a-hausdorff-space-is-closed]]) and the
two descriptions agree, which is why many texts state the definition without the
word "closed" and silently assume the Hausdorff case.

## Remarks

**What the name promises is proved, not assumed.** That $X^{*}$ is compact, that
$X$ sits inside it as an open subspace carrying its own topology, and the exact
conditions under which $X$ is dense in $X^{*}$ or $X^{*}$ is Hausdorff, are
[[thm-one-point-compactification-properties]]. Nothing above uses any of them.

**The added point is a genuine construction and not a choice.** The set $\infty$
above is determined by $X$; no appeal to any principle of choice is made, and no
"take a point not in $X$" is left unexplained.

**$X^{*}$ is Hausdorff exactly when $X$ is locally compact and Hausdorff**
([[def-locally-compact-space]]), which is the reason local compactness and this
construction always appear together.
````

### `def-subspace-topology-top`

````markdown
---
id: def-subspace-topology-top
kind: definition
title: "Subspace topology: the traces of the open sets, its closed sets and its bases, the continuity of the inclusion, and the characteristic property of a map into a subspace"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-topological-space, def-topology-basis-subbasis, def-continuous-map-top, thm-continuity-characterisations-top]
justified_by: []
aliases: [def-subspace-top, def-relative-topology]
landmark: true
short: "subspace topology"
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Subspace topology (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Subspace_topology"
    - title: "J. Munkres, Topology, 2nd ed., §16"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Definition

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]) and let
$S \subseteq X$. The **subspace topology** (also *relative topology*) on $S$ is

$$\mathcal{T}_S := \{\, U \cap S : U \in \mathcal{T} \,\},$$

the family of **traces** on $S$ of the open sets of $X$. The pair
$(S, \mathcal{T}_S)$ is a **subspace** of $X$. A subset of $S$ that lies in
$\mathcal{T}_S$ is said to be **open in $S$**, and *relatively open* where the
ambient space needs emphasis.

**$\mathcal{T}_S$ is a topology, and this is discharged here.** (T1):
$\varnothing = \varnothing \cap S$ and $S = X \cap S$ are traces. (T2): if
$\mathcal{S}' \subseteq \mathcal{T}_S$, choose for each member a set of
$\mathcal{T}$ tracing to it — no choice principle is needed, since
$U' := \bigcup \{\, U \in \mathcal{T} : U \cap S \subseteq W \,\}$ is a canonical
such set for $W \in \mathcal{T}_S$, being open by (T2) in $X$ and satisfying
$U' \cap S = W$ — and then
$\bigcup_i (U_i \cap S) = (\bigcup_i U_i) \cap S \in \mathcal{T}_S$ by (T2) in
$X$. (T3): $(U \cap S) \cap (V \cap S) = (U \cap V) \cap S \in \mathcal{T}_S$ by
(T3) in $X$.

**Closed sets of a subspace are the traces of the closed sets.** A set
$C \subseteq S$ is closed in $S$ if and only if $C = F \cap S$ for some closed
$F \subseteq X$. Indeed $S \setminus (U \cap S) = (X \setminus U) \cap S$ and
$S \setminus (F \cap S) = (X \setminus F) \cap S$, so complementation inside $S$
matches complementation inside $X$ under tracing.

**Bases and subbases trace as well.** If $\mathcal{B}$ is a basis for
$\mathcal{T}$ ([[def-topology-basis-subbasis]]) then
$\mathcal{B}_S := \{\, B \cap S : B \in \mathcal{B} \,\}$ is a basis for
$\mathcal{T}_S$: its members are open in $S$, and for $W = U \cap S$ open in $S$
and $x \in W$ there is $B \in \mathcal{B}$ with $x \in B \subseteq U$, whence
$x \in B \cap S \subseteq W$. The same computation with a subbasis $\mathcal{S}$
shows that $\{\, S_0 \cap S : S_0 \in \mathcal{S} \,\}$ is a subbasis for
$\mathcal{T}_S$, since tracing commutes with finite intersections and with
unions.

**The inclusion is continuous.** The inclusion map $\iota : S \to X$,
$\iota(s) = s$, satisfies $\iota^{-1}[U] = U \cap S$ for every $U \subseteq X$,
so preimages of open sets are open and $\iota$ is continuous
([[thm-continuity-characterisations-top]], clause (b)). Moreover
$\mathcal{T}_S$ is the **coarsest** topology on $S$ making $\iota$ continuous: any
topology on $S$ for which $\iota$ is continuous must contain every
$\iota^{-1}[U] = U \cap S$, hence contain $\mathcal{T}_S$.

**Characteristic property of a map into a subspace.** Let $(Z, \mathcal{T}_Z)$ be
a topological space and let $g : Z \to S$ be a function. Then

$$g \text{ is continuous as a map } Z \to (S,\mathcal{T}_S) \iff \iota \circ g \text{ is continuous as a map } Z \to (X,\mathcal{T}) .$$

*Proof.* For $U \in \mathcal{T}$ one has
$(\iota \circ g)^{-1}[U] = g^{-1}[\iota^{-1}[U]] = g^{-1}[U \cap S]$. If $g$ is
continuous then each $g^{-1}[U \cap S]$ is open, so $\iota \circ g$ is continuous;
conversely if $\iota \circ g$ is continuous then for any $W = U \cap S$ open in
$S$ the set $g^{-1}[W] = (\iota \circ g)^{-1}[U]$ is open, so $g$ is continuous.
Both directions use only clause (b) of [[thm-continuity-characterisations-top]].

**Restriction of a continuous map.** If $f : X \to Y$ is continuous and
$S \subseteq X$, then $f|_S : S \to Y$ is continuous, since
$(f|_S)^{-1}[V] = f^{-1}[V] \cap S$ is open in $S$ for every open $V \subseteq Y$
([[def-continuous-map-top]], [[thm-continuity-characterisations-top]]).

**When relative and ambient agree.** If $S$ is open in $X$ then a subset of $S$
is open in $S$ if and only if it is open in $X$: a trace $U \cap S$ is then an
intersection of two open sets of $X$, and conversely an open subset of $X$
contained in $S$ is its own trace. The same statement with "closed" throughout
holds when $S$ is closed in $X$. Both are used in the pasting lemma of the next
item, and both fail without the hypothesis: $S$ itself is always open and closed
in $S$, and need be neither in $X$.

## Remarks

- **The subspace topology is what makes a subset a space.** Before it, a statement
  such as "the restriction of $f$ to $C$ is continuous" has no meaning, because
  $C$ carries no topology. Every restriction below is taken with respect to the
  subspace topology and with no other convention available.

- **Openness and closedness are not absolute.** $[0,1)$ is open in $[0,2)$ and is
  neither open nor closed in $\mathbb{R}$; the interval $(0,1)$ is closed in
  itself. A sentence of the form "$A$ is open" is incomplete unless the space is
  named, and this library names it whenever more than one is in play.

- **Transitivity.** If $S \subseteq T \subseteq X$ then the subspace topology $S$
  inherits from $(T, \mathcal{T}_T)$ is the subspace topology it inherits from
  $X$, since $(U \cap T) \cap S = U \cap S$ for $U \in \mathcal{T}$. So no
  ambiguity arises from the route by which a subset is reached.
````

### `def-t0-and-t1-spaces`

````markdown
---
id: def-t0-and-t1-spaces
kind: definition
title: "$T_0$ (Kolmogorov) and $T_1$ (Frechet) spaces"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-topological-space, def-neighbourhood-top, def-interior-closure-boundary-top,
       def-standard-topologies]
justified_by: []
aliases: [def-t0-space, def-t1-space, def-kolmogorov-space, def-frechet-space]
landmark: true
short: "$T_0$ and $T_1$ spaces"
verification:
  precheck: n/a
  verified:
    model: gpt-5.6-sol-codex-subscription
    verdict: certify
    date: 2026-08-03
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Kolmogorov space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Kolmogorov_space"
    - title: "T1 space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/T1_space"
    - title: "Separation axiom (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Separation_axiom"
    - title: "J. Munkres, Topology, 2nd ed., §17"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Definition

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]).

- $X$ is **$T_0$**, or a **Kolmogorov space**, when any two distinct points are
  *topologically distinguishable*: for all $x, y \in X$ with $x \ne y$ there is
  an open set containing exactly one of $x$ and $y$.
- $X$ is **$T_1$**, or a **Frechet space**, when each of any two distinct points
  has an open set containing it and missing the other: for all $x, y \in X$ with
  $x \ne y$ there are $U, V \in \mathcal{T}$ with

$$x \in U, \quad y \notin U, \qquad y \in V, \quad x \notin V .$$

Nothing is asserted about a pair of equal points, so a space with at most one
point satisfies both conditions vacuously.

Since an open set containing a point is an open neighbourhood of it
([[def-neighbourhood-top]]), both conditions may be read with "open
neighbourhood" in place of "open set"; and by the same equivalence recorded in
[[def-neighbourhood-top]] they may be read with arbitrary neighbourhoods, since
a neighbourhood of $x$ contains an open one and an open neighbourhood is a
neighbourhood.

**Every $T_1$ space is $T_0$, and this is discharged here** rather than left to
the reader, because it is the bottom arrow of the whole hierarchy on this page.
Let $x \ne y$ and take $U, V$ as in the $T_1$ condition. Then $U$ is an open set
containing $x$ and not $y$, so it contains exactly one of the two points, which
is the $T_0$ condition. Only the first half of the $T_1$ condition is used, so
the implication does not reverse formally, and it does not reverse in fact:
Sierpinski space is a witness, recorded on the companion page.

**The two conditions differ exactly in symmetry.** $T_0$ asks for *one* open set
that tells the pair apart, with no control over which of the two it contains;
$T_1$ asks for *both* separations at once. In Sierpinski space
$(\{a,b\}, \{\varnothing, \{b\}, \{a,b\}\})$ of [[def-standard-topologies]] the
open set $\{b\}$ contains $b$ and not $a$, so the space is $T_0$; but the only
open set containing $a$ is the whole space, which also contains $b$, so it is
not $T_1$.

**Neither condition is a property of a set alone.** Both are properties of the
pair $(X, \mathcal{T})$, and both are inherited upwards along the comparison
order of [[def-topological-space]]: if $\mathcal{T}_1 \subseteq \mathcal{T}_2$
and $(X,\mathcal{T}_1)$ is $T_0$, respectively $T_1$, then so is
$(X,\mathcal{T}_2)$, since the separating open sets of the coarser topology lie
in the finer one. In particular the discrete topology satisfies both, and the
indiscrete topology on a set with at least two points satisfies neither.

## Remarks

- **The names.** The numbering $T_0, T_1, T_2, \dots$ is Alexandroff and Hopf's
  *Trennungsaxiome*; the individual names honour Kolmogorov and Frechet. This
  page fixes each axiom by its condition and treats the numeral as an
  abbreviation, because the numerals above $T_3$ are used inconsistently in the
  literature ([[rem-separation-axiom-conventions]]).

- **What $T_1$ says about closures.** $T_1$ is equivalent to the closedness of
  every singleton, and hence to $\overline{\{x\}} = \{x\}$ for every point
  ([[def-interior-closure-boundary-top]]); that equivalence is the next item and
  is a theorem, not a restatement. The corresponding characterisation of $T_0$,
  that distinct points have distinct closures, is not needed on this page and is
  not proved here.

- **No separation is built into the word *space*.** [[def-topological-space]]
  assumes none; every separation property on this page is a hypothesis written
  out where it is used.
````

### `thm-a-compact-hausdorff-space-is-regular-and-normal`

````markdown
---
id: thm-a-compact-hausdorff-space-is-regular-and-normal
kind: theorem
title: "A compact Hausdorff space is regular and normal, hence $T_3$ and $T_4$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-compact-subset-of-a-hausdorff-space-is-closed, def-compact-space,
       thm-closed-subspace-of-a-compact-space-is-compact, def-regular-and-t3-spaces,
       def-normal-and-t4-spaces, def-t0-and-t1-spaces, def-hausdorff-space,
       lem-urysohn-sits-between-hausdorff-and-regular-plus-t1, def-topological-space]
justified_by: []
aliases: [thm-compact-hausdorff-is-normal]
landmark: true
short: "compact Hausdorff implies regular and normal"
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
    - title: "Normal space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Normal_space"
    - title: "Compact space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Compact_space"
    - title: "Separation axiom (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Separation_axiom"
    - title: "A. Hatcher, Topology Notes"
      url: "https://pi.math.cornell.edu/~hatcher/Top/TopNotes.pdf"
pipeline_run: null
---

## Statement

Let $X$ be a compact ([[def-compact-space]]) Hausdorff
([[def-hausdorff-space]]) topological space. Then:

1. $X$ is **regular** ([[def-regular-and-t3-spaces]]);
2. $X$ is **normal** ([[def-normal-and-t4-spaces]]);
3. $X$ is $T_1$ ([[def-t0-and-t1-spaces]]), and hence $X$ is $T_3$ and $T_4$.

Following [[def-regular-and-t3-spaces]] and [[def-normal-and-t4-spaces]],
*regular* and *normal* name the separation conditions alone and the numerals
$T_3$ and $T_4$ name their conjunctions with $T_1$; claim 3 is what supplies the
$T_1$ half, and it is stated separately for that reason.

**Nothing stronger is claimed.** In particular it is not asserted here that a
compact Hausdorff space is completely regular
([[def-regular-and-t3-spaces]] distinguishes the two conditions), and no
continuous real-valued function is produced anywhere below.

## Facts & Assumptions

**Given:** A compact Hausdorff topological space $X$.

[A1] $X$ is regular when for every closed $C \subseteq X$ and every $x \in X \setminus C$ there are disjoint open $U \ni x$ and $V \supseteq C$; the case $C = \varnothing$ is met by $U = X$ and $V = \varnothing$, and $T_3$ is regular together with $T_1$ ([[def-regular-and-t3-spaces]], [[def-t0-and-t1-spaces]]).

[A2] $X$ is normal when for all disjoint closed $A, B \subseteq X$ there are disjoint open $U \supseteq A$ and $V \supseteq B$; the cases $A = \varnothing$ and $B = \varnothing$ are met by $\varnothing$ together with $X$, and $T_4$ is normal together with $T_1$ ([[def-normal-and-t4-spaces]], [[def-t0-and-t1-spaces]]).

[A3] $X$ is a topological space, so a subset is closed exactly when its complement is open ([[def-topological-space]]).

[L1] A closed subspace of a compact space is compact ([[thm-closed-subspace-of-a-compact-space-is-compact]], [[def-compact-space]]).

[L2] In a Hausdorff space, a point and a disjoint compact set have disjoint open neighbourhoods, and two disjoint compact sets have disjoint open neighbourhoods ([[thm-compact-subset-of-a-hausdorff-space-is-closed]], [[def-hausdorff-space]], [[def-compact-space]]).

[L3] Every Hausdorff space is $T_1$ ([[lem-urysohn-sits-between-hausdorff-and-regular-plus-t1]], claim 2, [[def-t0-and-t1-spaces]]).

## Proof

**Proof technique:** direct.

1.1 Let $C \subseteq X$ be closed and let $x \in X \setminus C$; since $X$ is compact and $C$ is closed in $X$, the subspace $C$ is compact, and $x$ does not lie in it. [A3, L1]

1.2 Let $A, B \subseteq X$ be closed with $A \cap B = \varnothing$; since $X$ is compact and both are closed in $X$, both subspaces $A$ and $B$ are compact. [A3, L1]

1.3 $X$ is $T_1$, being Hausdorff. [L3]

2.1 By [L2], applied to the point $x$ and the disjoint compact set $C$ of step 1.1, there are disjoint open $U \ni x$ and $V \supseteq C$; as $C$ and $x$ were arbitrary this is exactly the condition of [A1], so $X$ is regular, which is claim 1. [step 1.1, A1, L2]

2.2 By [L2], applied to the two disjoint compact sets $A$ and $B$ of step 1.2, there are disjoint open $U \supseteq A$ and $V \supseteq B$; as $A$ and $B$ were arbitrary this is the condition of [A2], so $X$ is normal, which is claim 2. [step 1.2, A2, L2]

3.1 By step 1.3 the space is $T_1$; with step 2.1 it is regular and $T_1$, hence $T_3$, and with step 2.2 it is normal and $T_1$, hence $T_4$. This is claim 3. [step 1.3, step 2.1, step 2.2, A1, A2]

4.1 Steps 2.1, 2.2 and 3.1 are claims 1, 2 and 3, so a compact Hausdorff space is regular, normal, $T_3$ and $T_4$. [step 2.1, step 2.2, step 3.1] ∎

## Remarks

- **The whole content is that "closed" and "compact" coincide here, in the direction that is needed.** Regularity asks a point to be separated from a closed set and normality asks two closed sets to be separated; compactness of the ambient space converts each closed set into a compact one, and the separation of compact sets in a Hausdorff space is what [[thm-compact-subset-of-a-hausdorff-space-is-closed]] supplies. No new separation argument is run.

- **Why compactness of $X$ is needed and not just of the sets separated.** The hypothesis is used only through [L1], to know that an arbitrary closed subset of $X$ is compact. A Hausdorff space in which the sets to be separated happen to be compact is separated by [L2] alone and needs no hypothesis on the ambient space at all; what compactness of $X$ buys is that *every* closed set is such a set.

- **The degenerate cases are not a gap.** If $C$, $A$ or $B$ is empty the required open sets are named outright in [A1] and [A2], so the argument does not depend on any nonemptiness hidden in the compact-separation clauses.
````

### `thm-one-point-compactification-properties`

````markdown
---
id: thm-one-point-compactification-properties
kind: theorem
title: "$X^{*}$ is compact and contains $X$ as an open subspace; $X$ is dense in $X^{*}$ exactly when $X$ is not compact; and $X^{*}$ is Hausdorff exactly when $X$ is locally compact and Hausdorff"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-one-point-compactification, def-compact-space, def-locally-compact-space, def-hausdorff-space, thm-compact-subset-of-a-hausdorff-space-is-closed, thm-locally-compact-hausdorff-basics, def-subspace-topology-top, def-dense-top, def-interior-closure-boundary-top, thm-closure-characterisation-top, lem-compactness-of-a-subspace-is-ambient, def-topological-space, def-neighbourhood-top]
justified_by: []
aliases: [thm-alexandroff-compactification-properties]
landmark: true
short: "properties of $X^{*}$"
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
    - title: "Alexandroff extension (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Alexandroff_extension"
    - title: "J. Munkres, Topology, 2nd ed., §29"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
    - title: "Stacks Project, Tag 090A"
      url: "https://stacks.math.columbia.edu/tag/090A"
pipeline_run: null
---

## Statement

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]) and let
$(X^{*}, \mathcal{T}^{*})$ be its one-point compactification, with added point
$\infty$ ([[def-one-point-compactification]]). Then:

1. **$X^{*}$ is compact** ([[def-compact-space]]).
2. **$X$ is an open subspace of $X^{*}$**: $X \in \mathcal{T}^{*}$, and the
   subspace topology that $X$ inherits from $X^{*}$
   ([[def-subspace-topology-top]]) is $\mathcal{T}$ itself.
3. **$X$ is dense in $X^{*}$** ([[def-dense-top]]) **if and only if $X$ is not
   compact.**
4. **$X^{*}$ is Hausdorff** ([[def-hausdorff-space]]) **if and only if $X$ is
   locally compact** ([[def-locally-compact-space]]) **and Hausdorff.**

In particular, a locally compact Hausdorff space is an open subspace of a compact
Hausdorff space, which is the reason the construction is made. **No choice
principle is used**: the only cover thinned below is thinned by the indexed form
of [[lem-compactness-of-a-subspace-is-ambient]], which returns its own indices.

## Facts & Assumptions

**Given:** A topological space $(X, \mathcal{T})$, its one-point compactification $X^{*} = X \cup \{\infty\}$ with $\infty \notin X$, and the topology $\mathcal{T}^{*}$.

[L1] $\mathcal{T}^{*}$ consists of the members of $\mathcal{T}$ together with the sets $X^{*} \setminus C$ for $C \subseteq X$ closed in $X$ and a compact subset of $X$; an open subset of $X^{*}$ containing $\infty$ is exactly one of the latter, and $C$ is recovered from it by complementation ([[def-one-point-compactification]]).

[L2] A space is compact when every open cover has a finite subcover; a subset $A$ is a compact subset when the subspace it carries is compact ([[def-compact-space]], [[def-subspace-topology-top]]).

[L3] $A$ is a compact subset of a space $Z$ exactly when for every set $I$ and every family $(W_i)_{i \in I}$ of open subsets of $Z$ with $A \subseteq \bigcup_{i \in I} W_i$ there are $n \in \mathbb{N}$ and $i_0, \dots, i_n \in I$ with $A \subseteq W_{i_0} \cup \dots \cup W_{i_n}$, or else $A = \varnothing$ ([[lem-compactness-of-a-subspace-is-ambient]], claim 2).

[L4] The open sets of a subspace are the traces of the open sets of the ambient space ([[def-subspace-topology-top]]); an open set is a neighbourhood of each of its points ([[def-neighbourhood-top]]).

[L5] $A$ is dense in $Z$ when $\overline{A} = Z$, and $z \in \overline{A}$ exactly when every open set containing $z$ meets $A$ ([[def-dense-top]], [[def-interior-closure-boundary-top]], [[thm-closure-characterisation-top]], claim 1).

[L6] A space is Hausdorff when distinct points have disjoint open neighbourhoods ([[def-hausdorff-space]]); in a Hausdorff space a compact subset is closed ([[thm-compact-subset-of-a-hausdorff-space-is-closed]], claim 3).

[L7] In a locally compact Hausdorff space every neighbourhood of a point contains a compact neighbourhood of it ([[thm-locally-compact-hausdorff-basics]], claim 1); $X$ is locally compact when every point of $X$ has a compact neighbourhood ([[def-locally-compact-space]]).

## Proof

**Proof technique:** direct.

1.1 Claim 2: $X \in \mathcal{T}$, so $X \in \mathcal{T}^{*}$ by [L1] and $X$ is open in $X^{*}$; and the traces on $X$ of the members of $\mathcal{T}^{*}$ are the sets $U \cap X = U$ for $U \in \mathcal{T}$ and the sets $(X^{*} \setminus C) \cap X = X \setminus C$ for $C$ closed in $X$, all of which lie in $\mathcal{T}$, while every $U \in \mathcal{T}$ is its own trace. So the subspace topology is $\mathcal{T}$. [L1, L4]

1.2 Claim 1: let $\mathcal{U} \subseteq \mathcal{T}^{*}$ have union $X^{*}$; some $O \in \mathcal{U}$ contains $\infty$, so $O = X^{*} \setminus C$ with $C$ closed in $X$ and a compact subset of $X$, by [L1]. [L1, L2]

1.3 For claim 3, the open subsets of $X^{*}$ containing $\infty$ are exactly the sets $X^{*} \setminus C$ with $C \subseteq X$ closed and compact, and $(X^{*} \setminus C) \cap X = X \setminus C$; so by [L5] the point $\infty$ lies in the closure of $X$ exactly when $X \setminus C \ne \varnothing$ for every such $C$. [L1, L5]

1.4 For the backward half of claim 4 assume $X$ is locally compact and Hausdorff, and let $u \ne v$ in $X^{*}$. If both lie in $X$, disjoint open subsets of $X$ separating them are open in $X^{*}$ by [L1]. If $v = \infty$ and $u = x \in X$, then [L7] applied to the neighbourhood $X$ of $x$ gives a compact neighbourhood $C$ of $x$, closed by [L6], and an open $U$ of $X$ with $x \in U \subseteq C$; then $U$ and $X^{*} \setminus C$ are disjoint members of $\mathcal{T}^{*}$ containing $x$ and $\infty$. [L1, L6, L7]

2.1 For the forward half of claim 4 assume $X^{*}$ is Hausdorff. Distinct points of $X$ are separated in $X^{*}$ by disjoint open $P, Q$, and $P \cap X$, $Q \cap X$ are disjoint sets open in $X$ by claim 2, so $X$ is Hausdorff. [L4, L6, step 1.1]

2.2 The traces $W \cap X$ for $W \in \mathcal{U}$ are open in $X$ by step 1.1, and they cover $C$, since $C \subseteq X$ and $\bigcup \mathcal{U} = X^{*}$; so [L3], applied with index set $\mathcal{U}$ and the family $W \mapsto W \cap X$, gives $n \in \mathbb{N}$ and $W_0, \dots, W_n \in \mathcal{U}$ with $C \subseteq (W_0 \cap X) \cup \dots \cup (W_n \cap X)$, or else $C = \varnothing$. [L3, step 1.1, step 1.2]

2.3 A closed compact $C \subseteq X$ equals $X$ exactly when $X$ is compact, since $X$ is closed in $X$ and, by [L2], $X$ is a compact subset of itself exactly when it is a compact space. So the condition of step 1.3 fails for some $C$ exactly when $X$ is compact. [L2, step 1.3]

3.1 For $x \in X$ the Hausdorff property of $X^{*}$ gives disjoint open $U \ni x$ and $O \ni \infty$; by [L1] $O = X^{*} \setminus C$ with $C$ closed in $X$ and compact, and $U \cap O = \varnothing$ forces $U \subseteq X^{*} \setminus O = C$. As $U$ is open in $X$ by step 1.1 and contains $x$, the compact set $C$ is a neighbourhood of $x$ in $X$ by [L4], so $X$ is locally compact. [L1, L4, L7, step 1.1, step 2.1]

3.2 Claim 1 follows: $X^{*} = O \cup W_0 \cup \dots \cup W_n$, since a point of $X^{*}$ is either $\infty$ or a point of $X$, a point of $X$ outside $C$ lies in $O = X^{*} \setminus C$, and a point of $C$ lies in some $W_j$ by step 2.2; in the alternative $C = \varnothing$ already $X^{*} = O$. So every open cover of $X^{*}$ has a finite subcover. [L2, step 1.2, step 2.2]

3.3 Claim 3 follows: $\overline{X} = X^{*}$ holds exactly when $\infty \in \overline{X}$, since $X \subseteq \overline{X}$ and $X^{*} = X \cup \{\infty\}$; by steps 1.3 and 2.3 that holds exactly when $X$ is not compact. [L5, step 1.3, step 2.3]

4.1 Claims 1, 2, 3 and 4 are established: claim 1 at step 3.2, claim 2 at step 1.1, claim 3 at step 3.3, and claim 4 by steps 1.4 for one direction and 2.1 and 3.1 for the other. [step 1.1, step 1.4, step 3.1, step 3.2, step 3.3] ∎

## Remarks

**Claim 3 is the reason the added point is called a point at infinity.** When $X$ is compact the set $\{\infty\}$ is itself open, so $X^{*}$ is the disjoint sum of $X$ and an isolated point and nothing has been compactified; the construction is of interest exactly when $X$ is not compact, and then every neighbourhood of $\infty$ contains all of $X$ outside a compact set.

**Claim 4 is where local compactness is forced.** Separating a point $x$ from $\infty$ means finding an open $U \ni x$ and a closed compact $C$ with $U \cap (X^{*} \setminus C) = \varnothing$, that is $U \subseteq C$; and that is precisely a compact neighbourhood of $x$. So the Hausdorff property of $X^{*}$ and local compactness of $X$ are the same requirement read on the two sides of the construction.

**$X$ open in $X^{*}$ is claim 2 and is not automatic for a compactification in general.** What claim 2 asserts is that no open set of $X$ is lost and none is gained: the topology $X$ inherits back from $X^{*}$ is the one it started with, so every statement about $X$ may be read inside $X^{*}$ without translation.
````

### `thm-t1-iff-singletons-are-closed`

````markdown
---
id: thm-t1-iff-singletons-are-closed
kind: theorem
title: "A space is $T_1$ if and only if every singleton is closed, if and only if every finite subset is closed, if and only if its topology contains the cofinite topology"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-t0-and-t1-spaces, def-topological-space, def-standard-topologies,
       def-neighbourhood-top, def-countable]
justified_by: []
aliases: []
landmark: true
short: "$T_1$ iff points are closed"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
  audited: 2026-07-29
sources:
  scraped: []
  references:
    - title: "T1 space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/T1_space"
    - title: "Cofiniteness (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cofiniteness"
    - title: "J. Munkres, Topology, 2nd ed., §17"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
    - title: "R. Gardner, Introduction to Topology, notes on Munkres Section 17: Closed Sets and Limit Points (East Tennessee State University)"
      url: "https://faculty.etsu.edu/gardnerr/5357/notes/Munkres-17.pdf"
pipeline_run: null
---

## Statement

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]) and let
$\mathcal{T}_{\mathrm{cof}}$ be the cofinite topology on the set $X$
([[def-standard-topologies]]). The following four conditions are equivalent.

- **(a)** $X$ is $T_1$ ([[def-t0-and-t1-spaces]]).
- **(b)** $\{x\}$ is closed for every $x \in X$.
- **(c)** $F$ is closed for every finite $F \subseteq X$ ([[def-countable]]).
- **(d)** $\mathcal{T}_{\mathrm{cof}} \subseteq \mathcal{T}$, that is, the
  topology of $X$ is finer than the cofinite topology on the same set.

Condition (d) says that the cofinite topology is the **coarsest** $T_1$ topology
on any set: it is $T_1$ by the equivalence, and every $T_1$ topology on that set
contains it.

## Facts & Assumptions

**Given:** A topological space $(X,\mathcal{T})$, the cofinite topology $\mathcal{T}_{\mathrm{cof}}$ on the same set $X$, points $x, y \in X$ and a finite subset $F \subseteq X$.

[A1] $X$ is $T_1$ when for all $x \ne y$ there are open $U, V$ with $x \in U$, $y \notin U$, $y \in V$ and $x \notin V$ ([[def-t0-and-t1-spaces]]).

[L1] A set is closed exactly when its complement is open; $\varnothing$ and $X$ are open and closed; and a union of two closed sets is closed by (C3), hence so is a union of finitely many by iterating (C3) ([[def-topological-space]]).

[L2] A set is open exactly when it is a neighbourhood of each of its points, that is, exactly when each of its points lies in an open subset of it ([[def-neighbourhood-top]], consequence 4).

[L3] The cofinite topology on $X$ consists of $\varnothing$ together with the sets whose complement in $X$ is finite; its closed sets are $X$ together with the finite subsets of $X$ ([[def-standard-topologies]]).

[L4] A finite set is one equinumerous with a natural number, so a finite $F$ may be listed as $F = \{x_0, \dots, x_{n-1}\}$ for some $n \in \mathbb{N}$, the case $n = 0$ being $F = \varnothing$ ([[def-countable]]).

## Proof

**Proof technique:** direct.

1.1 (a) implies (b): fix $x \in X$ and let $y \in X \setminus \{x\}$; then $y \ne x$, so [A1] supplies an open $V$ with $y \in V$ and $x \notin V$, whence $y \in V \subseteq X \setminus \{x\}$. [A1]

1.2 (b) implies (c): let $F \subseteq X$ be finite and list it as $F = \{x_0, \dots, x_{n-1}\}$ by [L4], so that $F = \{x_0\} \cup \dots \cup \{x_{n-1}\}$; for $n = 0$ this reads $F = \varnothing$, which is closed by [L1]. [L1, L4]

1.3 (c) implies (d): let $U \in \mathcal{T}_{\mathrm{cof}}$; if $U = \varnothing$ then $U \in \mathcal{T}$ by [L1], and otherwise $X \setminus U$ is finite by [L3], hence closed by (c), hence $U$ is open. [L1, L3]

1.4 (d) implies (a): let $x \ne y$ in $X$; the sets $X \setminus \{y\}$ and $X \setminus \{x\}$ have finite complements, so they lie in $\mathcal{T}_{\mathrm{cof}}$ by [L3] and hence in $\mathcal{T}$ by (d), and they witness the $T_1$ condition, since $x \in X \setminus \{y\}$, $y \notin X \setminus \{y\}$, $y \in X \setminus \{x\}$ and $x \notin X \setminus \{x\}$. [A1, L3]

2.1 By step 1.1 the set $X \setminus \{x\}$ is a neighbourhood of each of its points, hence open by [L2], so $\{x\}$ is closed by [L1]; this completes the implication (a) implies (b). [step 1.1, L1, L2]

2.2 By step 1.2 and (b) the set $F$ is a union of $n$ closed sets, hence closed by [L1]; this completes the implication (b) implies (c). [step 1.2, L1]

3.1 The four implications of steps 2.1, 2.2, 1.3 and 1.4 close the cycle (a) implies (b) implies (c) implies (d) implies (a), so the four conditions are equivalent. [step 1.3, step 1.4, step 2.1, step 2.2]

4.1 In particular $\mathcal{T}_{\mathrm{cof}}$ itself satisfies (d) with $\mathcal{T} = \mathcal{T}_{\mathrm{cof}}$, so the cofinite topology on any set is $T_1$ by step 3.1, and by (d) it is contained in every $T_1$ topology on that set; this is the final assertion of the statement. [step 3.1, L3] ∎

## Remarks

- **The theorem is the reason $T_1$ is quoted as "points are closed".** Every later use of $T_1$ on this page goes through clause (b): the $T_1$ hypothesis in $T_3$ and $T_4$ is used exactly to turn a point into a closed set so that regularity or normality applies to it.

- **Clause (c) is not a strengthening of clause (b).** It follows from it by a finite union, and the finite union is genuinely finite: an *arbitrary* union of closed sets need not be closed, and in the cofinite topology on an infinite set no infinite proper subset is closed at all, although every singleton is.

- **Clause (d) locates the cofinite topology.** It is the smallest $T_1$ topology on a given set, in the sense of [[def-topological-space]]'s comparison order, and this is why it is the standard witness for a $T_1$ space that fails every stronger separation axiom; the witness is worked on the companion page.
````

### `thm-urysohn-lemma`

````markdown
---
id: thm-urysohn-lemma
kind: theorem
title: "Urysohn's lemma, under the axiom of dependent choice: in a normal space two disjoint closed sets are separated by a continuous function into $[0,1]$, and conversely such a space is normal"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [lem-a-dyadic-scale-of-open-sets-defines-a-continuous-function,
       def-the-dyadic-rationals-of-the-unit-interval, def-normal-and-t4-spaces,
       lem-normality-via-shrinking, def-dependent-choice, lem-finite-choice,
       def-choice-function, def-continuous-map-top, thm-continuity-characterisations-top,
       def-interior-closure-boundary-top, def-interval, def-topological-space,
       def-subspace-topology-top, lem-real-line-is-a-metric-space]
justified_by: []
external_refs: [rem-urysohn-lemma-not-a-zf-theorem]
aliases: [thm-urysohn]
landmark: true
short: "Urysohn's lemma (DC)"
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
  references:
    - title: "Urysohn's lemma (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Urysohn%27s_lemma"
    - title: "J. Munkres, Topology, 2nd ed., §33"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
    - title: "S. Willard, General Topology, §15"
      url: "https://en.wikipedia.org/wiki/General_topology"
    - title: "J. P. May, An Outline Summary of Basic Point Set Topology, §6"
      url: "https://math.uchicago.edu/~may/FINITE/REUNotes2010/Topology10.pdf"
    - title: "Axiom of dependent choice (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_dependent_choice"
pipeline_run: null
---

## Statement

**Assume the Axiom of Dependent Choice** ([[def-dependent-choice]]). Let
$(X, \mathcal{T})$ be a topological space.

1. If $X$ is normal ([[def-normal-and-t4-spaces]]) and $A, B \subseteq X$ are
   disjoint closed sets, there is a continuous $f : X \to [0,1]$
   ([[def-continuous-map-top]], [[def-interval]]) with
   $A \subseteq f^{-1}(\{0\})$ and $B \subseteq f^{-1}(\{1\})$.
2. Conversely, if every pair of disjoint closed subsets of $X$ admits a
   continuous function into $[0,1]$ separating them in the sense of clause 1,
   then $X$ is normal. **This direction uses no choice principle.**

**Where the choice principle of clause 1 is spent, and why not less.** The
construction below builds, for each $n \in \mathbb{N}$, an assignment of an
open set to every dyadic rational of level $n$, extending the level-$(n-1)$
assignment; at each single level the finitely many new open sets are chosen at
once by [[lem-finite-choice]], a theorem of ZF, but stringing together
infinitely many such levels, each depending on the one before, is exactly the
situation dependent choice is for. The published
[[rem-urysohn-lemma-not-a-zf-theorem]] records, with its sources, that
$\mathrm{ZF}$ and even $\mathrm{ZF}$ together with the Axiom of Countable
Choice do not suffice, and that dependent choice does; nothing here claims
dependent choice is *necessary* for clause 1, only that the construction given
is carried out in $\mathrm{ZF} + \mathrm{DC}$.

## Facts & Assumptions

**Given:** A topological space $(X,\mathcal{T})$ and dependent choice.

[A1] $\mathrm{DC}$: for every nonempty set $P$, every relation $R \subseteq P \times P$ entire on $P$ (every $p \in P$ has some $q \in P$ with $p \mathbin{R} q$), and every $a \in P$, there is a sequence $(p_k)_{k \in \mathbb{N}}$ with $p_0 = a$ and $p_k \mathbin{R} p_{k+1}$ for every $k$ ([[def-dependent-choice]]).

[L1] Shrinking: if $X$ is normal, $C \subseteq X$ is closed and $O \subseteq X$ is open with $C \subseteq O$, then there is open $W$ with $C \subseteq W \subseteq \overline{W} \subseteq O$ ([[lem-normality-via-shrinking]]).

[L2] Finite choice: a function $F$ with domain a natural number $n$, all of whose values are nonempty sets, admits a choice function for the family $F[n]$ of its values ([[lem-finite-choice]], [[def-choice-function]]), a theorem of ZF.

[L3] The dyadic rationals $D = \bigcup_{n} D_n$ of $[0,1]$ are an increasing union of finite levels; for $n \in \mathbb{N}$, $D_{n+1} = D_n \cup \{\, t_j : 0 \le j < 2^n \,\}$, where $t_j$ is strictly between the $D_n$-consecutive pair $r_j := j/2^n$ and $s_j := (j+1)/2^n$, the $2^n$ points $t_j$ are pairwise distinct and disjoint from $D_n$, and every two elements of $D$ lie together in some common $D_n$ ([[def-the-dyadic-rationals-of-the-unit-interval]]).

[L4] Chaining: if $V_0, \dots, V_k$ ($k \ge 0$) are subsets of $X$ with $\overline{V_i} \subseteq V_{i+1}$ for every $i < k$, then $\overline{V_0} \subseteq V_k$, since $V_i \subseteq \overline{V_i} \subseteq V_{i+1}$ for each $i$ ([[def-interior-closure-boundary-top]]) makes $\overline{V_0} \subseteq V_1 \subseteq V_2 \subseteq \cdots \subseteq V_k$ a chain of inclusions.

[L5] The generic construction: if $(U_r)_{r \in D}$ is a family of open subsets of $X$ with $\overline{U_r} \subseteq U_s$ whenever $r<s$ in $D$ and $U_1 = X$, then $g(x) := \inf(\{r \in D : x \in U_r\} \cup \{1\})$ is a continuous map $X \to [0,1]$ ([[lem-a-dyadic-scale-of-open-sets-defines-a-continuous-function]]).

[L6] The order rays $(-\infty,\tfrac12)$ and $(\tfrac12,\infty)$ are open in the usual topology of $\mathbb R$ ([[lem-real-line-is-a-metric-space]], clause 3), so their traces $[0,\tfrac12)$ and $(\tfrac12,1]$ are open in the subspace topology of $[0,1]$ ([[def-subspace-topology-top]], [[def-interval]]). They are disjoint and contain $0$ and $1$, respectively.

[L7] Preimages of open sets under a continuous map are open ([[thm-continuity-characterisations-top]], clause (b), [[def-continuous-map-top]]).

[L8] $A \subseteq \overline{A}$ for every $A \subseteq X$ ([[def-interior-closure-boundary-top]]).

## Proof

**Proof technique:** constructive.

1.1 Assume $X$ is normal and $A, B \subseteq X$ are disjoint closed sets (the hypothesis of clause 1). [assume-hyp]

1.2 Assume instead that every pair of disjoint closed subsets of $X$ admits a continuous function into $[0,1]$ separating them as in clause 1 (the hypothesis of clause 2). [assume-hyp]

2.1 Under step 1.1: $A \subseteq X \setminus B$, since $A \cap B = \varnothing$, and $X \setminus B$ is open since $B$ is closed; by [L1] applied to the closed set $A$ and the open set $X \setminus B$, fix open $\Phi_0(0)$ with $A \subseteq \Phi_0(0) \subseteq \overline{\Phi_0(0)} \subseteq X \setminus B$, and put $\Phi_0(1) := X \setminus B$, defining $\Phi_0 : D_0 \to \mathcal{T}$ on $D_0 = \{0,1\}$. [step 1.1, L1, choose, construct]

2.2 Under step 1.2: let $C, E \subseteq X$ be disjoint closed sets; fix a continuous $h : X \to [0,1]$ with $C \subseteq h^{-1}(\{0\})$ and $E \subseteq h^{-1}(\{1\})$. [step 1.2, choose]

3.1 Under step 1.1: $A \subseteq \Phi_0(0)$; $\overline{\Phi_0(0)} \subseteq \Phi_0(1)$; and $\Phi_0(1) = X \setminus B$. [step 2.1]

3.2 Under step 1.2, continuing: by [L6], $[0,\tfrac12)$ and $(\tfrac12,1]$ are open in $[0,1]$, disjoint, with $0 \in [0,\tfrac12)$ and $1 \in (\tfrac12,1]$; put $O_1 := h^{-1}(\,[0,\tfrac12)\,)$ and $O_2 := h^{-1}(\,(\tfrac12,1]\,)$, open in $X$ by [L7]. [step 2.2, L6, L7]

4.1 Under step 1.1: for $n \in \mathbb{N}$, call $\Phi : D_n \to \mathcal{T}$ **admissible at level $n$** when (i) $\overline{\Phi(r)} \subseteq \Phi(s)$ for every $r < s$ in $D_n$; (ii) $A \subseteq \Phi(0)$; (iii) $\Phi(1) = X \setminus B$. Put $P := \{\, (n,\Phi) : n \in \mathbb{N},\ \Phi \text{ admissible at level } n \,\}$, and for $(n,\Phi), (n',\Phi') \in P$ say $(n,\Phi) \mathbin{R} (n',\Phi')$ when $n' = n+1$ and $\Phi'|_{D_n} = \Phi$. By step 3.1, $(0,\Phi_0) \in P$. [step 3.1, construct]

4.2 Under step 1.2: $C \subseteq O_1$, since $h \equiv 0 \in [0,\tfrac12)$ on $C$; $E \subseteq O_2$, since $h \equiv 1 \in (\tfrac12,1]$ on $E$; and $O_1 \cap O_2 = h^{-1}\big(\,[0,\tfrac12) \cap (\tfrac12,1]\,\big) = h^{-1}(\varnothing) = \varnothing$. [step 2.2, step 3.2, L6]

5.1 Under step 1.1: let $(n,\Phi) \in P$. For each $j$ with $0 \le j < 2^n$, with $r_j, s_j, t_j$ as in [L3]: since $r_j < s_j$ in $D_n$, admissibility (i) gives $\overline{\Phi(r_j)} \subseteq \Phi(s_j)$, so by [L1] the set of open $W$ with $\overline{\Phi(r_j)} \subseteq W \subseteq \overline{W} \subseteq \Phi(s_j)$ is nonempty. [step 4.1, L1, L3]

5.2 Under step 1.2: since $C, E$ were an arbitrary disjoint closed pair, step 4.2 exhibits disjoint open supersets for every such pair, so $X$ is normal by [[def-normal-and-t4-spaces]]; this is clause 2, and no step of it used [A1]. [step 4.2]

6.1 Under step 1.1, continuing under step 5.1: by [L2] applied to the function assigning, to each $j < 2^n$, the nonempty set of open $W$ with $\overline{\Phi(r_j)} \subseteq W \subseteq \overline{W} \subseteq \Phi(s_j)$, fix a simultaneous choice, giving open $W_j$ with $\overline{\Phi(r_j)} \subseteq W_j \subseteq \overline{W_j} \subseteq \Phi(s_j)$ for every $0 \le j < 2^n$. [step 5.1, L2, choose]

7.1 Under step 1.1: define $\Phi' : D_{n+1} \to \mathcal{T}$ by $\Phi'|_{D_n} := \Phi$ and $\Phi'(t_j) := W_j$ for $0 \le j < 2^n$; this is well defined since $D_{n+1} = D_n \cup \{t_j : 0 \le j < 2^n\}$ with the $t_j$ pairwise distinct and disjoint from $D_n$ by [L3]. Then $(n,\Phi) \mathbin{R} (n+1,\Phi')$. [step 6.1, L3, construct]

8.1 Under step 1.1, with $\Phi, \Phi'$ as in step 7.1: for the $D_{n+1}$-consecutive pair $(r_j, t_j)$: $\overline{\Phi'(r_j)} = \overline{\Phi(r_j)} \subseteq W_j = \Phi'(t_j)$ by step 6.1; for the pair $(t_j, s_j)$: $\overline{\Phi'(t_j)} = \overline{W_j} \subseteq \Phi(s_j) = \Phi'(s_j)$ by step 6.1. [step 7.1, step 6.1]

9.1 Under step 1.1: for $x < y$ in $D_{n+1}$, the finitely many elements of $D_{n+1} \cap [x,y]$, listed increasingly as $x = u_0 < u_1 < \cdots < u_k = y$, are $D_{n+1}$-consecutive at each step $u_i < u_{i+1}$, and each such pair is one of the pairs of step 8.1 (every $D_{n+1}$-consecutive pair has at least one member among the new points $t_j$, since a new point was inserted into every $D_n$-consecutive gap); so $\overline{\Phi'(u_i)} \subseteq \Phi'(u_{i+1})$ at each step, and [L4] gives $\overline{\Phi'(x)} = \overline{\Phi'(u_0)} \subseteq \Phi'(u_k) = \Phi'(y)$. [step 8.1, L3, L4]

10.1 Under step 1.1: $A \subseteq \Phi'(0) = \Phi(0)$, since $0 \in D_n$ is unaffected by the extension; $\Phi'(1) = \Phi(1) = X \setminus B$, since $1 \in D_n$ is likewise unaffected; with step 9.1 this is admissibility of $\Phi'$ at level $n+1$, so $(n+1,\Phi') \in P$. [step 7.1, step 9.1, L3]

11.1 Under step 1.1: by steps 5.1, 6.1, 7.1 and 10.1, every $(n,\Phi) \in P$ has some $(n+1,\Phi') \in P$ with $(n,\Phi) \mathbin{R} (n+1,\Phi')$; so $R$ is entire on $P$. [step 7.1, step 10.1]

12.1 Under step 1.1: $P$ is nonempty by step 4.1 and $R$ is entire on $P$ by step 11.1; by [A1] applied with $a := (0,\Phi_0)$, there is a sequence $\big((m_k,\Psi_k)\big)_{k \in \mathbb{N}}$ with $(m_0,\Psi_0) = (0,\Phi_0)$ and $(m_k,\Psi_k) \mathbin{R} (m_{k+1},\Psi_{k+1})$ for every $k$. [step 4.1, step 11.1, A1, construct]

13.1 Under step 1.1: since $(n,\Phi) \mathbin{R} (n',\Phi')$ forces $n' = n+1$, and $m_0 = 0$, induction on $k$ gives $m_k = k$ for every $k \in \mathbb{N}$; so each $\Psi_k : D_k \to \mathcal{T}$ is admissible at level $k$, and $\Psi_{k+1}|_{D_k} = \Psi_k$ for every $k$. [step 12.1]

14.1 Under step 1.1: for $r \in D$, fix $n$ with $r \in D_n$ [L3] and define $V_r := \Psi_n(r)$; by step 13.1, for $n \le n'$ with $r \in D_n$, $\Psi_{n'}(r) = \Psi_n(r)$ (chaining $\Psi_{n'}|_{D_n} = \Psi_n$ through the intermediate levels), so $V_r$ does not depend on the level $n$ chosen. [step 13.1, L3, construct]

15.1 Under step 1.1: for $r < s$ in $D$, fix $n$ with $r, s \in D_n$ [L3]; then $\overline{V_r} = \overline{\Psi_n(r)} \subseteq \Psi_n(s) = V_s$ by admissibility (i) of $\Psi_n$. Also $A \subseteq V_0$ and $V_1 = X \setminus B$, by admissibility (ii) and (iii) of $\Psi_n$ for any $n$. [step 14.1, step 13.1, L3]

16.1 Under step 1.1: define $U_r := V_r$ for $r \in D$ with $r < 1$, and $U_1 := X$. For $r < s$ in $D$: if $s < 1$, $\overline{U_r} = \overline{V_r} \subseteq V_s = U_s$ by step 15.1; if $s = 1$, $\overline{U_r} = \overline{V_r} \subseteq V_1 = X \setminus B \subseteq X = U_1$ by step 15.1. So $\overline{U_r} \subseteq U_s$ whenever $r < s$ in $D$, and $U_1 = X$. [step 15.1, construct]

17.1 Under step 1.1: by [L5] applied to $(U_r)_{r \in D}$ of step 16.1, $f(x) := \inf(\{r \in D : x \in U_r\} \cup \{1\})$ is a continuous map $X \to [0,1]$. [step 16.1, L5]

17.2 Under step 1.1: for $b \in B$ and $r \in D$ with $r < 1$: fix $n$ with $r \in D_n$ [L3]; since $1 \in D_n$ also, admissibility (i) of $\Psi_n$ applied to $r < 1$ gives $\overline{\Psi_n(r)} \subseteq \Psi_n(1) = X \setminus B$, that is $\overline{V_r} \subseteq X \setminus B$; since $V_r \subseteq \overline{V_r}$ by [L8] and $U_r = V_r$ by step 16.1, $U_r \cap B = \varnothing$, so $b \notin U_r$. [step 14.1, step 13.1, step 16.1, L3, L8]

18.1 Under step 1.1: for $a \in A$: $a \in V_0$ by step 15.1, and $U_0 = V_0$ by step 16.1 (as $0 < 1$), so $a \in U_0$ and $0 \in \{r \in D : a \in U_r\}$; hence $f(a) \le 0$, and $f(a) \ge 0$ since $f$ maps into $[0,1]$ by step 17.1, so $f(a) = 0$. [step 17.1, step 16.1, step 15.1]

18.2 Under step 1.1: for $b \in B$: by step 17.2, $b \notin U_r$ for every $r \in D$ with $r < 1$, and $b \in U_1 = X$ by step 16.1; so $\{r \in D : b \in U_r\} \cup \{1\} = \{1\}$, giving $f(b) = \inf\{1\} = 1$. [step 17.2, step 16.1]

19.1 Steps 17.1, 18.1 and 18.2 show that, under the hypothesis of step 1.1, $f$ is a continuous map $X \to [0,1]$ with $A \subseteq f^{-1}(\{0\})$ and $B \subseteq f^{-1}(\{1\})$, which is clause 1. [step 17.1, step 18.1, step 18.2]

20.1 Steps 19.1 and 5.2 establish clauses 1 and 2 respectively. [step 19.1, step 5.2, discharge-construct] ∎

## Remarks

- **The lemma is stated for a normal space, not a $T_4$ space.** $T_1$ is used nowhere above; it is needed only to turn a *point* into a closed set, which is the extra step the next corollary spends. The published [[rem-urysohn-lemma-not-a-zf-theorem]] states the classical $T_4$ form; the form proved here is the more general one, and the two are not in tension — the $T_4$ form follows by adding the $T_1$ hypothesis, which is not used in this proof at all.

- **Only clause 1 costs a choice principle**, and it is spent at exactly one place: the single application of dependent choice in step 12.1, which strings together the countably many admissible levels built one finite step at a time in steps 5.1–10.1. Every other existential instantiation above (steps 2.1, 2.2 and 6.1) draws from a single nonempty set or, in step 6.1, from a finite family of them via [[lem-finite-choice]], and neither costs anything beyond ZF.

- **Why the construction tracks $X \setminus B$ rather than $X$ at $r=1$.** Recording $\Phi_n(1) := X \setminus B$ throughout the recursion, rather than $X$, is what makes admissibility clause (i) alone carry the whole $B$-avoidance property: since $1 \in D_n$ for every $n$, clause (i) applied to any $r<1$ already gives $\overline{\Phi_n(r)} \subseteq \Phi_n(1) = X \setminus B$, with no separate bookkeeping. Only at the very end, in step 16.1, is the top value widened from $X \setminus B$ to $X$, which is exactly what [[lem-a-dyadic-scale-of-open-sets-defines-a-continuous-function]] requires.
````

