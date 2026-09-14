---
id: lem-uniform-laurent-approximation-through-bundle-automorphisms
kind: lemma
title: Uniform Laurent approximation through bundle automorphisms
status: draft
origin: pipeline
deps: [lem-normalized-clutching-data-for-bundles-over-x-times-s-two, cor-compact-domain-maps-are-uniformly-continuous, thm-continuous-implies-integrable, cor-compact-hausdorff-partitions-of-unity, lem-ac-supplies-dependent-choice-for-vector-bundle-constructions, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Hatcher, Vector Bundles & K-Theory, proof of Theorem 2.2"
      url: https://pi.math.cornell.edu/~hatcher/VBKT/VB.pdf
      locator: "Laurent approximation of clutching families, printed pp.43–44"
---

## Statement

Assume AC. Let $X$ be compact Hausdorff and let $f$ be a normalized
automorphism of $\operatorname{pr}_X^*E$ on $X\times S^1$. Then $f$ is
homotopic through normalized automorphisms to a finite Laurent-polynomial
family in the circle coordinate in local bundle charts. The coefficient
endomorphisms vary continuously with $x$, and a finite partition of unity
combines the local approximations. The approximation can be chosen uniformly
close enough that the whole straight-line homotopy remains invertible.
If two normalized clutching maps are homotopic through normalized
automorphisms, normalized Laurent approximations of their endpoints can be
joined by a normalized Laurent-polynomial homotopy.

## Facts & Assumptions

**Given:** AC, compact Hausdorff $X$, a finite-rank complex bundle $E\to X$,
and normalized $f$ as in the statement.

[F1] The normalization and clutching conventions are those of
[[lem-normalized-clutching-data-for-bundles-over-x-times-s-two]].

[F2] A continuous map from a nonempty compact Hausdorff space to a uniform
space is uniformly continuous
([[cor-compact-domain-maps-are-uniformly-continuous]]).

[F3] Continuous real functions on a compact interval are Riemann integrable
([[thm-continuous-implies-integrable]]); complex matrix entries are integrated
by real and imaginary parts.

[F4] Under AC and DC, finite subordinate partitions exist on compact Hausdorff
spaces ([[cor-compact-hausdorff-partitions-of-unity]]).

[F5] AC supplies the DC required by [F4]
([[lem-ac-supplies-dependent-choice-for-vector-bundle-constructions]]).

[A1] AC is spent through [F5] in the cited partition result; the integrability
supplier [F3] is used with its published hypotheses as stated.

## Proof

**Proof technique:** direct.

1.1 Fix a bundle chart over an open $U\subseteq X$ whose closure is compact and lies in a larger chart. For an integer $N\geq1$, use the Fejér kernel $K_N(t)=N^{-1}|1+e^{it}+\cdots+e^{i(N-1)t}|^2$. It is nonnegative, has integral $2\pi$, and expands as $\sum_{|j|<N}(1-|j|/N)e^{ijt}$. Entrywise integration in [F3] therefore defines on $U$ the Laurent polynomial $p_N(x,z)=\sum_{|j|<N}(1-|j|/N)c_j(x)z^j$, where $c_j(x)=(2\pi)^{-1}\int_{-\pi}^{\pi}f(x,e^{it})e^{-ijt}\,dt$. Riemann-sum convergence uniform on compact chart closures makes every $c_j$ continuous in $x$. [F3, construct, algebra]

2.1 Let $M$ bound the matrix entries of $f$ on the compact chart closure times $S^1$. Given $\epsilon>0$, [F2] supplies $\delta>0$ such that $\lVert f(x,ze^{-it})-f(x,z)\rVert<\epsilon/2$ for $|t|<\delta$. On $|t|\geq\delta$, $K_N(t)\leq (N\sin^2(\delta/2))^{-1}$, so the integral of the tail times the bound $2M$ is below $\epsilon/2$ for all sufficiently large $N$. Since $p_N-f$ is the convolution of $f(x,ze^{-it})-f(x,z)$ with $K_N/(2\pi)$, the short-arc and tail estimates prove $p_N\to f$ uniformly on that chart closure. [F2, step 1.1, algebra]

3.1 Choose finitely many such charts and a finite subordinate partition $\{\phi_i\}$ by [F4]. In chart $i$, choose a Laurent approximant $p_i$ within a common tolerance. The section $\phi_i p_i$ of $\operatorname{End}(E)$ has support inside its chart and extends by zero; hence $p=\sum_i\phi_i p_i$ is a global finite Laurent polynomial in $z$. Because $\sum_i\phi_i=1$, the same tolerance bounds $p-f$ globally. [F4, F5, A1, step 2.1, construct, algebra]

4.1 The automorphisms form an open subbundle of $\operatorname{End}(E)$: in a chart, invertibility is the open condition $\det\ne0$. Compactness of $X\times S^1$ and the finite chart cover give a positive tolerance such that every section within that tolerance of $f$ is invertible, and every convex combination with $f$ remains within it. Choose $p$ accordingly. Since $f(x,1)=I$, $p(x,1)$ is invertible; put $q(x,z)=p(x,z)p(x,1)^{-1}$. Then $q$ is still Laurent polynomial, is normalized, and can be made arbitrarily close to $f$. [F1, step 3.1, algebra]

5.1 The straight-line family $h_s=(1-s)f+s q$ consists of automorphisms by step 4.1, depends continuously on $(x,z,s)$, and satisfies $h_s(x,1)=I$ for every $s$. It is the required normalized homotopy. For the rank-zero bundle the unique family is already polynomial, and for $X=\varnothing$ every assertion is vacuous. [F1, step 4.1, construct]

6.1 Let $f_t$ be a normalized automorphism homotopy. Apply steps 1.1–5.1 over the compact parameter space $X\times I$ to obtain a normalized Laurent family $p_t$ uniformly close to $f_t$. If prescribed normalized Laurent approximations $q_0,q_1$ were chosen sufficiently close at the endpoints, the straight segments from $q_0$ to $p_0$ and from $p_1$ to $q_1$ stay in the same open automorphism neighborhood and remain Laurent and normalized. Concatenating these with $p_t$ gives the required normalized Laurent-polynomial homotopy. [F1, step 1.1, step 2.1, step 3.1, step 4.1, step 5.1, construct] ∎
