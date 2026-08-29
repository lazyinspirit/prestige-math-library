---
id: thm-the-subobject-inequalities-underlying-exactness
kind: theorem
title: "The subobject inequalities underlying exactness"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-epimorphism-monomorphism-factorisation-exists-and-is-unique-up-to-unique-isomorphism,
       thm-the-image-is-the-least-subobject-through-which-a-morphism-factors,
       def-exactness-at-a-node,
       def-subobject-and-quotient-object,
       def-kernels-and-cokernels-as-equalizers-and-coequalizers]
justified_by: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-08-29
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-29
sources:
  scraped: []
  references:
    - title: "Saunders Mac Lane, Categories for the Working Mathematician, VIII.4"
      url: "https://math.mit.edu/~hrm/palestine/maclane-categories.pdf"
    - title: "David Mehrle, Category Theory, Part III, Chapter 7"
      url: "https://pi.math.cornell.edu/~dmehrle/notes/partiii/cattheory_partiii_notes.pdf"
pipeline_run: frontier-23
---

## Statement

Let
$$A\xrightarrow{f}B\xrightarrow{g}C$$
be composable morphisms in an abelian category. Choose an epi-mono factorization
$$A\xrightarrow{e}\operatorname{im}(f)\xrightarrow{m}B$$
of $f$, and choose a kernel
$$K\xrightarrow{k}B$$
of $g$.

Then:

1. $[\!m\!]\le[\!k\!]$ if and only if $g f=0$.
2. $[\!k\!]\le[\!m\!]$ if and only if every morphism $u:U\to B$ with $g u=0$
   factors through $m$.

## Facts & Assumptions

**Given:** The composable pair $A \xrightarrow{f} B \xrightarrow{g} C$, the
factorization $f = m e$ with $e$ epic and $m$ monic, and the kernel
$k:K \to B$ of $g$.

[L1] Every morphism in an abelian category admits an epimorphism-monomorphism
factorization, unique up to unique isomorphism
([[thm-epimorphism-monomorphism-factorisation-exists-and-is-unique-up-to-unique-isomorphism]]).

[L2] Subobjects are ordered by factorization of monomorphisms, and the image is
the least subobject through which the morphism factors
([[def-subobject-and-quotient-object]],
[[thm-the-image-is-the-least-subobject-through-which-a-morphism-factors]]).

[L3] The kernel $k$ satisfies $gk = 0$, and every morphism killed by $g$
factors uniquely through $k$
([[def-kernels-and-cokernels-as-equalizers-and-coequalizers]]).

## Proof

**Proof technique:** direct.

1.1 If $[\!m\!]\le[\!k\!]$, then $m = k t$ for some $t:\operatorname{im}(f)\to K$ by [L2], so $g f = g m e = g k t e = 0$ by [L3]. [L2, L3, algebra]

1.2 If $g f = 0$, then $g m e = 0$, and the epicity of $e$ from [L1] gives $g m = 0$. So [L3] gives $t:\operatorname{im}(f)\to K$ with $k t = m$, hence $[\!m\!]\le[\!k\!]$ by [L2]. [L1, L2, L3, algebra]

1.3 If $[\!k\!]\le[\!m\!]$, then $k = m s$ for some $s:K\to\operatorname{im}(f)$ by [L2]. For any $u:U\to B$ with $g u = 0$, [L3] gives $v:U\to K$ with $u = k v = m s v$, so $u$ factors through $m$. [L2, L3]

1.4 Conversely, if every $u:U\to B$ with $g u = 0$ factors through $m$, then in particular the kernel arrow $k$ does, because $g k = 0$ by [L3]. Thus $k = m s$ for some $s$, so $[\!k\!]\le[\!m\!]$ by [L2]. [L2, L3]

2.1 Steps 1.1 and 1.2 prove the first biconditional. [step 1.1, step 1.2]

3.1 Steps 1.3 and 1.4 prove the second biconditional. [step 1.3, step 1.4] ∎
