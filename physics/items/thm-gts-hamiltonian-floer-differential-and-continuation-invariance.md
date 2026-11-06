---
id: thm-gts-hamiltonian-floer-differential-and-continuation-invariance
kind: theorem
title: Regular aspherical Hamiltonian Floer differential and continuation contract
status: published
origin: pipeline
domain: mathematics
library: physics
dependency_level: 4
deps:
  - def-gts-hamiltonian-floer-data-and-novikov-completed-chain-module
  - lem-gts-tame-j-holomorphic-area-is-dirichlet-energy
dependency_roles:
  def-gts-hamiltonian-floer-data-and-novikov-completed-chain-module: mathematical-premise
  lem-gts-tame-j-holomorphic-area-is-dirichlet-energy: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Dietmar Salamon, Lectures on Floer Homology
      url: https://www.math.utoronto.ca/mgualt/Morse%20Theory/Salamon%20floer.pdf
      locator: §§1.1–1.3 and 3.1–3.4, printed pp. 3–13 and 25–38; periodic-orbit source context only. The source uses the opposite Hamiltonian vector-field sign; translate its Hamiltonian by H_source = −H here. The conditional chain-count argument and its action sign are proved locally below.
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Cylinder and action conventions

Write $S^1=\mathbb R/\mathbb Z$. A Floer cylinder from $x_-$ to $x_+$ is a smooth map $u:\mathbb R\times S^1\to M$ satisfying $u_s+J_t(u)(u_t-X_{H_t}(u))=0$ and converging smoothly to $x_\pm$ as $s\to\pm\infty$. Use the compatible metric $g_t(v,w)=\omega(v,J_tw)$ and energy $E(u)=\int_{\mathbb R\times S^1}|u_s|_{g_t}^2\,ds\,dt$. For a contractible loop $x$ and oriented cap $w:D^2\to M$ with $w(e^{2\pi it})=x(t)$, the capped action is $\mathcal A_H([x,w])=\int_0^1H_t(x(t))dt-\int_{D^2}w^*\omega$. Capping successive slices by adjoining the cylinder segment makes this a smooth function of $s$; its cap choice is irrelevant under spherical asphericity. These are the cap conventions of the orbit-module suppliers. Continuation cylinders use the same equation with smooth $s$-dependent $H_{s,t},J_{s,t}$ constant at their two ends; the parameter families below refer to these equations.

## Statement

Let $(M,\omega)$ be closed and satisfy $\omega|_{\pi_2(M)}=c_1(TM)|_{\pi_2(M)}=0$. Assume every one-periodic orbit of $H$ is nondegenerate, use the Hamiltonian sign $\iota_{X_H}\omega=-dH$, and take the aspherical orbit module over $\mathbb F_2$. For regular Floer data $(H,J_t)$, assume each zero-dimensional space $\mathcal M_1(x,y)$ of index-one finite-energy Floer cylinders modulo $s$-translation is compact, and define $d$ by its mod-$2$ count. Regular means that the linearized Floer operator at every relevant solution is surjective, with the stated Fredholm index, so these quotients are smooth manifolds of the expected dimension. If the index-two cylinder compactifications are compact one-manifolds with boundary exactly the broken-cylinder ends, then the boundary count gives $d^2=0$. For regular homotopies of admissible Hamiltonians, if all zero-dimensional continuation and parameterized count spaces used below are compact and the one-dimensional compactifications have the stated gluing and boundary descriptions, continuation counts are chain maps and induce isomorphisms on homology; reverse and concatenated homotopies give chain-homotopy inverse maps. With the action convention inherited from cappings and $\iota_{X_H}\omega=-dH$, cylinder energy equals action drop. No compactness or gluing assertion is made without the stated hypotheses.

## Statement references

[[def-gts-hamiltonian-floer-data-and-novikov-completed-chain-module]]

[[lem-gts-tame-j-holomorphic-area-is-dirichlet-energy]]

## Facts & Assumptions

**Given:** Closed symplectic $(M,\omega)$; $\omega|_{\pi_2}=c_1|_{\pi_2}=0$; a Hamiltonian with every one-periodic orbit nondegenerate; the $\mathbb F_2$ orbit module and action convention; regular Floer and continuation data; compactness and gluing up to breaking; and the exact codimension-one boundary descriptions stated above.

[F1] The aspherical chain module has finite-support generators given by nondegenerate contractible one-periodic Hamiltonian orbits, with cap-independent action and Conley–Zehnder grading. [[def-gts-hamiltonian-floer-data-and-novikov-completed-chain-module]]

[F2] The symplectic-area/Dirichlet-energy identity is positive for every nonconstant compatible $J$-holomorphic sphere, using a domain metric compatible with the sphere complex structure. [[lem-gts-tame-j-holomorphic-area-is-dirichlet-energy]]

[A1] Each regular zero-dimensional space $\mathcal M_1(x,y)$ is compact. The regularity, compactness-up-to-breaking, and exact index-two boundary/gluing description are explicit hypotheses of this conditional theorem; they are not supplied by [F1] or [F2].

[A2] For each continuation homotopy and homotopy of homotopies used, assume compactness of every zero-dimensional space being counted and the stated compact one-dimensional manifold-with-boundary descriptions. Their faces identify with the indicated finite products, parameter-end faces, and broken-cylinder faces; for the inverse construction these parameter ends are the concatenation count and the identity count.

## Proof

**Given:** The data, cylinder/action conventions and assumptions above.

1.1 For a cylinder $u$ set $v=\partial_tu-X_{H_t}(u)$. The equation gives $\partial_su=-J_tv$, so $|\partial_su|^2=\omega(\partial_su,v)$. Differentiating the capped action along $x_s(t)=u(s,t)$ gives $\frac{d}{ds}\mathcal A_H([x_s,w_s])=-\int_0^1\omega(\partial_su,v)dt=-\int_0^1|\partial_su|^2dt$, because the loop has no boundary term. Integrating over $s$ proves $E(u)=\mathcal A_H(x_-)-\mathcal A_H(x_+)$. Moreover, any nonconstant sphere bubble would have positive symplectic area by [F2], while its class has zero $\omega$-area by the asphericity hypothesis; hence no such sphere bubble can occur in this branch. [F1, F2, given, algebra]

2.1 Define $d(x)=\sum_y \#_2\mathcal M_1(x,y)\,y$, where $\mathcal M_1$ is the zero-dimensional index-one moduli space modulo translation. The full fixed-point set of the time-one map is closed in compact $M$ and hence compact; because every one-periodic orbit is nondegenerate, each fixed point is isolated. Thus the fixed-point set, and therefore its contractible subset, is finite. By [A1], each $\mathcal M_1(x,y)$ is also finite: a compact zero-dimensional manifold is discrete and its singleton cover has a finite subcover. Thus each coefficient is defined and the sum is finite. For fixed generators $x,z$, the coefficient of $z$ in $d^2x$ is the mod-$2$ count of ordered broken pairs through intermediate generators. By [A1], these pairs are exactly the boundary points of the compactified index-two one-manifold from $x$ to $z$. Every compact one-manifold is a finite disjoint union of circles and closed intervals; circles have no boundary and each interval has two endpoints. Its total boundary count is therefore zero mod $2$, so every coefficient of $d^2$ vanishes. [A1, F1, step 1.1, algebra]

3.1 For a regular homotopy, [A2] makes every zero-dimensional continuation count finite, by the compact-discrete argument of step 2.1; finitely many generators then define $K_{01}$. The boundary of each compactified one-dimensional continuation moduli space has two types of ends: a Floer break before the continuation solution, contributing $K_{01}d_0$, or a break after it, contributing $d_1K_{01}$. The assumed boundary formula [A2] contains no other codimension-one faces, so the same even-boundary count gives $d_1K_{01}=K_{01}d_0$. [A2, step 2.1]

4.1 Apply [A2] to a one-parameter family interpolating between the concatenated reverse/forward continuation homotopy and the constant homotopy. The resulting compactified one-dimensional parameterized moduli have parameter-end faces equal to $K_{10}K_{01}$ and the identity, while their broken-cylinder faces are precisely $d_0Q+Qd_0$ for the mod-$2$ count $Q$ of zero-dimensional parameterized solution spaces in that one-parameter family. These spaces are finite by [A2] and the same compact-discrete argument; the total one-dimensional spaces provide the boundary relation. The zero boundary count yields $K_{10}K_{01}-I=d_0Q+Qd_0$ (minus equals plus over $\mathbb F_2$). Reversing the roles gives the other composition. Thus continuation maps are chain-homotopy inverses and induce inverse maps on homology. [A2, step 3.1, algebra] ∎

## Proof status

This is a complete conditional chain-level argument. The hypotheses [A1]–[A2] are part of the statement and are not supplied by the restricted source treatments; the item does not claim a construction of regular data or compactifications from them.
