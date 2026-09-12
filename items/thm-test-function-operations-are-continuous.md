---
id: "thm-test-function-operations-are-continuous"
kind: "theorem"
title: "Test function operations are continuous"
deps: ["lem-test-function-lf-topology-universal-property", "def-ck-and-multi-index-notation-in-several-variables", "thm-chain-rule-for-total-derivatives", "thm-symmetry-of-higher-mixed-partials"]
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
    - url: "https://math.mit.edu/~dyatlov/18.155/155-notes.pdf"
      title: "Semyon Dyatlov, Lecture notes for 18.155 (2022)"
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

In ZF the following linear maps are continuous for the LF test-function topologies: $\partial^\alpha:\mathcal D(\Omega)\to\mathcal D(\Omega)$; multiplication by a fixed $a\in C^\infty(\Omega)$; translation $T_h\varphi(x)=\varphi(x-h)$ from $\mathcal D(\Omega)$ to $\mathcal D(\Omega+h)$; and composition $C_F\varphi=\varphi\circ F$ from $\mathcal D(V)$ to $\mathcal D(U)$ for a smooth diffeomorphism $F:U\to V$. Here smooth complex functions mean componentwise smooth real and imaginary parts. The translation and composition maps are topological isomorphisms. No joint continuity in varying $a$ or $h$ is asserted here.

## Facts & Assumptions

[F1] A linear map out of $\mathcal D$ is continuous exactly when its restrictions to all $\mathcal D_K$ are continuous; fixed-support inclusions are continuous ([[lem-test-function-lf-topology-universal-property]]).

[F2] Ordered partial derivatives and smoothness have the conventions of [[def-ck-and-multi-index-notation-in-several-variables]].

[F3] The total chain rule holds for differentiable Euclidean maps ([[thm-chain-rule-for-total-derivatives]]).

[F4] Continuous higher mixed partials commute ([[thm-symmetry-of-higher-mixed-partials]]).

## Proof

**Given:** the maps and domains of the statement, and a fixed compact source support $K$.

1.1 Differentiation does not enlarge support, and F4 gives $p_m(\partial^\alpha\varphi)\le p_{m+|\alpha|}(\varphi)$. Thus it is continuous on each fixed-support space. For products the one-coordinate product rule follows by subtracting $a(x)\varphi(x)$ from $a(x+te_i)\varphi(x+te_i)$, inserting $a(x+te_i)\varphi(x)$ and dividing by $t$; continuity and the derivative limits give the two terms. Induction using F4 and Pascal's identity then gives [given, F2, F4, algebra]
$$\partial^\beta(a\varphi)=\sum_{\gamma\le\beta}\binom\beta\gamma (\partial^\gamma a)(\partial^{\beta-\gamma}\varphi).$$
All derivatives of $a$ through order $m$ are bounded on compact $K$, so $p_m(a\varphi)\le 2^m A_{m,K}p_m(\varphi)$, where $A_{m,K}=\max_{|\gamma|\le m}\sup_K|\partial^\gamma a|$. Support again stays in $K$. [given, F2, F4, algebra]

2.1 Translation takes support into $K+h$ and preserves each derivative supremum. Its inverse is $T_{-h}$. Composition takes support into $L=F^{-1}(K)$, compact because it is the image of $K$ under the continuous inverse. The first derivative formula is $\partial_i(\varphi\circ F)=\sum_j(\partial_j\varphi)\circ F\,\partial_i F_j$, by F3. Inductively, each derivative of order $\ell\le m$ is a finite sum of $(\partial^\beta\varphi)\circ F$, $|\beta|\le\ell$, times products of derivatives of $F$ of orders at most $\ell$: differentiating a term either differentiates its coefficient by the product rule of step 1.1 or raises $\beta$ by a coordinate using the first derivative formula. All coefficients are bounded on $L$, so $p_{m,L}(\varphi\circ F)\le C_{m,K,F}p_{m,K}(\varphi)$ for a finite constant. [step 1.1, F2, F3, F4]

3.1 The bounds in steps 1.1 and 2.1 prove continuity from each source stage into the indicated target stage. Composing with its continuous inclusion and applying F1 proves all asserted LF continuities. Apply the composition argument to $F^{-1}$ and the translation argument to $-h$ for continuous inverses. Empty support gives the zero test and all bounds hold with zero left side; the zero multi-index gives the identity map. Only finitely many derivative bounds are used for each estimate, so no choice axiom is needed. $\square$ [step 1.1, step 2.1, F1]
