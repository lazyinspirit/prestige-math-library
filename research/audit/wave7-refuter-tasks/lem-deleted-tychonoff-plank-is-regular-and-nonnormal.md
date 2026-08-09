## Selection reasons

- critical risk (8): 11 declared dependencies; 12 cited facts; 7 numbered proof steps; boundary-sensitive language

## Target item — `lem-deleted-tychonoff-plank-is-regular-and-nonnormal`

Normalized current SHA-256: `2e7ab21f9a217cf1bb32e0a37664481a7d1e79d40c4b86feceebb99d86a05ca7`

The complete current item follows, including frontmatter:

````markdown
---
id: lem-deleted-tychonoff-plank-is-regular-and-nonnormal
kind: lemma
title: "Assuming countable choice, the deleted Tychonoff plank is a regular nonnormal open subspace of a compact Hausdorff normal space"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-order-topology-on-an-ordinal, lem-ordinal-order-topology-is-t3, thm-positive-heredity-of-separation-axioms, thm-positive-productivity-of-separation-axioms, thm-finite-products-of-compact-spaces, thm-a-compact-hausdorff-space-is-regular-and-normal, thm-countable-subsets-of-omega-one-are-bounded, thm-ordinal-spaces-and-compactness, def-ordinal-addition, def-normal-and-t4-spaces, def-countable-choice]
aliases: []
landmark: true
proof_strategy: contradiction
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-31
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "L. A. Steen and J. A. Seebach, Counterexamples in Topology, deleted Tychonoff plank"
      url: "https://web.math.ucsb.edu/~bigelow/books/counterexamples.pdf"
    - title: "Tychonoff plank (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Tychonoff_plank"
pipeline_run: null
---

## Statement

Assume the Axiom of Countable Choice. Let $P=(\omega_1+1)\times(\omega+1)$ with the product of its ordinal order topologies, let $p=(\omega_1,\omega)$, and let $T=P\setminus\{p\}$. Then $P$ is compact, Hausdorff, and normal, while $T$ is an open regular subspace that is not normal.

## Facts & Assumptions

**Given:** The Axiom of Countable Choice and the ordinal product $P$ above.

[A1] The Axiom of Countable Choice, under which every at most countable subset of $\omega_1$ is bounded below $\omega_1$ ([[def-countable-choice]], [[thm-countable-subsets-of-omega-one-are-bounded]]).

[L1] Ordinal spaces have clopen bases and are $T_3$; every successor ordinal is compact ([[lem-ordinal-order-topology-is-t3]], [[thm-ordinal-spaces-and-compactness]], [[def-ordinal-addition]]).

[L2] Finite products of compact spaces are compact, compact Hausdorff spaces are normal, and the positive preservation theorems preserve regularity, Hausdorffness, and regularity under subspaces ([[thm-finite-products-of-compact-spaces]], [[thm-a-compact-hausdorff-space-is-regular-and-normal]], [[thm-positive-productivity-of-separation-axioms]], [[thm-positive-heredity-of-separation-axioms]]).

[F1] Normality separates disjoint closed subsets by disjoint open sets ([[def-normal-and-t4-spaces]]).

[F2] The ordinal order-topology basis gives neighbourhoods $(\alpha,\omega_1]$ of $\omega_1$, singleton neighbourhoods $\{n\}$ of $n<\omega$, and neighbourhoods $(m,\omega]$ of $\omega$ ([[def-order-topology-on-an-ordinal]], [[lem-ordinal-order-topology-is-t3]]).

## Proof

**Proof technique:** contradiction.

1.1 The factors $\omega_1+1$ and $\omega+1$ are compact and $T_3$ by [L1], so [L2] makes $P$ compact, Hausdorff, regular, and normal. [L1, L2]

1.2 Since $P$ is $T_1$, $\{p\}$ is closed; hence $T$ is open. Its regularity follows from the hereditary regularity conclusion in [L2]. [L2]

1.3 Put $E=\{\omega_1\}\times\omega$ and $F=\omega_1\times\{\omega\}$, regarded as subsets of $T$. The clopen ordinal basis shows that they are disjoint closed subsets of $T$. [F2]

2.1 Suppose, for a contradiction, that $T$ is normal. Choose disjoint open $U,V\subseteq T$ with $E\subseteq U$ and $F\subseteq V$. [F1, step 1.3, assume-contra]

3.1 For $n<\omega$, let $C_n=\{\xi<\omega_1:(\xi,\omega_1]\times\{n\}\subseteq U\}$. By [F2] each $C_n$ is nonempty; [A1] chooses $\alpha_n\in C_n$ simultaneously. The countable set $\{\alpha_n:n<\omega\}$ is bounded by some $\alpha<\omega_1$. [A1, F2, step 2.1]

3.2 Put $\beta=\alpha+1<\omega_1$. Since $(\beta,\omega)\in V$, [F2] gives $\gamma<\beta$ and $m<\omega$ with $(\gamma,\beta]\times(m,\omega]\subseteq V$. [F2, step 2.1]

4.1 The point $(\beta,m+1)$ lies in $V$ by step 3.2 and in $U$ by step 3.1, because $\beta>\alpha\ge\alpha_{m+1}$. This contradicts $U\cap V=\varnothing$, so $T$ is not normal; together with steps 1.1 and 1.2 this proves all the stated properties. [step 1.1, step 1.2, step 3.1, step 3.2, discharge-contradiction] ∎
````

## Wave 7 provenance row for the target

```json
{
  "id": "lem-deleted-tychonoff-plank-is-regular-and-nonnormal",
  "statement": "ai-altered",
  "proof": "ai-altered",
  "evidence": "semantic-source",
  "urls": [
    "https://en.wikipedia.org/wiki/Tychonoff_plank"
  ],
  "rationale": "The source gives the deleted Tychonoff plank as a nonnormal subspace of the compact Hausdorff plank; the library adds the regular/open profile and explicit countable-choice accounting.",
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
      "source": "def-countable-choice",
      "source_section": "Definition",
      "quote": "The **Axiom of Countable Choice**, written $\\mathrm{AC}_\\omega$, is the following\nstatement.\n\n> For every family $(X_n)_{n \\in \\mathbb{N}}$ of nonempty sets indexed by\n> $\\mathbb{N}$ there is a function $f$ with domain $\\mathbb{N}$ such that\n> $f(n) \\in X_n$ for every $n \\in \\mathbb{N}$.\n\nEquivalently, in the vocabulary of [[def-choice-function]]: every at most\ncountable family of nonempty sets ([[def-countable]]) has a choice function.",
      "uses": [
        "3.1"
      ]
    },
    {
      "fact": "A1",
      "source": "thm-countable-subsets-of-omega-one-are-bounded",
      "source_section": "Statement",
      "quote": "**Assume the Axiom of Countable Choice $\\mathrm{AC}_\\omega$**\n([[def-countable-choice]]). Let $\\omega_1$ be the first uncountable ordinal\n([[def-first-uncountable-ordinal]]). Then:\n\n**(a) Boundedness.** Every at most countable ([[def-countable]]) subset\n$A \\subseteq \\omega_1$ is bounded below $\\omega_1$: the ordinal\n$\\sup A = \\bigcup A$ lies in $\\omega_1$ and satisfies $\\alpha \\le \\sup A$ for\nevery $\\alpha \\in A$.\n\n**(b) No small cofinal set.** No at most countable subset of $\\omega_1$ is\ncofinal in $\\omega_1$ ([[def-cofinal-subset-of-an-ordinal]]).\n\n**(c) Suprema stay countable.** If $A$ is an at most countable set of at most\ncountable ordinals, then $\\sup A = \\bigcup A$ is an at most countable ordinal.\n\n**The hypothesis is not decoration.** $\\mathrm{AC}_\\omega$ is spent at exactly\none step, step 1.2 below, and it is spent there only through\n[[thm-countable-union-of-countable]], whose own statement carries the same\nhypothesis. Everything else on this page, including the existence of $\\omega_1$\nand all of [[thm-omega-one-is-the-least-uncountable-ordinal]], is a theorem of\nZF. The ledger is the choice-ledger remark at the end of this page.",
      "uses": [
        "3.1"
      ]
    },
    {
      "fact": "L1",
      "source": "lem-ordinal-order-topology-is-t3",
      "source_section": "Statement",
      "quote": "Let $\\gamma$ be an ordinal ([[def-ordinal]]) with its order topology\n([[def-order-topology-on-an-ordinal]]), whose basis is\n$\\mathcal{B}_\\gamma$. Then:\n\n1. Every member of $\\mathcal{B}_\\gamma$ is **clopen** in $\\gamma$\n   ([[def-topological-space]]), so $\\gamma$ has a basis of clopen sets.\n2. $\\gamma$ is $T_1$ ([[def-t0-and-t1-spaces]]).\n3. $\\gamma$ is Hausdorff ([[def-hausdorff-space]]).\n4. $\\gamma$ is regular ([[def-regular-and-t3-spaces]]), and therefore $T_3$.",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L1",
      "source": "thm-ordinal-spaces-and-compactness",
      "source_section": "Statement",
      "quote": "Every ordinal carries the order topology of the membership order on it\n([[def-ordinal]], [[def-order-topology-on-a-linearly-ordered-set]]), with the\nclopen basis $\\mathcal{B}_\\gamma$ of\n[[lem-the-order-topology-on-an-ordinal]]. Then:\n\n1. **Successors are compact.** For every ordinal $\\delta$ the successor ordinal\n   $\\delta^{+}$ is compact ([[def-compact-space]]).\n2. **Limits are not.** No limit ordinal ([[def-limit-ordinal]]) is compact.\n3. **Assuming the Axiom of Countable Choice** ([[def-countable-choice]]): the\n   first uncountable ordinal $\\omega_1$ ([[def-first-uncountable-ordinal]]) is\n   sequentially compact and countably compact ([[def-compactness-variants]]),\n   and it is not compact; while $\\omega_1 + 1$ is compact\n   ([[def-ordinal-addition]]).\n\nClaims 1 and 2 are theorems of ZF. Claim 3 spends countable choice twice, both\ntimes through cited results that carry the hypothesis in their own statements:\n[[thm-countable-subsets-of-omega-one-are-bounded]], which supplies the\nboundedness of at most countable subsets of $\\omega_1$, and claim 2 of\n[[thm-compactness-variants-hierarchy]], which converts sequential compactness\ninto countable compactness; the extraction of a subsequence below selects\nnothing, taking least elements throughout.",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L1",
      "source": "def-ordinal-addition",
      "source_section": "Definition",
      "quote": "Let $\\alpha$ and $\\beta$ be ordinals ([[def-ordinal]]). The **sum**\n$\\alpha + \\beta$ is defined by recursion on $\\beta$, in the three cases of\n[[def-limit-ordinal]]:\n\n$$\\alpha + 0 = \\alpha, \\qquad \\alpha + \\beta^{+} = (\\alpha + \\beta)^{+}, \\qquad \\alpha + \\lambda = \\bigcup\\{\\, \\alpha + \\beta : \\beta \\in \\lambda \\,\\} \\quad (\\lambda \\text{ a limit ordinal}).$$\n\nThat exactly one operation satisfies these three clauses, and that all its\nvalues are ordinals, is [[cor-ordinal-addition-well-defined]], proved\nimmediately above. The union in the limit clause is the least upper bound of the\nvalues already produced (claim (e) of [[lem-ordinal-basics]]), so it may be\nwritten $\\sup$ and the clause read as \"at a limit, take the supremum\".\n\n**Notation.** We write $1 = 0^{+}$, $2 = 1^{+}$, and so on for the finite\nordinals, and $\\sup$ for $\\bigcup$ applied to a set of ordinals. The successor\noperation is now a special case of addition:\n\n$$\\alpha + 1 = \\alpha + 0^{+} = (\\alpha + 0)^{+} = \\alpha^{+},$$\n\nso from here on $\\alpha + 1$ and $\\alpha^{+}$ denote the same ordinal, and both\nnotations are used, whichever reads better.",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L2",
      "source": "thm-finite-products-of-compact-spaces",
      "source_section": "Statement",
      "quote": "For every $n \\in \\mathbb{N}$ ([[def-natural-numbers]]) and every family\n$(X_k)_{k < n}$ of compact topological spaces ([[def-compact-space]],\n[[def-topological-space]]), the product\n\n$$\\prod_{k < n} X_k$$\n\nwith the product topology ([[def-product-topology]]) is compact. In particular a\nbinary product $X \\times Y$ of compact spaces is compact, and the empty product,\na one-point space, is compact.\n\n**No choice principle is used beyond [[lem-finite-choice]]**, which is a theorem\nof ZF. That is what separates the finite case from the arbitrary one, where the\nAxiom of Choice is genuinely spent.",
      "uses": [
        "1.1",
        "1.2"
      ]
    },
    {
      "fact": "L2",
      "source": "thm-a-compact-hausdorff-space-is-regular-and-normal",
      "source_section": "Statement",
      "quote": "Let $X$ be a compact ([[def-compact-space]]) Hausdorff\n([[def-hausdorff-space]]) topological space. Then:\n\n1. $X$ is **regular** ([[def-regular-and-t3-spaces]]);\n2. $X$ is **normal** ([[def-normal-and-t4-spaces]]);\n3. $X$ is $T_1$ ([[def-t0-and-t1-spaces]]), and hence $X$ is $T_3$ and $T_4$.\n\nFollowing [[def-regular-and-t3-spaces]] and [[def-normal-and-t4-spaces]],\n*regular* and *normal* name the separation conditions alone and the numerals\n$T_3$ and $T_4$ name their conjunctions with $T_1$; claim 3 is what supplies the\n$T_1$ half, and it is stated separately for that reason.\n\n**Nothing stronger is claimed.** In particular it is not asserted here that a\ncompact Hausdorff space is completely regular\n([[def-regular-and-t3-spaces]] distinguishes the two conditions), and no\ncontinuous real-valued function is produced anywhere below.",
      "uses": [
        "1.1",
        "1.2"
      ]
    },
    {
      "fact": "L2",
      "source": "thm-positive-productivity-of-separation-axioms",
      "source_section": "Statement",
      "quote": "Each of $T_0$, $T_1$, Hausdorffness ($T_2$), regularity, $T_3$, complete regularity, and Tychonoffness is productive.",
      "uses": [
        "1.1",
        "1.2"
      ]
    },
    {
      "fact": "L2",
      "source": "thm-positive-heredity-of-separation-axioms",
      "source_section": "Statement",
      "quote": "Each of $T_0$, $T_1$, Hausdorffness ($T_2$), regularity, $T_3$, complete regularity, and Tychonoffness is hereditary.",
      "uses": [
        "1.1",
        "1.2"
      ]
    },
    {
      "fact": "F1",
      "source": "def-normal-and-t4-spaces",
      "source_section": "Definition",
      "quote": "Let $(X, \\mathcal{T})$ be a topological space ([[def-topological-space]]).\n\n- $X$ is **normal** when any two disjoint closed sets can be separated by\n  disjoint open sets: for all closed $A, B \\subseteq X$ with\n  $A \\cap B = \\varnothing$ there are $U, V \\in \\mathcal{T}$ with\n  $$A \\subseteq U, \\qquad B \\subseteq V, \\qquad U \\cap V = \\varnothing .$$\n- $X$ is **$T_4$** when it is normal **and** $T_1$ ([[def-t0-and-t1-spaces]]).\n\nEither of $A$, $B$ may be empty, and those cases are met by $U = \\varnothing$ or\n$V = \\varnothing$ together with $X$; so the condition hides no nonemptiness\nhypothesis. As with regularity, \"disjoint open sets\" may equivalently be read as\n\"disjoint open neighbourhoods of the two sets\" ([[def-neighbourhood-top]]).\n\n**Normality is the special case of complete normality at a disjoint closed\npair.** Disjoint closed sets are separated in the sense of\n[[def-separated-sets]], since the closure of a closed set is itself; so a space\nin which every *separated* pair can be put into disjoint open sets is in\nparticular normal. That stronger condition is defined later on this page, and the\nimplication is proved there.\n\n**The convention fork, and this library's side of it.** Exactly as for\nregularity, textbooks disagree about whether *normal* carries a $T_1$ hypothesis.\nMunkres builds it in; Kelley, Willard and Engelking do not. **This library takes\nthe second side**: *normal* names the separation condition alone, $T_4$ names\nnormal plus $T_1$, and the $T_1$ hypothesis is written out wherever it is used.\nThe reason is again that the two halves are independent, and here the point is\nsharp: **normality without $T_1$ implies nothing at all** in the hierarchy. The\nindiscrete topology on a two-point set ([[def-standard-topologies]]) is normal,\nits only closed sets being $\\varnothing$ and the whole space, and it is not even\n$T_0$; Sierpinski space is normal, $T_0$ and not regular. Both are recorded on\nthis page, the first as a false statement and both on the companion page.",
      "uses": [
        "2.1"
      ]
    },
    {
      "fact": "F2",
      "source": "def-order-topology-on-an-ordinal",
      "source_section": "Definition",
      "quote": "Let $\\gamma$ be an ordinal ([[def-ordinal]]). Since $\\gamma$ is the set of\nordinals below it and $\\xi < \\eta$ means $\\xi \\in \\eta$, the following two\nfamilies of subsets of $\\gamma$ are defined for $\\beta \\in \\gamma$ and\n$\\alpha \\in \\gamma$:\n\n$$[0,\\beta] \\;:=\\; \\{\\, \\xi \\in \\gamma : \\xi \\le \\beta \\,\\} \\;=\\; \\beta^{+}, \\qquad (\\alpha,\\beta] \\;:=\\; \\{\\, \\xi \\in \\gamma : \\alpha < \\xi \\le \\beta \\,\\} \\;=\\; \\beta^{+} \\setminus \\alpha^{+} .$$\n\nBoth identifications are immediate: $\\beta^{+} = \\beta \\cup \\{\\beta\\}$ is the set\nof ordinals $\\le \\beta$, and it is a subset of $\\gamma$ because $\\gamma$ is\ntransitive and $\\beta \\in \\gamma$ ([[def-ordinal]], [[lem-ordinal-basics]]).\n\nPut\n\n$$\\mathcal{B}_\\gamma \\;:=\\; \\{\\, [0,\\beta] : \\beta \\in \\gamma \\,\\} \\;\\cup\\; \\{\\, (\\alpha,\\beta] : \\alpha, \\beta \\in \\gamma,\\ \\alpha < \\beta \\,\\} .$$\n\n**$\\mathcal{B}_\\gamma$ is a basis for a unique topology on $\\gamma$**\n([[thm-basis-criterion]], [[def-topology-basis-subbasis]]), and that topology is\nthe **order topology on $\\gamma$**. The obligation is discharged here.\n\n*(B1), covering.* If $\\xi \\in \\gamma$ then $\\xi \\in [0,\\xi] \\in \\mathcal{B}_\\gamma$,\nso $\\bigcup \\mathcal{B}_\\gamma = \\gamma$. For $\\gamma = 0 = \\varnothing$ the\nfamily is empty and $\\bigcup \\varnothing = \\varnothing = \\gamma$, so (B1) holds\nthere too.\n\n*(B2), intersections.* By trichotomy of the ordinals ([[lem-ordinal-trichotomy]])\nany two ordinals have a maximum and a minimum, namely the larger and the smaller\nof the two, and for $\\alpha_1, \\alpha_2, \\beta_1, \\beta_2 \\in \\gamma$:\n\n- $[0,\\beta_1] \\cap [0,\\beta_2] = [0, \\min\\{\\beta_1,\\beta_2\\}]$;\n- $[0,\\beta_1] \\cap (\\alpha_2,\\beta_2] = (\\alpha_2, \\min\\{\\beta_1,\\beta_2\\}]$ when\n  $\\alpha_2 < \\min\\{\\beta_1,\\beta_2\\}$, and $\\varnothing$ otherwise;\n- $(\\alpha_1,\\beta_1] \\cap (\\alpha_2,\\beta_2] = (\\max\\{\\alpha_1,\\alpha_2\\},\\ \\min\\{\\beta_1,\\beta_2\\}]$\n  when $\\max\\{\\alpha_1,\\alpha_2\\} < \\min\\{\\beta_1,\\beta_2\\}$, and $\\varnothing$\n  otherwise.\n\nIn each case the intersection is either a member of $\\mathcal{B}_\\gamma$ or\nempty, and in the empty case (B2) is vacuous, having no point to test. So (B2)\nholds, and [[thm-basis-criterion]] supplies the topology and its uniqueness.\n\n**This definition is for ordinals only, and it says so.** The general order\ntopology of a linearly ordered set takes the open intervals, together with the\ninitial and final rays, as a basis. For an ordinal that family is the wrong one:\na successor $\\beta^{+}$ has an immediate predecessor, so the smallest open\ninterval around it is already $\\{\\beta^{+}\\}$, but no *interval* of the form\n$(\\alpha,\\eta)$ isolates $0$, and the initial segments must be supplied\nseparately. The family $\\mathcal{B}_\\gamma$ above is exactly the general order\nbasis for an ordinal, rewritten so that no case analysis is needed; nothing here\nclaims to define the order topology of an arbitrary linearly ordered set, and no\nstatement on this page is about such a set.\n\n**Isolated and non-isolated points.** Every ordinal is $0$, a successor, or a\nlimit ([[def-limit-ordinal]]). If $\\xi = 0$ then $\\{\\xi\\} = [0,0]$ is basic open;\nif $\\xi = \\alpha^{+}$ then $\\{\\xi\\} = (\\alpha, \\xi]$ is basic open; so every\nnon-limit point of $\\gamma$ is isolated. If $\\xi$ is a limit ordinal then every\nbasic set containing $\\xi$ contains some $(\\alpha,\\xi]$ with $\\alpha < \\xi$, and\n$\\alpha^{+} < \\xi$ because $\\xi$ is a limit, so $\\alpha^{+}$ is a second point of\nthat basic set; hence a limit point of $\\gamma$ is not isolated. In particular\n$\\omega$, the least limit ordinal ([[lem-omega-least-limit-ordinal]]), is the\nunique non-isolated point of $\\omega + 1$, and every ordinal $\\gamma \\le \\omega$\ncarries the discrete topology ([[def-standard-topologies]]).",
      "uses": [
        "1.3",
        "3.1",
        "3.2"
      ]
    },
    {
      "fact": "F2",
      "source": "lem-ordinal-order-topology-is-t3",
      "source_section": "Statement",
      "quote": "Let $\\gamma$ be an ordinal ([[def-ordinal]]) with its order topology\n([[def-order-topology-on-an-ordinal]]), whose basis is\n$\\mathcal{B}_\\gamma$. Then:\n\n1. Every member of $\\mathcal{B}_\\gamma$ is **clopen** in $\\gamma$\n   ([[def-topological-space]]), so $\\gamma$ has a basis of clopen sets.\n2. $\\gamma$ is $T_1$ ([[def-t0-and-t1-spaces]]).\n3. $\\gamma$ is Hausdorff ([[def-hausdorff-space]]).\n4. $\\gamma$ is regular ([[def-regular-and-t3-spaces]]), and therefore $T_3$.",
      "uses": [
        "1.3",
        "3.1",
        "3.2"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1.1",
      "claim": "The factors $\\omega_1+1$ and $\\omega+1$ are compact and $T_3$ by [L1], so [L2] makes $P$ compact, Hausdorff, regular, and normal. [L1, L2]",
      "step": "1.1",
      "inputs": [
        "L1",
        "L2"
      ]
    },
    {
      "id": "step-1.2",
      "claim": "Since $P$ is $T_1$, $\\{p\\}$ is closed; hence $T$ is open. Its regularity follows from the hereditary regularity conclusion in [L2]. [L2]",
      "step": "1.2",
      "inputs": [
        "L2"
      ]
    },
    {
      "id": "step-1.3",
      "claim": "Put $E=\\{\\omega_1\\}\\times\\omega$ and $F=\\omega_1\\times\\{\\omega\\}$, regarded as subsets of $T$. The clopen ordinal basis shows that they are disjoint closed subsets of $T$. [F2]",
      "step": "1.3",
      "inputs": [
        "F2"
      ]
    },
    {
      "id": "step-2.1",
      "claim": "Suppose, for a contradiction, that $T$ is normal. Choose disjoint open $U,V\\subseteq T$ with $E\\subseteq U$ and $F\\subseteq V$. [F1, step 1.3, assume-contra]",
      "step": "2.1",
      "inputs": [
        "F1",
        "step 1.3",
        "assume-contra",
        "1.3"
      ]
    },
    {
      "id": "step-3.1",
      "claim": "For $n<\\omega$, let $C_n=\\{\\xi<\\omega_1:(\\xi,\\omega_1]\\times\\{n\\}\\subseteq U\\}$. By [F2] each $C_n$ is nonempty; [A1] chooses $\\alpha_n\\in C_n$ simultaneously. The countable set $\\{\\alpha_n:n<\\omega\\}$ is bounded by some $\\alpha<\\omega_1$. [A1, F2, step 2.1]",
      "step": "3.1",
      "inputs": [
        "A1",
        "F2",
        "step 2.1",
        "2.1"
      ]
    },
    {
      "id": "step-3.2",
      "claim": "Put $\\beta=\\alpha+1<\\omega_1$. Since $(\\beta,\\omega)\\in V$, [F2] gives $\\gamma<\\beta$ and $m<\\omega$ with $(\\gamma,\\beta]\\times(m,\\omega]\\subseteq V$. [F2, step 2.1]",
      "step": "3.2",
      "inputs": [
        "F2",
        "step 2.1",
        "2.1"
      ]
    },
    {
      "id": "step-4.1",
      "claim": "The point $(\\beta,m+1)$ lies in $V$ by step 3.2 and in $U$ by step 3.1, because $\\beta>\\alpha\\ge\\alpha_{m+1}$. This contradicts $U\\cap V=\\varnothing$, so $T$ is not normal; together with steps 1.1 and 1.2 this proves all the stated properties. [step 1.1, step 1.2, step 3.1, step 3.2, discharge-contradiction] ∎",
      "step": "4.1",
      "inputs": [
        "step 1.1",
        "step 1.2",
        "step 3.1",
        "step 3.2",
        "discharge-contradiction",
        "3.2",
        "3.1",
        "1.1",
        "1.2"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "checked",
      "evidence": "statement and step 3.1: empty-set or empty-family case was inspected and introduces no illicit witness"
    },
    {
      "case": "zero",
      "status": "not_applicable",
      "reason": "The statement has no distinguished zero or base-value case parameter or case."
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
      "status": "not_applicable",
      "reason": "The statement has no distinguished endpoint and codomain-boundary behavior parameter or case."
    },
    {
      "case": "nonempty-choice",
      "status": "checked",
      "evidence": "statement and step 2.1: nonempty-choice obligations were checked against the stated hypothesis or explicit construction"
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
    "notes": "critical risk (8): 11 declared dependencies; 12 cited facts; 7 numbered proof steps; boundary-sensitive language, routed by risk-report.mjs. The read-only DeepSeek V4 Pro audit-refuter received the complete target and every cited dependency and returned CLEAN. Boundary evidence: The non‑normality argument depends on the existence of basic open rectangles of the form \\((\\xi,\\omega_1]\\times\\{n\\}\\) and \\((\\gamma,\\beta]\\times(m,\\omega]\\); the definition of the order topology on an ordinal provides these, and every such rectangle is an open subset of \\(T\\). The countably many sets \\(C_n\\) are nonempty because each \\(( \\omega_1,n)\\in U\\) and \\(U\\) is open in the subspace \\(T\\). The countable family \\(\\{\\alpha_n\\}\\) is chosen by \\(\\mathrm{AC}_\\omega\\), and the theorem on boundedness of countable subsets of \\(\\omega_1\\) (also under \\(\\mathrm{AC}_\\omega\\)) yields \\(\\sup\\alpha_n<\\omega_1\\). The successor step \\(\\beta=\\alpha+1<\\omega_1\\) uses that \\(\\omega_1\\) is a limit ordinal. The point \\((\\beta,m+1)\\) lies in the displayed rectangles for \\(U\\) and \\(V\\), producing a genuine intersection. No degenerate or empty‑set cases weaken the reasoning, and the required non‑emptiness conditions are explicitly satisfied. Checked surface: The title (“Assuming countable choice…”) and the full public claim were read. Every numbered proof step (1.1 – 4.1) was examined, and the logical flow from premises to contradiction was verified. No Remarks section is present; the proof ends at the tombstone. Alpha adjudicated the return against the current item and cited dependencies on disk and found no fatal mathematical or dependency-citation defect. Evidence: research/audit/wave7-preserved-refuters/lem-deleted-tychonoff-plank-is-regular-and-nonnormal--aa598328541710b0.result.json."
  }
}
```

## Generated audit-manifest relationships for the target

```json
[
  {
    "source": "lem-deleted-tychonoff-plank-is-regular-and-nonnormal",
    "sourcePage": "hereditary-and-productive-separation",
    "batch": "wave7-topology-separation-urysohn",
    "target": "def-order-topology-on-an-ordinal",
    "declared_target": "def-order-topology-on-an-ordinal",
    "target_statement_provenance": "ai-altered",
    "targetPage": "separation-axioms",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-deleted-tychonoff-plank-is-regular-and-nonnormal",
    "sourcePage": "hereditary-and-productive-separation",
    "batch": "wave7-topology-separation-urysohn",
    "target": "lem-ordinal-order-topology-is-t3",
    "declared_target": "lem-ordinal-order-topology-is-t3",
    "target_statement_provenance": "ai-altered",
    "targetPage": "separation-axioms",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-deleted-tychonoff-plank-is-regular-and-nonnormal",
    "sourcePage": "hereditary-and-productive-separation",
    "batch": "wave7-topology-separation-urysohn",
    "target": "thm-positive-heredity-of-separation-axioms",
    "declared_target": "thm-positive-heredity-of-separation-axioms",
    "target_statement_provenance": "ai-altered",
    "targetPage": "hereditary-and-productive-separation",
    "targetBatch": "wave7-topology-separation-urysohn",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-deleted-tychonoff-plank-is-regular-and-nonnormal",
    "sourcePage": "hereditary-and-productive-separation",
    "batch": "wave7-topology-separation-urysohn",
    "target": "thm-positive-productivity-of-separation-axioms",
    "declared_target": "thm-positive-productivity-of-separation-axioms",
    "target_statement_provenance": "ai-altered",
    "targetPage": "hereditary-and-productive-separation",
    "targetBatch": "wave7-topology-separation-urysohn",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-deleted-tychonoff-plank-is-regular-and-nonnormal",
    "sourcePage": "hereditary-and-productive-separation",
    "batch": "wave7-topology-separation-urysohn",
    "target": "thm-finite-products-of-compact-spaces",
    "declared_target": "thm-finite-products-of-compact-spaces",
    "target_statement_provenance": "ai-altered",
    "targetPage": "compactness",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-deleted-tychonoff-plank-is-regular-and-nonnormal",
    "sourcePage": "hereditary-and-productive-separation",
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
    "source": "lem-deleted-tychonoff-plank-is-regular-and-nonnormal",
    "sourcePage": "hereditary-and-productive-separation",
    "batch": "wave7-topology-separation-urysohn",
    "target": "thm-countable-subsets-of-omega-one-are-bounded",
    "declared_target": "thm-countable-subsets-of-omega-one-are-bounded",
    "target_statement_provenance": "ai-altered",
    "targetPage": "ordinal-arithmetic",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-deleted-tychonoff-plank-is-regular-and-nonnormal",
    "sourcePage": "hereditary-and-productive-separation",
    "batch": "wave7-topology-separation-urysohn",
    "target": "thm-ordinal-spaces-and-compactness",
    "declared_target": "thm-ordinal-spaces-and-compactness",
    "target_statement_provenance": "ai-altered",
    "targetPage": "compactness",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-deleted-tychonoff-plank-is-regular-and-nonnormal",
    "sourcePage": "hereditary-and-productive-separation",
    "batch": "wave7-topology-separation-urysohn",
    "target": "def-ordinal-addition",
    "declared_target": "def-ordinal-addition",
    "target_statement_provenance": "literature-derived",
    "targetPage": "ordinal-arithmetic",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-deleted-tychonoff-plank-is-regular-and-nonnormal",
    "sourcePage": "hereditary-and-productive-separation",
    "batch": "wave7-topology-separation-urysohn",
    "target": "def-normal-and-t4-spaces",
    "declared_target": "def-normal-and-t4-spaces",
    "target_statement_provenance": "literature-derived",
    "targetPage": "separation-axioms",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-deleted-tychonoff-plank-is-regular-and-nonnormal",
    "sourcePage": "hereditary-and-productive-separation",
    "batch": "wave7-topology-separation-urysohn",
    "target": "def-countable-choice",
    "declared_target": "def-countable-choice",
    "target_statement_provenance": "ai-altered",
    "targetPage": "countability-and-uncountability",
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

### `def-countable-choice`

````markdown
---
id: def-countable-choice
kind: definition
title: "The Axiom of Countable Choice ($\\mathrm{AC}_\\omega$)"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-choice-function, def-axiom-of-choice, def-countable, thm-well-ordering-principle, lem-countable-iff-surjection-from-n]
justified_by: []
external_refs: [rem-feferman-levy-model, rem-cohen-first-model]
aliases: [def-ac-omega, axiom-of-countable-choice]
landmark: false
short: "$\\mathrm{AC}_\\omega$"
verification:
  precheck: n/a
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-07-26
    scope: page
    delegated_by: owner
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-25
sources:
  scraped: []
  references:
    - title: "D. H. Fremlin, Measure Theory, Chapter 56"
      url: "https://www1.essex.ac.uk/maths/people/fremlin/chap56.pdf"
    - title: "Axiom of countable choice (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_countable_choice"
    - title: "Axiom of dependent choice (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_dependent_choice"
    - title: "Axiom of choice (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_choice"
pipeline_run: null
---

## Definition

The **Axiom of Countable Choice**, written $\mathrm{AC}_\omega$, is the following
statement.

> For every family $(X_n)_{n \in \mathbb{N}}$ of nonempty sets indexed by
> $\mathbb{N}$ there is a function $f$ with domain $\mathbb{N}$ such that
> $f(n) \in X_n$ for every $n \in \mathbb{N}$.

Equivalently, in the vocabulary of [[def-choice-function]]: every at most
countable family of nonempty sets ([[def-countable]]) has a choice function.

## Remarks

- **The two formulations are equivalent, and the passage between them uses no
  choice.** Given an at most countable family $\mathcal{F}$ of nonempty sets,
  either $\mathcal{F} = \varnothing$, where the empty function is a choice
  function, or a surjection $s : \mathbb{N} \to \mathcal{F}$ exists
  ([[lem-countable-iff-surjection-from-n]]); applying the indexed form to
  $X_n := s(n)$ gives $f$ with $f(n) \in s(n)$, and
  $g(S) := f(\min\{\, n : s(n) = S \,\})$ is a choice function for $\mathcal{F}$,
  the minimum being canonical by [[thm-well-ordering-principle]]. Conversely a
  choice function $g$ on the at most countable family $\{\, X_n : n \in \mathbb{N} \,\}$
  gives $f(n) := g(X_n)$.

- **$\mathrm{AC}_\omega$ is strictly weaker than the Axiom of Choice**
  ([[def-axiom-of-choice]]): AC implies it immediately, since AC applies to every
  family, while it is consistent with ZF that $\mathrm{AC}_\omega$ holds and AC
  fails. **It is also strictly stronger than what ZF proves**: it is consistent
  with ZF that $\mathrm{AC}_\omega$ fails, as Cohen's first model shows, since an
  infinite set of reals with no countably infinite subset
  ([[rem-cohen-first-model]]) is already a failure of $\mathrm{AC}_\omega$; the
  Feferman-Levy model ([[rem-feferman-levy-model]]) is a second witness. Both
  statements are conditional on the consistency of ZF and are external results,
  established by forcing and by permutation models; they are recorded here with
  references and are **not** proved in this library, which contains neither
  technique. Of the two, only the failure of $\mathrm{AC}_\omega$ is recorded in
  this library's catalogue of unproved results; the separation of
  $\mathrm{AC}_\omega$ from AC in the other direction is quoted from the
  references alone.

- **Dependent choice sits between them.** The Axiom of Dependent Choice
  (DC) says that if $R$ is a relation on a nonempty set $X$ such that every
  $x \in X$ has some $y$ with $x \mathbin{R} y$, then there is a sequence
  $(x_n)_{n \in \mathbb{N}}$ with $x_n \mathbin{R} x_{n+1}$ for all $n$. In ZF,
  $\mathrm{AC} \Rightarrow \mathrm{DC} \Rightarrow \mathrm{AC}_\omega$; both
  implications are theorems of ZF, and neither is proved here. That neither
  reverses is a pair of relative-consistency results of the same kind as in the
  previous bullet: if ZF is consistent, then so are ZF + DC + (not AC) and
  ZF + $\mathrm{AC}_\omega$ + (not DC). Both are established by forcing and by
  permutation models, are quoted here from the references rather than proved, and
  cannot be stated without the consistency hypothesis; so "DC is *strictly*
  between AC and $\mathrm{AC}_\omega$" is shorthand for those two conditional
  statements and is never used here as a standalone assertion. DC is the
  principle that legitimises "choose $x_0$, then choose $x_1$ depending on
  $x_0$, and so on"; $\mathrm{AC}_\omega$ only legitimises countably many
  *independent* choices made at once.

- **Being an axiom, $\mathrm{AC}_\omega$ carries no well-definedness obligation**,
  which is why this item has no `justified_by`. Its role in this library is
  bookkeeping: [[thm-countable-union-of-countable]] assumes it and flags the exact
  step that spends it, and [[fs-countable-union-theorem-of-zf]] records that the
  assumption cannot be removed.

- Every result *proved* on this page other than
  [[thm-countable-union-of-countable]] is a theorem of ZF alone. In particular
  [[lem-subset-of-countable]], [[lem-countable-iff-surjection-from-n]],
  [[thm-schroder-bernstein]], [[thm-rationals-countable]], [[thm-cantor-powerset]]
  and [[thm-r-uncountable]] are choice free, and each says so. The false
  statements at the end of the page are not all of that kind, and the claim above
  does not cover them: two of the three refute a ZF-provability claim only under
  the hypothesis that ZF is consistent, quoting an external independence result
  rather than proving it, and they say so in their own Facts.
````

### `def-normal-and-t4-spaces`

````markdown
---
id: def-normal-and-t4-spaces
kind: definition
title: "Normal spaces and $T_4$ spaces, with the source disagreement over whether normality includes $T_1$ stated explicitly"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-topological-space, def-t0-and-t1-spaces, def-separated-sets,
       def-standard-topologies, def-neighbourhood-top]
justified_by: []
aliases: [def-normal-space, def-t4-space]
landmark: true
short: "normal space, $T_4$ space"
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-31
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "Normal space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Normal_space"
    - title: "Separation axiom (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Separation_axiom"
    - title: "J. Munkres, Topology, 2nd ed., §32"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
    - title: "R. Gardner, Introduction to Topology, notes on Munkres Section 31: The Separation Axioms (East Tennessee State University)"
      url: "https://faculty.etsu.edu/gardnerr/5357/notes/Munkres-31.pdf"
pipeline_run: null
---

## Definition

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]).

- $X$ is **normal** when any two disjoint closed sets can be separated by
  disjoint open sets: for all closed $A, B \subseteq X$ with
  $A \cap B = \varnothing$ there are $U, V \in \mathcal{T}$ with
  $$A \subseteq U, \qquad B \subseteq V, \qquad U \cap V = \varnothing .$$
- $X$ is **$T_4$** when it is normal **and** $T_1$ ([[def-t0-and-t1-spaces]]).

Either of $A$, $B$ may be empty, and those cases are met by $U = \varnothing$ or
$V = \varnothing$ together with $X$; so the condition hides no nonemptiness
hypothesis. As with regularity, "disjoint open sets" may equivalently be read as
"disjoint open neighbourhoods of the two sets" ([[def-neighbourhood-top]]).

**Normality is the special case of complete normality at a disjoint closed
pair.** Disjoint closed sets are separated in the sense of
[[def-separated-sets]], since the closure of a closed set is itself; so a space
in which every *separated* pair can be put into disjoint open sets is in
particular normal. That stronger condition is defined later on this page, and the
implication is proved there.

**The convention fork, and this library's side of it.** Exactly as for
regularity, textbooks disagree about whether *normal* carries a $T_1$ hypothesis.
Munkres builds it in; Kelley, Willard and Engelking do not. **This library takes
the second side**: *normal* names the separation condition alone, $T_4$ names
normal plus $T_1$, and the $T_1$ hypothesis is written out wherever it is used.
The reason is again that the two halves are independent, and here the point is
sharp: **normality without $T_1$ implies nothing at all** in the hierarchy. The
indiscrete topology on a two-point set ([[def-standard-topologies]]) is normal,
its only closed sets being $\varnothing$ and the whole space, and it is not even
$T_0$; Sierpinski space is normal, $T_0$ and not regular. Both are recorded on
this page, the first as a false statement and both on the companion page.

## Remarks

- **Normality does not imply regularity**, and the failure is witnessed by
  Sierpinski space on the companion page, which is normal and not regular.
  Whether *regularity* implies normality is a question this page leaves open: any
  witness reachable from the material here would need cardinal arithmetic or the
  hereditary behaviour of regularity. This page's own prerequisites still supply
  neither: cardinal arithmetic and cofinality is now built, but *below* this
  one, and nothing here draws on it; the hereditary and productive behaviour of
  the separation axioms is developed later in the reading order. So nothing above
  asserts an answer and no false statement asserting
  one is planted here ([[rem-separation-axiom-conventions]]).

- **Normality is the axiom that behaves worst**, and the companion page shows
  one symptom: the deleted Tychonoff plank, a subspace of a product of two
  ordinal spaces each of which is $T_3$, is Hausdorff and not normal. Whether
  normality is inherited by subspaces or preserved by products is a question this
  page does not answer, and nothing here asserts an answer; the plank is
  presented only as a Hausdorff space that fails normality.

- **What the definition does *not* say.** It says nothing about separating a
  point from a closed set, because a point need not be closed; that is the
  content of the $T_1$ hypothesis in $T_4$, and the theorem two items below is
  where it is spent.
````

### `def-order-topology-on-an-ordinal`

````markdown
---
id: def-order-topology-on-an-ordinal
kind: definition
title: "The order topology on an ordinal, with the half-open intervals $(\\alpha, \\beta]$ and the initial segments $[0, \\beta]$ as a basis"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-ordinal, def-limit-ordinal, lem-ordinal-basics, lem-ordinal-trichotomy,
       lem-omega-least-limit-ordinal, def-topological-space, def-topology-basis-subbasis,
       thm-basis-criterion, def-standard-topologies,
       def-order-topology-on-a-linearly-ordered-set]
justified_by: []
aliases: [def-ordinal-order-topology]
landmark: true
short: "order topology on an ordinal"
verification:
  precheck: n/a
  verified:
    model: claude-sonnet-5
    verdict: certify
    date: 2026-07-29
    scope: page
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Order topology (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Order_topology"
    - title: "Ordinal number (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Ordinal_number"
    - title: "J. Munkres, Topology, 2nd ed., §14 and §10"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
    - title: "First uncountable ordinal (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/First_uncountable_ordinal"
pipeline_run: null
---

## Definition

Let $\gamma$ be an ordinal ([[def-ordinal]]). Since $\gamma$ is the set of
ordinals below it and $\xi < \eta$ means $\xi \in \eta$, the following two
families of subsets of $\gamma$ are defined for $\beta \in \gamma$ and
$\alpha \in \gamma$:

$$[0,\beta] \;:=\; \{\, \xi \in \gamma : \xi \le \beta \,\} \;=\; \beta^{+}, \qquad (\alpha,\beta] \;:=\; \{\, \xi \in \gamma : \alpha < \xi \le \beta \,\} \;=\; \beta^{+} \setminus \alpha^{+} .$$

Both identifications are immediate: $\beta^{+} = \beta \cup \{\beta\}$ is the set
of ordinals $\le \beta$, and it is a subset of $\gamma$ because $\gamma$ is
transitive and $\beta \in \gamma$ ([[def-ordinal]], [[lem-ordinal-basics]]).

Put

$$\mathcal{B}_\gamma \;:=\; \{\, [0,\beta] : \beta \in \gamma \,\} \;\cup\; \{\, (\alpha,\beta] : \alpha, \beta \in \gamma,\ \alpha < \beta \,\} .$$

**$\mathcal{B}_\gamma$ is a basis for a unique topology on $\gamma$**
([[thm-basis-criterion]], [[def-topology-basis-subbasis]]), and that topology is
the **order topology on $\gamma$**. The obligation is discharged here.

*(B1), covering.* If $\xi \in \gamma$ then $\xi \in [0,\xi] \in \mathcal{B}_\gamma$,
so $\bigcup \mathcal{B}_\gamma = \gamma$. For $\gamma = 0 = \varnothing$ the
family is empty and $\bigcup \varnothing = \varnothing = \gamma$, so (B1) holds
there too.

*(B2), intersections.* By trichotomy of the ordinals ([[lem-ordinal-trichotomy]])
any two ordinals have a maximum and a minimum, namely the larger and the smaller
of the two, and for $\alpha_1, \alpha_2, \beta_1, \beta_2 \in \gamma$:

- $[0,\beta_1] \cap [0,\beta_2] = [0, \min\{\beta_1,\beta_2\}]$;
- $[0,\beta_1] \cap (\alpha_2,\beta_2] = (\alpha_2, \min\{\beta_1,\beta_2\}]$ when
  $\alpha_2 < \min\{\beta_1,\beta_2\}$, and $\varnothing$ otherwise;
- $(\alpha_1,\beta_1] \cap (\alpha_2,\beta_2] = (\max\{\alpha_1,\alpha_2\},\ \min\{\beta_1,\beta_2\}]$
  when $\max\{\alpha_1,\alpha_2\} < \min\{\beta_1,\beta_2\}$, and $\varnothing$
  otherwise.

In each case the intersection is either a member of $\mathcal{B}_\gamma$ or
empty, and in the empty case (B2) is vacuous, having no point to test. So (B2)
holds, and [[thm-basis-criterion]] supplies the topology and its uniqueness.

**This definition is for ordinals only, and it says so.** The general order
topology of a linearly ordered set takes the open intervals, together with the
initial and final rays, as a basis. For an ordinal that family is the wrong one:
a successor $\beta^{+}$ has an immediate predecessor, so the smallest open
interval around it is already $\{\beta^{+}\}$, but no *interval* of the form
$(\alpha,\eta)$ isolates $0$, and the initial segments must be supplied
separately. The family $\mathcal{B}_\gamma$ above is exactly the general order
basis for an ordinal, rewritten so that no case analysis is needed; nothing here
claims to define the order topology of an arbitrary linearly ordered set, and no
statement on this page is about such a set.

**Isolated and non-isolated points.** Every ordinal is $0$, a successor, or a
limit ([[def-limit-ordinal]]). If $\xi = 0$ then $\{\xi\} = [0,0]$ is basic open;
if $\xi = \alpha^{+}$ then $\{\xi\} = (\alpha, \xi]$ is basic open; so every
non-limit point of $\gamma$ is isolated. If $\xi$ is a limit ordinal then every
basic set containing $\xi$ contains some $(\alpha,\xi]$ with $\alpha < \xi$, and
$\alpha^{+} < \xi$ because $\xi$ is a limit, so $\alpha^{+}$ is a second point of
that basic set; hence a limit point of $\gamma$ is not isolated. In particular
$\omega$, the least limit ordinal ([[lem-omega-least-limit-ordinal]]), is the
unique non-isolated point of $\omega + 1$, and every ordinal $\gamma \le \omega$
carries the discrete topology ([[def-standard-topologies]]).

## Remarks

- **The basis members are clopen**, and that is proved as the next item; it is
  the single fact that makes ordinal spaces easy to place in the separation
  hierarchy, since a clopen basis gives regularity at once.

- **$\gamma$ is a set of ordinals and also a space.** The notations $[0,\beta]$
  and $(\alpha,\beta]$ are relative to the ambient $\gamma$: the same symbols in
  a larger ordinal denote larger sets. Where two ordinals are in play the ambient
  one is named.

- **Nothing here needs any choice principle.** Every fact used above is a theorem
  of ZF ([[lem-ordinal-basics]], [[lem-ordinal-trichotomy]]).

- **This is the ordinal instance of a general construction.** The order topology
  of an arbitrary linearly ordered set is now defined elsewhere in the library
  ([[def-order-topology-on-a-linearly-ordered-set]]), by open intervals together
  with the initial and final rays. $\mathcal{B}_\gamma$ above is not that
  construction applied verbatim to $\gamma$ — the note two Remarks up already
  explains why a raw open-interval basis is the wrong family for an ordinal —
  but it generates the same topology: every basic open set of the general
  construction is a union of members of $\mathcal{B}_\gamma$ and conversely,
  since both bases are generated by the same order relation on the same
  underlying set. So this definition is the ordinal special case of that one,
  restated in a form that needs no case analysis, not a second, competing
  notion.
````

### `def-ordinal-addition`

````markdown
---
id: def-ordinal-addition
kind: definition
title: "Ordinal addition $\\alpha + \\beta$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [cor-ordinal-addition-well-defined, def-ordinal, def-limit-ordinal, lem-ordinal-basics, lem-omega-least-limit-ordinal]
justified_by: []
aliases: [def-ordinal-sum]
landmark: true
short: "$\\alpha+0=\\alpha$, $\\alpha+\\beta^{+}=(\\alpha+\\beta)^{+}$, sup at limits"
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
    - title: "Ordinal arithmetic (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Ordinal_arithmetic"
    - title: "T. Jech, Set Theory, 3rd millennium ed., Ch. 2 (Ordinal numbers)"
      url: "https://link.springer.com/book/10.1007/3-540-44761-X"
    - title: "R. Moosa, Set Theory course notes"
      url: "https://www.math.uwaterloo.ca/~rmoosa/pm433-notes.pdf"
pipeline_run: null
---

## Definition

Let $\alpha$ and $\beta$ be ordinals ([[def-ordinal]]). The **sum**
$\alpha + \beta$ is defined by recursion on $\beta$, in the three cases of
[[def-limit-ordinal]]:

$$\alpha + 0 = \alpha, \qquad \alpha + \beta^{+} = (\alpha + \beta)^{+}, \qquad \alpha + \lambda = \bigcup\{\, \alpha + \beta : \beta \in \lambda \,\} \quad (\lambda \text{ a limit ordinal}).$$

That exactly one operation satisfies these three clauses, and that all its
values are ordinals, is [[cor-ordinal-addition-well-defined]], proved
immediately above. The union in the limit clause is the least upper bound of the
values already produced (claim (e) of [[lem-ordinal-basics]]), so it may be
written $\sup$ and the clause read as "at a limit, take the supremum".

**Notation.** We write $1 = 0^{+}$, $2 = 1^{+}$, and so on for the finite
ordinals, and $\sup$ for $\bigcup$ applied to a set of ordinals. The successor
operation is now a special case of addition:

$$\alpha + 1 = \alpha + 0^{+} = (\alpha + 0)^{+} = \alpha^{+},$$

so from here on $\alpha + 1$ and $\alpha^{+}$ denote the same ordinal, and both
notations are used, whichever reads better.

## Remarks

- **The recursion is on the right argument only.** The left argument $\alpha$ is
  a parameter, frozen before the recursion starts. This asymmetry is not an
  artefact of the presentation: ordinal addition is genuinely asymmetric, and
  the asymmetry is exactly what [[fs-ordinal-addition-is-commutative]] and
  [[fs-ordinal-addition-is-strictly-monotone-in-the-left-argument]] exhibit
  later on this page.

- **What the clauses say concretely.** $\alpha + \beta$ is "$\alpha$, and then
  $\beta$ more steps". [[lem-ordinal-sum-as-an-order-type]] turns that picture
  into a theorem: $\alpha + \beta$ is the order type of a copy of $\alpha$
  followed by a copy of $\beta$. The order-type description is usually the one
  to compute with; the recursion is the one that makes the definition legitimate.

- **The first interesting value.** $\omega$ is the least limit ordinal
  ([[lem-omega-least-limit-ordinal]]), and it is the least ordinal at which the
  third clause fires at all: below $\omega$ every ordinal is $0$ or a successor,
  so below $\omega$ this recursion is literally the Peano recursion for
  addition on $\mathbb{N}$. That the two agree there is
  [[thm-ordinal-arithmetic-agrees-on-omega]], and it is a theorem, not a
  convention.

- **Suprema need no completeness axiom.** The limit clause takes the union of a
  set of ordinals, which is an ordinal and is their least upper bound, by claim
  (e) of [[lem-ordinal-basics]] and the remark following it. Nothing resembling
  the least upper bound property of $\mathbb{R}$ is assumed; it is a closure
  property of the ordinals themselves.

- **Left addition of a limit is a limit.** For a limit $\lambda$, the values
  $\alpha + \beta$ for $\beta \in \lambda$ are strictly increasing and their
  supremum is not attained, so $\alpha + \lambda$ is again a limit ordinal. This
  is recorded as a clause of [[thm-ordinal-arithmetic-monotonicity]], where it
  is proved.
````

### `lem-ordinal-order-topology-is-t3`

````markdown
---
id: lem-ordinal-order-topology-is-t3
kind: lemma
title: "Every ordinal with its order topology has a basis of clopen sets, and is $T_1$, Hausdorff and regular"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-order-topology-on-an-ordinal, def-t0-and-t1-spaces,
       thm-t1-iff-singletons-are-closed, def-hausdorff-space, def-regular-and-t3-spaces,
       lem-regularity-via-closed-neighbourhoods, def-neighbourhood-top,
       def-interior-closure-boundary-top, lem-ordinal-basics, lem-ordinal-trichotomy,
       def-ordinal, def-topological-space, def-topology-basis-subbasis]
justified_by: []
aliases: []
landmark: true
short: "ordinal spaces are $T_3$"
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: claude-sonnet-5
    verdict: certify
    date: 2026-08-05
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Order topology (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Order_topology"
    - title: "Ordinal number (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Ordinal_number"
    - title: "J. Munkres, Topology, 2nd ed., §14"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
    - title: "R. Gardner, Introduction to Topology, notes on Munkres Section 17: Closed Sets and Limit Points (East Tennessee State University)"
      url: "https://faculty.etsu.edu/gardnerr/5357/notes/Munkres-17.pdf"
    - title: "R. Gardner, Introduction to Topology, notes on Munkres Section 32: Normal Spaces (East Tennessee State University)"
      url: "https://faculty.etsu.edu/gardnerr/5357/notes/Munkres-32.pdf"
pipeline_run: null
---

## Statement

Let $\gamma$ be an ordinal ([[def-ordinal]]) with its order topology
([[def-order-topology-on-an-ordinal]]), whose basis is
$\mathcal{B}_\gamma$. Then:

1. Every member of $\mathcal{B}_\gamma$ is **clopen** in $\gamma$
   ([[def-topological-space]]), so $\gamma$ has a basis of clopen sets.
2. $\gamma$ is $T_1$ ([[def-t0-and-t1-spaces]]).
3. $\gamma$ is Hausdorff ([[def-hausdorff-space]]).
4. $\gamma$ is regular ([[def-regular-and-t3-spaces]]), and therefore $T_3$.

## Facts & Assumptions

**Given:** An ordinal $\gamma$ with its order topology, ordinals $\alpha, \beta, \xi, \eta \in \gamma$, and the basis $\mathcal{B}_\gamma$ consisting of the sets $[0,\beta]$ for $\beta \in \gamma$ and $(\alpha,\beta]$ for $\alpha < \beta$ in $\gamma$.

[A1] $[0,\beta] = \{\, \zeta \in \gamma : \zeta \le \beta \,\}$ and $(\alpha,\beta] = \{\, \zeta \in \gamma : \alpha < \zeta \le \beta \,\}$, and $\mathcal{B}_\gamma$ is a basis for the order topology ([[def-order-topology-on-an-ordinal]], [[def-topology-basis-subbasis]]).

[L1] For ordinals exactly one of $\zeta < \eta$, $\zeta = \eta$, $\eta < \zeta$ holds, and $<$ is transitive; every element of an ordinal is an ordinal ([[lem-ordinal-trichotomy]], [[lem-ordinal-basics]], [[def-ordinal]]).

[L2] A set is open exactly when each of its points lies in a basic set inside it; a set is closed exactly when its complement is open; a union of open sets is open ([[def-topology-basis-subbasis]], [[def-topological-space]]).

[L3] A space is $T_1$ exactly when every singleton is closed ([[thm-t1-iff-singletons-are-closed]], clause (b), [[def-t0-and-t1-spaces]]).

[L4] The basic sets containing a point form a neighbourhood base at that point, consisting of open sets ([[def-neighbourhood-top]]).

[L5] A space is regular exactly when every point has a neighbourhood base of closed neighbourhoods ([[lem-regularity-via-closed-neighbourhoods]], clause (c), [[def-regular-and-t3-spaces]]).

[L6] A closed neighbourhood of a point is a neighbourhood of it that is closed, and $\overline{K} = K$ for such a $K$ ([[def-interior-closure-boundary-top]]).

## Proof

**Proof technique:** direct.

1.1 The set $T_\beta := \{\, \zeta \in \gamma : \beta < \zeta \,\}$ is open for every $\beta \in \gamma$: if $\beta < \zeta$ with $\zeta \in \gamma$ then $(\beta,\zeta]$ is a basic set with $\zeta \in (\beta,\zeta] \subseteq T_\beta$, by [A1] and transitivity in [L1]. [A1, L1, L2]

1.2 The set $S_\xi := \{\, \zeta \in \gamma : \zeta < \xi \,\}$ is open for every $\xi \in \gamma$: if $\zeta < \xi$ then $[0,\zeta]$ is a basic set with $\zeta \in [0,\zeta] \subseteq S_\xi$, again by [A1] and transitivity. [A1, L1, L2]

1.3 Let $\xi \ne \eta$ in $\gamma$ and assume $\xi < \eta$ without loss of generality, by [L1]. Then $[0,\xi]$ and $(\xi,\eta]$ are basic open sets with $\xi \in [0,\xi]$, $\eta \in (\xi,\eta]$ and $[0,\xi] \cap (\xi,\eta] = \varnothing$ by [A1] and trichotomy; so $\gamma$ is Hausdorff, which is claim 3. [A1, L1]

2.1 $\gamma \setminus [0,\beta] = T_\beta$ by trichotomy, so $[0,\beta]$ is closed by step 1.1 and [L2]; and $[0,\beta]$ is open, being basic. [step 1.1, A1, L1, L2]

2.2 $\gamma \setminus (\alpha,\beta] = S_{\alpha^{+}} \cup T_\beta$ by trichotomy, where $S_{\alpha^{+}} = [0,\alpha]$ is basic open and $T_\beta$ is open by step 1.1, so $(\alpha,\beta]$ is closed by [L2]; and it is open, being basic. [step 1.1, A1, L1, L2]

2.3 $\gamma \setminus \{\xi\} = S_\xi \cup T_\xi$ by trichotomy, which is open by steps 1.1 and 1.2 and [L2], so $\{\xi\}$ is closed. [step 1.1, step 1.2, L1, L2]

3.1 Steps 2.1 and 2.2 exhaust $\mathcal{B}_\gamma$, so every basic set is clopen, which is claim 1. [step 2.1, step 2.2, A1]

3.2 Step 2.3 makes every singleton closed, so $\gamma$ is $T_1$ by [L3], which is claim 2. [step 2.3, L3]

4.1 Let $\xi \in \gamma$ and let $N$ be a neighbourhood of $\xi$; by [L4] there is a basic $B \in \mathcal{B}_\gamma$ with $\xi \in B \subseteq N$, and $B$ is closed by step 3.1 and open, hence a closed neighbourhood of $\xi$ inside $N$. [step 3.1, L4, L6]

5.1 By step 4.1 every point of $\gamma$ has a neighbourhood base of closed neighbourhoods, so $\gamma$ is regular by [L5]; with step 3.2 it is $T_3$, which is claim 4. [step 3.2, step 4.1, L5] ∎

## Remarks

- **The clopen basis is the whole content.** A space with a basis of clopen sets is regular for the reason given in step 4.1, and the ordinals have such a basis because a half-open interval $(\alpha,\beta]$ has an *immediate* left endpoint outside it, namely $\alpha$, and everything above $\beta$ is separated from it by a further half-open interval. No case distinction between successors and limits is needed anywhere in the proof.

- **Regularity is claimed and normality is not.** Nothing above asserts that an ordinal with its order topology is normal, and nothing on this page proves it. The companion page's deleted plank is a subspace of a product of two ordinal spaces and is *not* normal, so no normality statement about ordinal spaces may be read off from this lemma in either direction.

- **No choice principle is used**, every ingredient being a theorem of ZF ([[lem-ordinal-basics]], [[lem-ordinal-trichotomy]]).
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

### `thm-countable-subsets-of-omega-one-are-bounded`

````markdown
---
id: thm-countable-subsets-of-omega-one-are-bounded
kind: theorem
title: "Assuming countable choice: every at most countable subset of $\\omega_1$ is bounded below $\\omega_1$, so no at most countable subset of $\\omega_1$ is cofinal in it, and a supremum of at most countably many at most countable ordinals is at most countable"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-first-uncountable-ordinal, thm-omega-one-is-the-least-uncountable-ordinal, def-cofinal-subset-of-an-ordinal, def-countable-choice, thm-countable-union-of-countable, def-countable, lem-countable-iff-surjection-from-n, lem-ordinal-basics, lem-ordinal-trichotomy, def-ordinal, def-limit-ordinal, def-natural-numbers]
justified_by: []
aliases: [thm-omega-one-is-regular-under-countable-choice]
landmark: true
short: "under $\\mathrm{AC}_\\omega$, countable subsets of $\\omega_1$ are bounded"
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
    - title: "First uncountable ordinal (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/First_uncountable_ordinal"
    - title: "Axiom of countable choice (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_countable_choice"
    - title: "T. Jech, Set Theory, 3rd millennium ed., Ch. 3 (Cardinal numbers)"
      url: "https://link.springer.com/book/10.1007/3-540-44761-X"
    - title: "A. Karagila, Forcing course notes (2023)"
      url: "https://karagila.org/files/Forcing-2023.pdf"
pipeline_run: null
---

## Statement

**Assume the Axiom of Countable Choice $\mathrm{AC}_\omega$**
([[def-countable-choice]]). Let $\omega_1$ be the first uncountable ordinal
([[def-first-uncountable-ordinal]]). Then:

**(a) Boundedness.** Every at most countable ([[def-countable]]) subset
$A \subseteq \omega_1$ is bounded below $\omega_1$: the ordinal
$\sup A = \bigcup A$ lies in $\omega_1$ and satisfies $\alpha \le \sup A$ for
every $\alpha \in A$.

**(b) No small cofinal set.** No at most countable subset of $\omega_1$ is
cofinal in $\omega_1$ ([[def-cofinal-subset-of-an-ordinal]]).

**(c) Suprema stay countable.** If $A$ is an at most countable set of at most
countable ordinals, then $\sup A = \bigcup A$ is an at most countable ordinal.

**The hypothesis is not decoration.** $\mathrm{AC}_\omega$ is spent at exactly
one step, step 1.2 below, and it is spent there only through
[[thm-countable-union-of-countable]], whose own statement carries the same
hypothesis. Everything else on this page, including the existence of $\omega_1$
and all of [[thm-omega-one-is-the-least-uncountable-ordinal]], is a theorem of
ZF. The ledger is the choice-ledger remark at the end of this page.

## Facts & Assumptions

**Given:** The Axiom of Countable Choice ([[def-countable-choice]]), and $\omega_1 = \aleph(\omega)$ ([[def-first-uncountable-ordinal]]).

[L1] $\bigcup A$ is an ordinal for every set $A$ of ordinals, and it is the least upper bound of $A$; $\bigcup \varnothing = 0$; every element of an ordinal is an ordinal; $\mu \subseteq \nu$ iff $\mu \in \nu$ or $\mu = \nu$; and $\mu \notin \mu$ ([[lem-ordinal-basics]], [[def-ordinal]]).

[L2] Exactly one of $\mu \in \nu$, $\mu = \nu$, $\nu \in \mu$ holds for ordinals ([[lem-ordinal-trichotomy]]).

[L3] $\omega_1$ is uncountable, every ordinal in $\omega_1$ is at most countable, and $\omega_1$ is a limit ordinal ([[thm-omega-one-is-the-least-uncountable-ordinal]], [[def-limit-ordinal]]).

[L4] A nonempty set $A$ is at most countable if and only if there is a surjection $\mathbb{N} \to A$ ([[lem-countable-iff-surjection-from-n]], [[def-natural-numbers]]).

[L5] **Assuming $\mathrm{AC}_\omega$:** if $(A_n)_{n \in \mathbb{N}}$ is a family of at most countable sets then $\bigcup_{n \in \mathbb{N}} A_n$ is at most countable ([[thm-countable-union-of-countable]]).

[L6] $C \subseteq \alpha$ is cofinal in $\alpha$ when every $\xi \in \alpha$ satisfies $\xi \le \eta$ for some $\eta \in C$ ([[def-cofinal-subset-of-an-ordinal]]).

## Proof

**Proof technique:** direct.

1.1 For a set $A$ of ordinals, $\bigcup A$ is an ordinal and is the least upper bound of $A$, so $\alpha \le \bigcup A$ for every $\alpha \in A$; and $\bigcup \varnothing = 0$. [L1]

1.2 **The one step that spends $\mathrm{AC}_\omega$.** Let $A$ be a nonempty at most countable set each of whose members is an at most countable set. By [L4] there is a surjection $s : \mathbb{N} \to A$; putting $A_n = s(n)$ gives a family of at most countable sets indexed by $\mathbb{N}$, with no selection made, and $\bigcup_{n \in \mathbb{N}} A_n = \bigcup A$ because $s$ is onto $A$; so $\bigcup A$ is at most countable by [L5]. [L4, L5]

2.1 Claim (a): let $A \subseteq \omega_1$ be at most countable. Every $\alpha \in A$ lies in $\omega_1$ and hence is an at most countable ordinal by [L3], and $\alpha \subseteq \omega_1$ by [L1], so $\bigcup A \subseteq \omega_1$ and $\bigcup A$ is an ordinal with $\bigcup A \le \omega_1$ by [L1]. If $A = \varnothing$ then $\bigcup A = 0 \in \omega_1$ by step 1.1 and [L3], since $\omega_1$ is a nonzero ordinal. If $A \ne \varnothing$ then $\bigcup A$ is at most countable by step 1.2, so $\bigcup A \ne \omega_1$ because $\omega_1$ is uncountable by [L3], and therefore $\bigcup A \in \omega_1$ by [L1]. In both cases $\sup A = \bigcup A \in \omega_1$ is an upper bound of $A$ by step 1.1. [step 1.1, step 1.2, L1, L2, L3]

2.2 Claim (c): an at most countable set $A$ of at most countable ordinals has $\bigcup A$ an ordinal by [L1], equal to $0$ when $A = \varnothing$ and at most countable by step 1.2 otherwise; in either case $\sup A = \bigcup A$ is an at most countable ordinal. [step 1.1, step 1.2, L1]

3.1 Claim (b): suppose $A \subseteq \omega_1$ is at most countable and cofinal in $\omega_1$; put $\beta = \bigcup A$, which lies in $\omega_1$ by step 2.1, so $\beta^{+} \in \omega_1$ because $\omega_1$ is a limit ordinal by [L3]; cofinality applied to $\beta^{+}$ gives $\eta \in A$ with $\beta^{+} \le \eta$, while $\eta \le \beta$ by step 1.1, so $\beta^{+} \le \beta \in \beta^{+}$ and hence $\beta \in \beta$, which [L1] forbids. [step 2.1, step 1.1, L1, L3, L6]

4.1 Claims (a), (b) and (c) are established, and the only appeal to a choice principle is the use of [L5] inside step 1.2. [step 3.1, step 2.1, step 2.2, step 1.2, L5] ∎

## Remarks

**Where exactly the choice is spent, and why it cannot be avoided here.** Step 1.2 hands an $\mathbb{N}$-indexed family of at most countable sets to [[thm-countable-union-of-countable]], and that theorem selects one enumeration of each member at once. Each ordinal $\alpha < \omega_1$ has enumerations by $\mathbb{N}$, in general many, and countability alone gives no rule for singling one out. Note that the family $(A_n)$ itself is produced without choice: it is $n \mapsto s(n)$ for a surjection $s$ that [[lem-countable-iff-surjection-from-n]] hands over, and that lemma is choice free.

**The hypothesis is genuinely needed, not merely convenient.** Without a choice principle the conclusion can fail outright: it is consistent with ZF, granted the consistency of ZF, that $\omega_1$ is the supremum of an $\omega$-sequence of at most countable ordinals. That is the Feferman-Levy model, recorded in [[rem-omega-one-and-the-cost-of-choice]] with the external citation. So the boundedness proved here is not a fact about $\omega_1$ alone; it is a fact about $\omega_1$ *plus* $\mathrm{AC}_\omega$.

**What the statement deliberately avoids.** The usual formulation is "$\omega_1$ is a regular cardinal", using the cofinality function $\operatorname{cf}$. Neither $\operatorname{cf}$ nor the regular/singular vocabulary is defined in this library, so the conclusion is stated in terms of subsets: no at most countable subset is cofinal. That is exactly the form the applications need, for instance the non-normality of the deleted Tychonoff plank, where the countably many ordinals produced by a covering argument must be capped below $\omega_1$.

**Claim (c) restated.** A supremum of at most countably many at most countable ordinals is at most countable. This is the same fact viewed without reference to $\omega_1$, and it is the form used when the ambient ordinal is not $\omega_1$ but some countable limit; see the worked increasing-sequence example on the companion examples page.
````

### `thm-finite-products-of-compact-spaces`

````markdown
---
id: thm-finite-products-of-compact-spaces
kind: theorem
title: "A product of finitely many compact spaces is compact in the product topology"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-compact-space, lem-tube-lemma-for-a-compact-factor, def-product-topology, thm-product-universal-property, thm-induction-principle, lem-compactness-of-a-subspace-is-ambient, thm-compactness-under-continuous-maps, lem-continuity-is-local-and-pastes, def-continuous-map-top, thm-continuity-characterisations-top, def-homeomorphism-and-open-maps, lem-homeomorphism-criteria, def-natural-numbers, def-topological-space, lem-finite-choice]
justified_by: []
aliases: [thm-finite-tychonoff]
landmark: true
short: "finite products of compacts are compact"
proof_strategy: induction
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
    - title: "Tychonoff's theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Tychonoff%27s_theorem"
    - title: "Product topology (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Product_topology"
    - title: "J. Munkres, Topology, 2nd ed., §26"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
    - title: "Stacks Project, Tag 08ZU"
      url: "https://stacks.math.columbia.edu/tag/08ZU"
pipeline_run: null
---

## Statement

For every $n \in \mathbb{N}$ ([[def-natural-numbers]]) and every family
$(X_k)_{k < n}$ of compact topological spaces ([[def-compact-space]],
[[def-topological-space]]), the product

$$\prod_{k < n} X_k$$

with the product topology ([[def-product-topology]]) is compact. In particular a
binary product $X \times Y$ of compact spaces is compact, and the empty product,
a one-point space, is compact.

**No choice principle is used beyond [[lem-finite-choice]]**, which is a theorem
of ZF. That is what separates the finite case from the arbitrary one, where the
Axiom of Choice is genuinely spent.

## Facts & Assumptions

**Given:** A natural number $n$, a family $(X_k)_{k < n}$ of compact topological spaces, and the product $P_n := \prod_{k<n} X_k$ with the product topology and projections $\pi_k$.

[A1] An element of $\prod_{k<n} X_k$ is a function $x$ with domain $n$ and $x(k) \in X_k$ for every $k < n$; the von Neumann natural satisfies $\sigma(n) = n \cup \{n\}$ with $n \notin n$; and the empty product is a one-point space ([[def-product-topology]], [[def-natural-numbers]]).

[L1] The projections of a product are continuous, and a map $h$ into a product is continuous exactly when every component $\pi_i \circ h$ is continuous ([[thm-product-universal-property]], claims 1 and 2).

[L2] A composite of continuous maps is continuous ([[lem-continuity-is-local-and-pastes]], claim 1).

[L3] The identity map of a space is continuous, and so is every constant map, the preimage of a set under a constant map being $\varnothing$ or the whole space ([[def-continuous-map-top]], [[thm-continuity-characterisations-top]], clause (b); [[def-topological-space]]).

[L4] A continuous image of a compact space is a compact subset of the target ([[thm-compactness-under-continuous-maps]], claim 1); a continuous bijection with continuous inverse is a homeomorphism ([[def-homeomorphism-and-open-maps]], [[lem-homeomorphism-criteria]]).

[L5] Tube lemma: if $K \subseteq X$ is compact, $N \subseteq X \times Z$ is open and $K \times \{z_0\} \subseteq N$, then $K \times W \subseteq N$ for some open $W \ni z_0$ ([[lem-tube-lemma-for-a-compact-factor]]).

[L6] $A$ is a compact subset of a space $Z$ exactly when every family $\mathcal{U}$ of open subsets of $Z$ with $A \subseteq \bigcup \mathcal{U}$ has finitely many members whose union contains $A$, or else $A = \varnothing$ ([[lem-compactness-of-a-subspace-is-ambient]], claim 1).

[L7] A function with domain a natural number all of whose values are nonempty sets has a choice function, and this is a theorem of ZF ([[lem-finite-choice]]).

[L8] A space is compact exactly when every open cover of it has a finite subcover; a one-point space and the empty space are compact ([[def-compact-space]]).

[L9] If $0 \in S \subseteq \mathbb{N}$ and $\sigma(m) \in S$ whenever $m \in S$, then $S = \mathbb{N}$ ([[thm-induction-principle]]).

## Proof

**Proof technique:** induction.

1.1 At $n = 0$ the index set is empty, so $\prod_{k<0} X_k$ is a one-point space by [A1] and is compact by [L8]; this is the case $n = 0$ of the statement. [A1, L8, base]

1.2 Let $m \in \mathbb{N}$ and assume, as the induction hypothesis, that $\prod_{k<m} Y_k$ is compact for every family $(Y_k)_{k<m}$ of compact spaces. [ih]

1.3 For the binary case let $X$ and $Z$ be compact, let $\mathcal{U}$ be an open cover of $X \times Z$, and for $z \in Z$ let $j_z : X \to X \times Z$ be $j_z(x) := (x,z)$; its components are the identity of $X$ and the constant map with value $z$, so it is continuous by [L1] and [L3], and $X \times \{z\} = j_z[X]$ is therefore a compact subset of $X \times Z$ by [L4]. [L1, L3, L4, construct]

1.4 Put $\mathcal{W} := \{\, W \subseteq Z : W \text{ is open and } X \times W \subseteq \bigcup \mathcal{V} \text{ for some finite } \mathcal{V} \subseteq \mathcal{U} \,\}$, a family cut out by a property of $W$ and not by any selection. [construct]

1.5 For the splitting, let $p \in \mathbb{N}$, let $(X_k)_{k < \sigma(p)}$ be a family of spaces, and define $r : \prod_{k<\sigma(p)} X_k \to \big(\prod_{k<p} X_k\big) \times X_p$ by $r(x) := (x \restriction p,\ x(p))$ and $s$ in the opposite direction by $s(y,a) := y \cup \{(p,a)\}$; by [A1] these are mutually inverse bijections, since $\sigma(p) = p \cup \{p\}$ and $p \notin p$. [A1, construct]

2.1 $Z \subseteq \bigcup \mathcal{W}$: given $z \in Z$, the set $X \times \{z\}$ is compact by step 1.3 and lies in $\bigcup \mathcal{U}$, so [L6] supplies a finite $\mathcal{V} \subseteq \mathcal{U}$ with $X \times \{z\} \subseteq N := \bigcup \mathcal{V}$, an open set, the case $X = \varnothing$ being covered by $\mathcal{V} = \varnothing$; since $X$ is compact, [L5] gives an open $W \ni z$ with $X \times W \subseteq N$, and that $W$ lies in $\mathcal{W}$. [L5, L6, step 1.3, step 1.4]

2.2 $r$ is continuous: by [L1] it suffices that its two components are, and they are $x \mapsto x \restriction p$ and $\pi_p$; the second is a projection, and the first is continuous by [L1] applied again, its own components being $\pi_k$ for $k < p$. [L1, step 1.5]

2.3 $s$ is continuous: by [L1] it suffices that $\pi_k \circ s$ is continuous for every $k < \sigma(p)$; for $k < p$ that map is the $k$-th projection of $\prod_{k<p} X_k$ composed with the first projection of the binary product, a composite of continuous maps, and for $k = p$ it is the second projection of the binary product. [L1, L2, step 1.5]

3.1 If $Z = \varnothing$ then $X \times Z = \varnothing$ is compact by [L8]; otherwise $\mathcal{W}$ is an open cover of the compact $Z$ by step 2.1, so [L8] gives $q \in \mathbb{N}$ and $W_0, \dots, W_q \in \mathcal{W}$ with $Z = W_0 \cup \dots \cup W_q$. [L8, step 2.1]

3.2 So $r$ is a continuous bijection with continuous inverse $s$, hence a homeomorphism, and $\prod_{k<\sigma(p)} X_k$ is homeomorphic to $\big(\prod_{k<p} X_k\big) \times X_p$. [L4, step 1.5, step 2.2, step 2.3]

4.1 For each $j \le q$ the set $T_j$ of finite subfamilies $\mathcal{V} \subseteq \mathcal{U}$ with $X \times W_j \subseteq \bigcup \mathcal{V}$ is nonempty because $W_j \in \mathcal{W}$, and $j \mapsto T_j$ is a function with domain the natural number $\sigma(q)$, so [L7] supplies $\mathcal{V}_0, \dots, \mathcal{V}_q$; their union $\mathcal{V}$ is a finite subfamily of $\mathcal{U}$, a union of finitely many listable families being listed by concatenation, and $X \times Z = (X \times W_0) \cup \dots \cup (X \times W_q) \subseteq \bigcup \mathcal{V}$. So every open cover of $X \times Z$ has a finite subcover and $X \times Z$ is compact. [L7, L8, step 3.1]

5.1 Now let $(X_k)_{k < \sigma(m)}$ be a family of compact spaces. By step 1.2 the product $\prod_{k<m} X_k$ is compact, and $X_m$ is compact, so step 4.1 makes $\big(\prod_{k<m} X_k\big) \times X_m$ compact; by step 3.2 with $p := m$ the product $\prod_{k<\sigma(m)} X_k$ is homeomorphic to it, and a continuous image of a compact space is compact by [L4], so $\prod_{k<\sigma(m)} X_k$ is compact. [L4, step 1.2, step 3.2, step 4.1]

6.1 The set of $n \in \mathbb{N}$ for which the statement holds contains $0$ by step 1.1 and contains $\sigma(m)$ whenever it contains $m$ by step 5.1, so by [L9] it is all of $\mathbb{N}$; the binary case is $n = 2$ and the empty product is $n = 0$. [L9, step 1.1, discharge-induction: step 5.1] ∎

## Remarks

**Where the tube lemma does the work.** Compactness of $X$ alone thins a cover on one slice $X \times \{z\}$; what is needed is a cover of a whole band around that slice, and producing the band is exactly [[lem-tube-lemma-for-a-compact-factor]]. Compactness of $Z$ then thins the family of bands. Both factors are used, and in different ways.

**Why the bands are collected rather than chosen.** The family $\mathcal{W}$ of step 1.4 consists of *every* open $W$ admitting some finite subfamily of $\mathcal{U}$ over $X \times W$; it is defined by a formula. Writing $W_z$ for each $z \in Z$ instead would select a band for every point of $Z$ at once, which for an arbitrary $Z$ is the Axiom of Choice. The only selection made is over the finite index set $\sigma(q)$ at step 4.1.

**The hypothesis "finitely many" is not removable by this argument.** The induction runs on $\mathbb{N}$ and gives nothing about an infinite index set; [[thm-tychonoff]], later on this page, handles that case and pays the Axiom of Choice for it.
````

### `thm-ordinal-spaces-and-compactness`

````markdown
---
id: thm-ordinal-spaces-and-compactness
kind: theorem
title: "Every successor ordinal is compact in its order topology and every limit ordinal is not; and, assuming countable choice, $\\omega_1$ is countably compact and sequentially compact while $\\omega_1 + 1$ is compact"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [lem-the-order-topology-on-an-ordinal, def-compact-space, def-compactness-variants, thm-compactness-variants-hierarchy, def-order-topology-on-a-linearly-ordered-set, def-topology-basis-subbasis, def-ordinal, lem-ordinal-basics, lem-ordinal-trichotomy, def-limit-ordinal, def-ordinal-addition, def-first-uncountable-ordinal, thm-omega-one-is-the-least-uncountable-ordinal, thm-countable-subsets-of-omega-one-are-bounded, def-countable-choice, def-countable, lem-countable-iff-surjection-from-n, lem-subset-of-countable, def-sequence-convergence-top, def-sequence, lem-index-map-grows, thm-transfinite-induction, def-topological-space]
justified_by: []
aliases: [thm-ordinal-space-compactness]
landmark: true
short: "compactness of ordinal spaces"
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
    - title: "Order topology (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Order_topology"
    - title: "First uncountable ordinal (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/First_uncountable_ordinal"
    - title: "Countably compact space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Countably_compact_space"
pipeline_run: null
---

## Statement

Every ordinal carries the order topology of the membership order on it
([[def-ordinal]], [[def-order-topology-on-a-linearly-ordered-set]]), with the
clopen basis $\mathcal{B}_\gamma$ of
[[lem-the-order-topology-on-an-ordinal]]. Then:

1. **Successors are compact.** For every ordinal $\delta$ the successor ordinal
   $\delta^{+}$ is compact ([[def-compact-space]]).
2. **Limits are not.** No limit ordinal ([[def-limit-ordinal]]) is compact.
3. **Assuming the Axiom of Countable Choice** ([[def-countable-choice]]): the
   first uncountable ordinal $\omega_1$ ([[def-first-uncountable-ordinal]]) is
   sequentially compact and countably compact ([[def-compactness-variants]]),
   and it is not compact; while $\omega_1 + 1$ is compact
   ([[def-ordinal-addition]]).

Claims 1 and 2 are theorems of ZF. Claim 3 spends countable choice twice, both
times through cited results that carry the hypothesis in their own statements:
[[thm-countable-subsets-of-omega-one-are-bounded]], which supplies the
boundedness of at most countable subsets of $\omega_1$, and claim 2 of
[[thm-compactness-variants-hierarchy]], which converts sequential compactness
into countable compactness; the extraction of a subsequence below selects
nothing, taking least elements throughout.

## Facts & Assumptions

**Given:** Ordinals with their order topologies, and the notation $[0,\beta]$, $(\alpha,\beta]$ of [[lem-the-order-topology-on-an-ordinal]].

[A1] The Axiom of Countable Choice, for claim 3 only ([[def-countable-choice]]).

[L1] A space is compact when every open cover has a finite subcover ([[def-compact-space]], [[def-topological-space]]).

[L2] On an ordinal $\gamma$ the sets $[0,\beta]$ and $(\alpha,\beta]$ with $\alpha, \beta \in \gamma$ are clopen and form a basis $\mathcal{B}_\gamma$, so every open $U$ and every $\eta \in U$ admit a member of $\mathcal{B}_\gamma$ between them ([[lem-the-order-topology-on-an-ordinal]], claim 1; [[def-topology-basis-subbasis]]).

[L3] Ordinals are linearly ordered by membership; $\beta < \alpha$ holds exactly when $\beta^{+} \le \alpha$; a nonempty set of ordinals has a least element, and a nonempty set listed as $\{\beta_0, \dots, \beta_n\}$ has a greatest, by induction on $n$ using trichotomy; and $\beta \in \lambda$ with $\lambda$ a limit ordinal gives $\beta^{+} \in \lambda$ ([[def-ordinal]], [[lem-ordinal-basics]], [[lem-ordinal-trichotomy]], [[def-limit-ordinal]]).

[L4] Transfinite induction: if $S$ is a subset of a well-ordered set $W$ containing every $a$ all of whose strict predecessors lie in $S$, then $S = W$ ([[thm-transfinite-induction]]).

[L5] $\omega_1$ is the least uncountable ordinal, it is a limit ordinal, and every ordinal below it is at most countable ([[def-first-uncountable-ordinal]], [[thm-omega-one-is-the-least-uncountable-ordinal]], [[def-countable]]).

[L6] Assuming $\mathrm{AC}_\omega$, every at most countable $A \subseteq \omega_1$ satisfies $\sup A = \bigcup A \in \omega_1$ ([[thm-countable-subsets-of-omega-one-are-bounded]], claim (a)).

[L7] The range of a function with domain $\mathbb{N}$ is at most countable ([[lem-countable-iff-surjection-from-n]], [[def-countable]]).

[L8] An infinite subset $P \subseteq \mathbb{N}$ carries a strictly increasing enumeration $i \mapsto m_i$ of $\mathbb{N}$ onto $P$, built by taking least elements and using no choice principle; and a strictly increasing index map satisfies $m_i \ge i$ ([[lem-subset-of-countable]], [[lem-index-map-grows]]).

[L9] A sequence in a space is a function on $\mathbb{N}$, and $y_k \to p$ means that every open set containing $p$ contains $y_k$ from some index on; a subsequence is given by a strictly increasing index map ([[def-sequence-convergence-top]], [[def-sequence]]).

[L10] Assuming $\mathrm{AC}_\omega$, a sequentially compact space is countably compact ([[thm-compactness-variants-hierarchy]], claim 2; [[def-compactness-variants]]).

[L11] $\alpha + 1 = \alpha^{+}$ for every ordinal $\alpha$ ([[def-ordinal-addition]]).

## Proof

**Proof technique:** direct.

1.1 For claim 1 let $\gamma := \delta^{+}$, so that $\delta$ is the greatest element of $\gamma$ and $[0,\delta] = \gamma$; let $\mathcal{U}$ be an open cover of $\gamma$ and put $S := \{\, \eta \in \gamma : \text{finitely many members of } \mathcal{U} \text{ cover } [0,\eta] \,\}$. [L1, L3, construct]

1.2 For claim 2 let $\lambda$ be a limit ordinal; the family $\{\, [0,\beta] : \beta \in \lambda \,\}$ consists of open sets by [L2] and covers $\lambda$, since $\xi \in [0,\xi]$ for every $\xi \in \lambda$. [L2, L3]

1.3 For claim 3 assume $\mathrm{AC}_\omega$ and let $(y_k)$ be a sequence in $\omega_1$; its range is at most countable by [L7], so [L6] gives $\sigma := \sup\{\, y_k : k \in \mathbb{N} \,\} \in \omega_1$, and the set $\{\, k \in \mathbb{N} : y_k \le \sigma \,\}$ is all of $\mathbb{N}$ and in particular infinite. [A1, L6, L7]

2.1 Let $\eta \in \gamma$ and suppose $[0,\zeta]$ is covered by finitely many members of $\mathcal{U}$ for every $\zeta < \eta$. Some $U \in \mathcal{U}$ contains $\eta$, and [L2] gives $B \in \mathcal{B}_\gamma$ with $\eta \in B \subseteq U$. If $B = [0,\beta]$ then $\eta \le \beta$ and $[0,\eta] \subseteq [0,\beta] \subseteq U$, so $\{U\}$ covers $[0,\eta]$. If $B = (\alpha,\beta]$ then $\alpha < \eta \le \beta$, and $[0,\eta] \subseteq [0,\alpha] \cup (\alpha,\eta] \subseteq [0,\alpha] \cup U$ by [L3], so a finite cover of $[0,\alpha]$ with $U$ adjoined covers $[0,\eta]$. Either way $\eta \in S$. [L2, L3, step 1.1]

2.2 A finite subfamily of the cover of step 1.2 is empty, and then covers only $\varnothing \ne \lambda$, or is $[0,\beta_0], \dots, [0,\beta_n]$ with union $[0,\beta]$ for $\beta$ the greatest of the $\beta_j$, which exists by [L3]; and $\beta^{+} \in \lambda$ by [L3] while $\beta^{+} \notin [0,\beta]$. So no finite subfamily covers $\lambda$ and $\lambda$ is not compact, which is claim 2. [L1, L3, step 1.2]

2.3 By [L5] and [L6] the set $\{\, \xi \in \omega_1 : \{k : y_k \le \xi\} \text{ is infinite} \,\}$ is a nonempty set of ordinals, $\sigma$ belonging to it by step 1.3, so it has a least element $\tau$ by [L3]; then $P := \{\, k \in \mathbb{N} : y_k \le \tau \,\}$ is infinite while $\{\, k : y_k \le \alpha \,\}$ is finite for every $\alpha < \tau$. [L3, L5, step 1.3]

3.1 By [L4] applied to the well-ordered $\gamma$, step 2.1 gives $S = \gamma$; in particular $\delta \in S$, so finitely many members of $\mathcal{U}$ cover $[0,\delta] = \gamma$. As $\mathcal{U}$ was arbitrary, $\gamma = \delta^{+}$ is compact, which is claim 1. [L1, L4, step 1.1, step 2.1]

3.2 Let $i \mapsto m_i$ be the strictly increasing enumeration of $P$ given by [L8]; then $(y_{m_i})$ is a subsequence of $(y_k)$ by [L9], and every one of its terms satisfies $y_{m_i} \le \tau$. [L8, L9, step 2.3]

4.1 $y_{m_i} \to \tau$. Let $U$ be open with $\tau \in U$ and take $B \in \mathcal{B}_{\omega_1}$ with $\tau \in B \subseteq U$ by [L2]. If $B = [0,\beta]$ then $\tau \le \beta$ and every term satisfies $y_{m_i} \le \tau \le \beta$, so all terms lie in $B$. If $B = (\alpha,\beta]$ then $\alpha < \tau \le \beta$, the set $\{k : y_k \le \alpha\}$ is finite by step 2.3, so $\{\, i : y_{m_i} \le \alpha \,\}$ is finite, the map $i \mapsto m_i$ being injective; hence $\alpha < y_{m_i} \le \tau \le \beta$ for all large $i$ and the terms lie in $B$ from some index on. So $\omega_1$ is sequentially compact. [L2, L9, step 2.3, step 3.2]

5.1 By [L10] the space $\omega_1$ is therefore countably compact; it is not compact by step 2.2, being a limit ordinal by [L5]; and $\omega_1 + 1 = \omega_1^{+}$ is compact by step 3.1 and [L11]. This is claim 3, and with claims 1 and 2 at steps 3.1 and 2.2 the theorem is proved. [L5, L10, L11, step 2.2, step 3.1, step 4.1] ∎

## Remarks

**Why claim 1 is a transfinite induction and not an ordinary one.** The statement being proved at $\eta$ uses the statement at $\alpha$ for a single $\alpha < \eta$ produced by the cover, not at the predecessor of $\eta$, and $\eta$ may have no predecessor. What the induction of [L4] gives is exactly the right shape: the step assumes the statement below $\eta$ and proves it at $\eta$, with no separate limit clause to write.

**$\omega_1$ separates sequential compactness from compactness.** It is sequentially compact and countably compact and not compact, so neither of those two properties implies compactness; that is the content of [[fs-sequentially-compact-implies-compact]] and [[fs-countably-compact-implies-compact]], both of which take their witness from here. The reason is visible in the proof: countably many terms cannot escape from $\omega_1$, because a countable set of countable ordinals has a countable supremum, while the uncountable cover by the initial segments has no finite subfamily covering everything.

**The hypothesis of countable choice is inherited, not added.** It enters through two cited results whose own statements carry it — [[thm-countable-subsets-of-omega-one-are-bounded]] at the boundedness step, and claim 2 of [[thm-compactness-variants-hierarchy]] at the passage from sequential to countable compactness; the boundedness of an at most countable subset of $\omega_1$ is what claim 3 rests on, and everything else in the argument takes least elements.
````

### `thm-positive-heredity-of-separation-axioms`

````markdown
---
id: thm-positive-heredity-of-separation-axioms
kind: theorem
title: "$T_0$, $T_1$, $T_2$, regularity, $T_3$, complete regularity, and Tychonoffness are hereditary"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [lem-t0-t1-and-hausdorff-are-hereditary, lem-regularity-is-hereditary, lem-complete-regularity-is-hereditary, def-regular-and-t3-spaces, def-completely-regular-and-tychonoff-spaces]
aliases: []
landmark: true
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
  references:
    - title: "J. P. May, An Outline Summary of Basic Point Set Topology, §6"
      url: "https://math.uchicago.edu/~may/FINITE/REUNotes2010/Topology10.pdf"
    - title: "Separation axiom (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Separation_axiom"
pipeline_run: null
---

## Statement

Each of $T_0$, $T_1$, Hausdorffness ($T_2$), regularity, $T_3$, complete regularity, and Tychonoffness is hereditary.

## Facts & Assumptions

**Given:** A subspace of a space with one of the listed separation properties.

[L1] $T_0$, $T_1$, and Hausdorffness are hereditary ([[lem-t0-t1-and-hausdorff-are-hereditary]]).

[L2] Regularity and complete regularity are hereditary ([[lem-regularity-is-hereditary]], [[lem-complete-regularity-is-hereditary]]).

[F1] $T_3$ means regular plus $T_1$, and Tychonoff means completely regular plus $T_1$ ([[def-regular-and-t3-spaces]], [[def-completely-regular-and-tychonoff-spaces]]).

## Proof

**Proof technique:** direct.

1.1 The first three assertions are [L1], and regularity and complete regularity are [L2]. [L1, L2]

1.2 A subspace of a $T_3$ space is regular by [L2] and $T_1$ by [L1], hence is $T_3$. [F1, L1, L2]

1.3 A subspace of a Tychonoff space is completely regular by [L2] and $T_1$ by [L1], hence is Tychonoff. [F1, L1, L2]

2.1 These cover every property named in the statement. [step 1.1, step 1.2, step 1.3] ∎
````

### `thm-positive-productivity-of-separation-axioms`

````markdown
---
id: thm-positive-productivity-of-separation-axioms
kind: theorem
title: "$T_0$, $T_1$, $T_2$, regularity, $T_3$, complete regularity, and Tychonoffness are productive"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [lem-products-preserve-t0-t1-and-hausdorff, lem-products-preserve-regularity, lem-products-preserve-complete-regularity, def-regular-and-t3-spaces, def-completely-regular-and-tychonoff-spaces]
aliases: []
landmark: true
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
  references:
    - title: "J. P. May, An Outline Summary of Basic Point Set Topology, §6"
      url: "https://math.uchicago.edu/~may/FINITE/REUNotes2010/Topology10.pdf"
    - title: "Separation axiom (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Separation_axiom"
pipeline_run: null
---

## Statement

Each of $T_0$, $T_1$, Hausdorffness ($T_2$), regularity, $T_3$, complete regularity, and Tychonoffness is productive.

## Facts & Assumptions

**Given:** A family of spaces having one of the listed separation properties.

[L1] Arbitrary products preserve $T_0$, $T_1$, Hausdorffness, regularity, and complete regularity as stated in the three preceding lemmas ([[lem-products-preserve-t0-t1-and-hausdorff]], [[lem-products-preserve-regularity]], [[lem-products-preserve-complete-regularity]]).

[F1] $T_3$ is regular plus $T_1$, and Tychonoff is completely regular plus $T_1$ ([[def-regular-and-t3-spaces]], [[def-completely-regular-and-tychonoff-spaces]]).

## Proof

**Proof technique:** direct.

1.1 The assertions for $T_0$, $T_1$, $T_2$, regularity, and complete regularity are [L1]. [L1]

1.2 A product of $T_3$ spaces is regular and $T_1$ by [L1], hence is $T_3$. [F1, L1]

1.3 A product of Tychonoff spaces is completely regular and $T_1$ by [L1], hence is Tychonoff. [F1, L1]

2.1 Therefore every property in the statement is productive. [step 1.1, step 1.2, step 1.3] ∎
````

