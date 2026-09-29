---
id: cex-h0-not-euler-characteristic-before-serre-vanishing
kind: counterexample
title: "h0 differs from the Euler characteristic before vanishing"
status: published
origin: pipeline
pipeline_run: frontier-36-complete
deps:
  - def-axiom-of-choice
  - def-coherent-module-scheme
  - def-euler-characteristic-coherent-sheaf
  - def-field
  - def-hilbert-function-sheaf-projective
  - def-invertible-sheaf
  - def-relative-projective-space-standard-charts
  - def-sheaf-cohomology-derived-global-sections
  - def-sheaf-tensor-product
  - def-twist-quasi-coherent-sheaf-projective
  - def-twisting-sheaf-proj
  - ex-cohomology-o-d-projective-line-all-d
  - thm-twisting-sheaf-invertible-standard-graded
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  references:
    - title: "The Stacks Project, Cohomology of Schemes, Chapter 30, Sections 30.2-30.22"
      url: "https://stacks.math.columbia.edu/download/coherent.pdf"
    - title: "Ravi Vakil, The Rising Sea (29 August 2022), Sections 19.1, 19.6, 19.9, 28.1-28.2"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf"
---

## Statement refuted

The Hilbert function of a coherent sheaf need not agree with its
Euler-characteristic function away from large twists; the equality asserted
for $m\gg0$ cannot be extended to all $m$. Let $k$ be a field
([[def-field]]) and let $X=\mathbb P^1_k$ carry the fixed embedding
$i=\operatorname{id}:X\hookrightarrow\mathbb P^1_k$ of the convention of
[[def-hilbert-function-sheaf-projective]], so that
$\mathcal O_X(1)=\mathcal O_X(1)$ is the twisting sheaf
([[def-relative-projective-space-standard-charts]],
[[def-twisting-sheaf-proj]]) and for a coherent $\mathcal G$ and
$m\in\mathbb Z$ the twist is
$\mathcal G(m)=\mathcal G\otimes_{\mathcal O_X}\mathcal O_X(1)^{\otimes m}$
([[def-twist-quasi-coherent-sheaf-projective]],
[[def-sheaf-tensor-product]]). Take
$$\mathcal F=\mathcal O_X(-2),$$
a coherent invertible $\mathcal O_X$-module ([[def-invertible-sheaf]],
[[def-coherent-module-scheme]]). Then, with
$h_{\mathcal F}(m)=\dim_kH^0(X,\mathcal F(m))$ and
$P_{\mathcal F}(m)=\chi(X,\mathcal F(m))$
([[def-sheaf-cohomology-derived-global-sections]],
[[def-euler-characteristic-coherent-sheaf]]):

- $h_{\mathcal F}(0)=\dim_kH^0(X,\mathcal O_X(-2))=0$, while
  $P_{\mathcal F}(0)=\chi(X,\mathcal O_X(-2))=-1$, because
  $h^1=\dim_kH^1(X,\mathcal O_X(-2))=1$;
- more generally $h_{\mathcal F}(m)=\max(m-1,0)$ and
  $P_{\mathcal F}(m)=m-1$ for every $m\in\mathbb Z$, so the two functions
  differ precisely at the twists $m\le0$, while the polynomial $q(t)=t-1$
  agrees with $P_{\mathcal F}$ at every integer.

Thus the Hilbert function need not equal the Hilbert polynomial at negative
twists. The field $k$ is arbitrary, including $k=\mathbb F_2$; $\mathcal F$
is nonzero.

## Facts & Assumptions
**Given:** The Axiom of Choice as inherited, a field $k$, the projective line $X=\mathbb P^1_k$ with its standard embedding, and the sheaf $\mathcal F=\mathcal O_X(-2)$.

[F1] Conventions: with the fixed embedding of the statement, every twist $\mathcal G(m)$ of a coherent $\mathcal G$ is coherent, and $$h_{\mathcal G}(m)=\dim_kH^0(X,\mathcal G(m)),\qquad P_{\mathcal G}(m)=\chi(X,\mathcal G(m))=\sum_{q\ge0}(-1)^q\dim_kH^q(X,\mathcal G(m))$$ are defined for every $m\in\mathbb Z$; a polynomial $q\in\mathbb Q[t]$ with $q(m)=P_{\mathcal G}(m)$ for all $m$ is a Hilbert polynomial of $\mathcal G$. ([[def-hilbert-function-sheaf-projective]], [[def-sheaf-cohomology-derived-global-sections]], [[def-euler-characteristic-coherent-sheaf]], [[def-coherent-module-scheme]])

[F2] Twisting sheaves multiply: on the projective line with its twisting sheaves $\mathcal O_X(d)$ one has $\mathcal O_X(a)\otimes_{\mathcal O_X}\mathcal O_X(b)\cong\mathcal O_X(a+b)$ for all $a,b\in\mathbb Z$, and each $\mathcal O_X(d)$ is invertible, so the twist of $\mathcal F=\mathcal O_X(-2)$ is $\mathcal F(m)\cong\mathcal O_X(m-2)$. ([[thm-twisting-sheaf-invertible-standard-graded]], [[def-twisting-sheaf-proj]], [[def-invertible-sheaf]], [[def-sheaf-tensor-product]], [[def-twist-quasi-coherent-sheaf-projective]])

[F3] Cohomology of twists on $\mathbb P^1$: for every field $k$ and every $d\in\mathbb Z$, writing $h^q=\dim_kH^q(\mathbb P^1_k,\mathcal O_X(d))$, one has $h^0=\max(d+1,0)$, $h^1=\max(-d-1,0)$ and $\chi(\mathbb P^1_k,\mathcal O_X(d))=d+1$, all higher cohomology vanishing. ([[ex-cohomology-o-d-projective-line-all-d]], [[def-euler-characteristic-coherent-sheaf]], [[def-sheaf-cohomology-derived-global-sections]])

[F4] The Axiom of Choice is the choice principle named in the statement, inherited from the cohomology and finiteness suppliers cited in [F1] and [F3]. ([[def-axiom-of-choice]])

[F5] The two standard affine charts of $\mathbb P^1_k$ have coordinate rings
$k[t]$ and $k[u]$ ([[def-relative-projective-space-standard-charts]]). Each is
Noetherian: for a nonzero ideal, choose a nonzero polynomial of least degree;
cancel the leading term of any other member by a multiple of that polynomial,
and repeat until the remainder has smaller degree, hence is zero. Thus every
ideal is principal. On this locally Noetherian scheme, an invertible sheaf is
locally free of rank one and therefore coherent by the local kernel criterion
of [[def-coherent-module-scheme]] ([[def-invertible-sheaf]]).

## Counterexample

**Proof technique:** direct: insert $d=m-2$ into the explicit two-dimensional cohomology computation on $\mathbb P^1$, using the multiplicativity of twisting sheaves to identify the twist of $\mathcal O_X(-2)$ with $\mathcal O_X(m-2)$, and compare the two functions at the twist $m=0$ and at negative twists.

1.1 Identification of the twists. The projective line is locally Noetherian by [F5], and $\mathcal F=\mathcal O_X(-2)$ is invertible by [F2], so [F5] establishes that this concrete $\mathcal F$ is coherent. By [F2] its twist is $\mathcal F(m)\cong\mathcal O_X(-2)\otimes\mathcal O_X(m)\cong\mathcal O_X(m-2)$ for every $m\in\mathbb Z$; the twist remains coherent by [F1]. [F1, F2, F5]

1.2 The two functions. Fix $m\in\mathbb Z$ and apply [F3] with $d=m-2$, using the identification of 1.1: $$h_{\mathcal F}(m)=\dim_kH^0(X,\mathcal O_X(m-2))=\max(m-1,0),$$ $$P_{\mathcal F}(m)=\chi(X,\mathcal O_X(m-2))=(m-2)+1=m-1.$$ In particular, at $m=0$ one gets $h_{\mathcal F}(0)=\max(-1,0)=0$ and $P_{\mathcal F}(0)=-1$, the latter because $h^1=\max(1,0)=1$ in [F3]. [F1, F3, 1.1]

1.3 The polynomial and the comparison. The polynomial $q(t)=t-1\in\mathbb Q[t]$ satisfies $q(m)=m-1=P_{\mathcal F}(m)$ for every $m\in\mathbb Z$ by 1.2, so it is an Euler-characteristic polynomial of $\mathcal F$ in the sense of [F1], and $q(0)=-1$. Since $h_{\mathcal F}(m)=\max(m-1,0)$ while $q(m)=m-1$, the two functions agree exactly for $m\ge1$ and differ for every $m\le0$; no polynomial in $\mathbb Q[t]$ can agree with $h_{\mathcal F}$ at all integers, because such a polynomial would have to agree with $q$ at the infinitely many $m\ge1$ and hence equal $q$, contradicting $h_{\mathcal F}(0)\ne q(0)$. [F1, 1.2, algebra]

2.1 Boundaries and choice. The field $k$ is arbitrary, including $k=\mathbb F_2$ where $1/(x_0x_1)$ and the signs of the alternating sum still make sense; the sheaf $\mathcal F=\mathcal O_X(-2)$ is nonzero of support $X$, so neither the empty scheme nor the zero sheaf is involved. The endpoint $m=0$ is the exhibited disagreement, the endpoints $m\le0$ are all covered by 1.3, and the twist conventions for negative powers of an invertible sheaf are those of [F1] and [F2]. The Axiom of Choice is inherited through [F4] and the suppliers of [F1] and [F3]; no further selection is made. [F1, F2, F3, F4, 1.3] ∎
