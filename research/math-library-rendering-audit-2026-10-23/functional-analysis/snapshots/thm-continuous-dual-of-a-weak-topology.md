---
id: "thm-continuous-dual-of-a-weak-topology"
kind: "theorem"
title: "Continuous dual of a weak topology"
deps: ["lem-basic-weak-neighborhoods", "cor-linear-maps-with-finite-dimensional-domain-are-bounded"]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: "Bühler–Salamon, Functional Analysis (2017); exact harvest in batch coverage"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21!12_02_01_AM.pdf"
    - title: "Teschl, Topics in Real and Functional Analysis (2017); exact harvest in batch coverage"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

For a real or complex normed space $X$, the scalar-linear continuous dual of $(X,\sigma(X,X^*))$ is precisely $X^*$. No choice principle is required.

## Facts & Assumptions

[F1] Finite coordinate disks form a weak zero-neighborhood base ([[lem-basic-weak-neighborhoods]]).

[F2] A scalar-linear map on a finite-dimensional normed space is bounded ([[cor-linear-maps-with-finite-dimensional-domain-are-bounded]]).

## Proof

**Given:** a weakly continuous scalar-linear $L:X\to\mathbb K$.

1.1 Continuity at zero supplies $f_1,\ldots,f_m\in X^*$ and $\varepsilon>0$ such that $|L(v)|<1$ whenever $\max_j|f_j(v)|<\varepsilon$. If every $f_j(v)=0$, every scalar multiple $tv$ is in this neighborhood. Then $|tL(v)|<1$ for all positive real $t$, forcing $L(v)=0$. For an empty list this already gives $L=0$. [F1, given]

2.1 Define $A:X\to\mathbb K^m$ by $Av=(f_1(v),\ldots,f_m(v))$. Step 1.1 makes $\ell(Av)=L(v)$ a well-defined scalar-linear functional on $A(X)$. Choose a basis of this subspace and extend it to a basis of $\mathbb K^m$ by successively adding standard basis vectors when necessary; at most $m$ additions occur. Assign value zero on the added basis vectors. The resulting linear extension $\widetilde\ell$ has the form $\widetilde\ell(z)=\sum_{j=1}^m c_jz_j$, where $c_j=\widetilde\ell(e_j)$. Only finite-dimensional basis choices occur. [step 1.1, algebra]

3.1 By finite-dimensional boundedness $\ell$ is bounded for the inherited norm, so factorization already gives norm boundedness of $L$. More explicitly $L=\sum_jc_jf_j$ and $|L(v)|\le(\sum_j|c_j|\|f_j\|)\|v\|$, hence $L\in X^*$. Conversely, for any $f\in X^*$ and any scalar disk around $f(x)$, its inverse image is a basic weak neighborhood, so $f$ is weakly continuous. Thus both inclusions hold. $\square$ [step 2.1, F2, F1, algebra]
