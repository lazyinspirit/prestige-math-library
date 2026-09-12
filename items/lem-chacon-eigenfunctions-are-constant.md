---
id: "lem-chacon-eigenfunctions-are-constant"
kind: "lemma"
title: "Chacon eigenfunctions are constant"
deps: ["def-unitary-eigenfunction-for-a-probability-system", "thm-chacon-transformation-is-ergodic", "lem-chacon-levels-approximate-measurable-sets", "lem-chacon-partial-maps-extend-to-an-invertible-map-mod-null-sets", "def-chacon-three-cut-one-spacer-towers", "thm-ergodicity-and-invariant-functions", "def-axiom-of-choice"]
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Peter Varju, Topics in Ergodic Theory, Michaelmas 2016, section 11 pp.36–40 (complete Chacon argument; public mirror)
      url: https://www.scribd.com/document/345852025/ergodic
    - title: Katok–Thouvenot Theorem 5.12 proof p.697
      url: https://akatok.s3.amazonaws.com/pub/KT-spectral.pdf
    - title: Sarig Problem 3.9 p.101
      url: https://www.weizmann.ac.il/math/sarigo/sites/math.sarigo/files/uploads/ergodicnotes.pdf
    - title: Creutz Theorem 6.11 and Exercise 6.3 pp.42–43 (incomplete source; local completion above)
      url: https://www.dcreutz.com/publications/Ergodic_Theory_of_Group_Actions.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

Assume AC. Every complex $L^2$ eigenfunction of the Chacon transformation is constant almost everywhere; its eigenvalue is one.

## Facts & Assumptions

[F1] An eigenfunction is a nonzero class and its eigenvalue has modulus one [[def-unitary-eigenfunction-for-a-probability-system]].

[F2] Chacon is ergodic [[thm-chacon-transformation-is-ergodic]].

[F3] Positive-measure sets have levels of arbitrarily high relative density at late stages [[lem-chacon-levels-approximate-measurable-sets]].

[F4] On an invariant conull set the limiting map agrees with all finite tower arrows [[lem-chacon-partial-maps-extend-to-an-invertible-map-mod-null-sets]].

[F5] Finite-valued measurable invariant real or complex functions on an ergodic probability system are constant a.e. [[thm-ergodicity-and-invariant-functions]].

[F6] Assume AC [[def-axiom-of-choice]].

[F7] At stage r, the levels have common width $w_r$ and height $h_r$; stage r+1 lists all left thirds, then all middle thirds, then the spacer, then all right thirds, and its partial map translates each listed level to its successor [[def-chacon-three-cut-one-spacer-towers]].

## Proof

**Given:** $f\ne0$ with $f\circ T=\lambda f$ a.e.

1.1 By F1, $|\lambda|=1$, so $|f|\circ T=|f|$ a.e. Choose a finite-valued measurable representative of the $L^2$ class by setting it to zero on its null exceptional set. F2–F5 make $|f|$ a constant $c$ a.e. Nonzeroness forces $c>0$. Divide by $c$, so henceforth $|f|=1$ a.e. For each positive integer $k$, iteration gives $f(T^kx)=\lambda^kf(x)$ outside the finite union of preimages of the original exceptional null set. F4's measure preservation makes that union null. These relations may therefore be used for either finite return time below. [F1, F2, F4, F5, F6]

2.1 Fix $\varepsilon>0$ and $0<\delta<1/6$. Cover the unit circle by finitely many open disks of radius $\varepsilon$ with centers on the circle: equally spaced arguments with spacing less than $\varepsilon$ suffice, using $|e^{it}-e^{is}|\le|t-s|$. Since $|f|=1$ a.e., at least one disk centered at $a$, $|a|=1$, has positive-measure inverse image $E=\{x:|f(x)-a|<\varepsilon\}$. By F3 choose a level $J=L_{r,j}$ with $\mu(J\setminus E)<\delta w_r$. F7's next-stage ordering places $J^{(1)}$ exactly $h_r$ levels after $J^{(0)}$ and $J^{(2)}$ exactly $h_r+1$ levels after $J^{(1)}$, because the latter route crosses the one spacer. Together with F4 this gives $T^{h_r}:J^{(0)}\to J^{(1)}$ and $T^{h_r+1}:J^{(1)}\to J^{(2)}$ as measure-preserving translations on the invariant conull set. [F3, F4, F7, step 1.1]

3.1 For the first route, the set of points $x\in J^{(0)}$ for which either $x\notin E$ or $T^{h_r}x\notin E$ has measure at most $2\delta w_r$. Thus a set of measure at least $(1/3-2\delta)w_r>0$ satisfies both memberships and the eigenfunction iterate relation. At one such point, $|\lambda^{h_r}a-a|\le|\lambda^{h_r}(a-f(x))|+|f(T^{h_r}x)-a|<2\varepsilon$. The same argument on $J^{(1)}$ with return time $h_r+1$ gives $|\lambda^{h_r+1}-1|<2\varepsilon$. Null exceptions from step 1.1 and the conull tower convention do not change positive measure. [F1, F4, step 1.1, step 2.1]

4.1 Since $|\lambda|=1$, $|\lambda-1|=|\lambda^{h_r+1}-\lambda^{h_r}|\le|\lambda^{h_r+1}-1|+|\lambda^{h_r}-1|<4\varepsilon$. Every positive $\varepsilon$ is allowed, so $\lambda=1$. Now F5 makes $f$ constant a.e., and undoing the normalization preserves constancy. AC is inherited from the tower and ergodicity inputs; the disk and positive-measure witnesses require only finite choices for each fixed epsilon. [F5, F6, step 3.1] ∎
