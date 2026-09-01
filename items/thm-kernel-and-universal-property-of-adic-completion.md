---
id: thm-kernel-and-universal-property-of-adic-completion
kind: theorem
title: "Kernel and universal property of adic completion"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-adic-completion-of-a-module, def-adic-topology-on-a-module, def-separated-and-complete-filtered-module, thm-universal-property-of-an-inverse-limit-of-modules]
aliases: []
proof_strategy: direct
verification:
  audited: 2026-09-01
  precheck: pass
sources:
  scraped: []
  references:
    - title: "A. Altman and S. Kleiman, A Term of Commutative Algebra, 13th ed., §22.1 and §22.5"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
    - title: "The Stacks Project, Lemma 10.96.5"
      url: "https://stacks.math.columbia.edu/tag/00M9"
pipeline_run: null
---

## Statement

Let $R$ be a commutative ring, let $I \subseteq R$ be an ideal, and let $M$ be
an $R$-module.

1. The kernel of the completion map
   $$\kappa_M \colon M \to \widehat M$$
   is
   $$\bigcap_{n \ge 0} I^nM.$$
   In particular, $\kappa_M$ is injective exactly when $M$ is $I$-adically
   separated.
2. If $N$ is an $I$-adically complete $R$-module, then every $R$-linear map
   $f \colon M \to N$ factors uniquely through $\kappa_M$ by a continuous map
   when $N$ has its $I$-adic topology and $\widehat M$ has the inverse-limit
   topology whose basic neighbourhoods of $0$ are
   $$K_n:=\ker(\widehat M\to M/I^nM)\qquad(n\ge1).$$
   Thus there is a unique continuous $R$-linear map
   $\widehat f \colon \widehat M \to N$ with
   $\widehat f \circ \kappa_M = f$.

## Facts & Assumptions

**Given:** A commutative ring $R$, an ideal $I \subseteq R$, an $R$-module $M$,
and for part 2 an $I$-adically complete $R$-module $N$ together with an
$R$-linear map $f \colon M \to N$.

[L1] The $I$-adic completion is
$$\widehat M=\varprojlim M/I^nM$$
with completion map $m \mapsto (m \bmod I^nM)_n$
([[def-adic-completion-of-a-module]]).

[L2] An $I$-adically complete module is separated and its canonical map to the
inverse limit of its quotients is an isomorphism
([[def-separated-and-complete-filtered-module]]).

[L3] The $I$-adic topology has the submodules $I^nN$ as a neighbourhood basis
of $0$ ([[def-adic-topology-on-a-module]]).

[L4] Compatible maps into an inverse limit factor uniquely through it
([[thm-universal-property-of-an-inverse-limit-of-modules]]).

## Proof

**Proof technique:** direct.

1.1 The completion map $\kappa_M$ is the unique map into the inverse limit of [L1] whose $n$th component, for $n\ge1$, is the quotient map $$q_n \colon M \to M/I^nM.$$ [L1, L4]

1.2 An element lies in $\ker(\kappa_M)$ exactly when every quotient map $q_n$, $n\ge1$, kills it, equivalently when it belongs to every $I^nM$ for $n\ge1$. Since $I^0M=M$, this gives $$\ker(\kappa_M)=\bigcap_{n\ge 1} I^nM=\bigcap_{n\ge0}I^nM.$$ [L1, algebra]

1.3 Let $f \colon M \to N$ be $R$-linear with $N$ complete. Since $f$ is $R$-linear, one has $$f(I^nM)\subseteq I^nN$$ for every $n\ge1$, so $f$ induces maps $$f_n \colon M/I^nM \to N/I^nN.$$ These maps are compatible with the quotient transition maps. [given, algebra]

1.4 By [L4], the compatible family $(f_n)$ yields a unique map $$\widetilde f \colon \widehat M \to \varprojlim N/I^nN$$ such that the $n$th projection of $\widetilde f\kappa_M$ is $f_nq_n$. These are also the coordinates of $\kappa_Nf$, so uniqueness in [L4] gives $$\widetilde f\kappa_M=\kappa_Nf.$$ [L1, L4]

1.5 The image of $\kappa_M$ is dense for the inverse-limit topology. Indeed, for $x\in\widehat M$ and $n\ge1$, choose $m\in M$ representing $\pi_n^M(x)\in M/I^nM$; then $x-\kappa_M(m)\in K_n$. Now let $g:\widehat M\to N$ be continuous and vanish on $\kappa_M(M)$. If $g(x)\ne0$, separatedness of $N$ from [L2] gives $n$ with $g(x)\notin I^nN$. The inverse image $$g^{-1}(g(x)+I^nN)$$ is an open neighbourhood of $x$ by [L3], so density gives some $\kappa_M(m)$ in it. But $g\kappa_M(m)=0$, which would put $g(x)$ in $I^nN$, a contradiction. Hence $g=0$. Applying this to the difference of two continuous extensions proves uniqueness. [L2, L3, choose, algebra]

2.1 The last equality shows that $\kappa_M$ is injective exactly when $\bigcap_{n\ge 0} I^nM=0$, which is exactly the definition of being $I$-adically separated. [step 1.2, L2]

2.2 Write $\pi_n^M:\widehat M\to M/I^nM$ and $\pi_n^N:\varprojlim N/I^nN\to N/I^nN$. Step 1.4 gives $$\pi_n^N\widetilde f=f_n\pi_n^M,$$ so $\widetilde f(K_n)\subseteq\ker(\pi_n^N)$ for every $n\ge1$. Hence $\widetilde f$ is continuous for the two inverse-limit topologies. Because $N$ is complete, [L2] identifies $$\kappa_N:N\xrightarrow{\sim}\varprojlim N/I^nN;$$ under this isomorphism the preimage of $\ker(\pi_n^N)$ is $I^nN$, so [L3] makes $\kappa_N$ a homeomorphism from the $I$-adic topology to the inverse-limit topology. Thus $$\widehat f:=\kappa_N^{-1}\widetilde f:\widehat M\to N$$ is continuous and satisfies $\widehat f\kappa_M=f$. [L2, L3, step 1.4, algebra]

3.1 Parts 1 and 2 are proved by steps 1.2, 1.5, 2.1, and 2.2. [step 1.2, step 1.5, step 2.1, step 2.2] ∎
