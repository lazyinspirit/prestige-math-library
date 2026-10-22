---
id: lem-qftx-measurable-helicity-scalarization
kind: lemma
title: Measurable scalarization of the transverse helicity fibers
status: draft
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 2
deps:
  - def-countable-choice
  - def-qftx-photon-helicity-bundle
dependency_roles:
  def-countable-choice: mathematical-premise
  def-qftx-photon-helicity-bundle: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Eric Palmerduca and Hong Qin, Photon topology
      url: https://arxiv.org/pdf/2308.11147
      locator: Full 66-page article; §II, Definition 14 and Lemma 15, for the transverse rank-two bundle and its two helicity line subbundles. This item constructs only Borel unit sections, not global smooth sections.
verification:
  precheck: pass
---

## Statement

Assume Countable Choice and use the transverse Hilbert space and helicity projectors of [[def-qftx-photon-helicity-bundle]]. For $\sigma\in\{+1,-1\}$ there exists a Borel map $e_\sigma:S^2\to\mathbb C^3$ such that $|e_\sigma(\mathbf n)|=1$ and $P_\sigma(\mathbf n)e_\sigma(\mathbf n)=e_\sigma(\mathbf n)$. Put $X=M\times\{+1,-1\}$ and equip it with the product of $d\nu$ and counting measure. Then
$$
(Tf)(\mathbf k,\sigma)=\overline{e_\sigma(\mathbf n(\mathbf k))}\cdot f(\mathbf k)
$$
defines a unitary $T:\mathcal H_T^\nu\to L^2(X,d\nu\otimes\#;\mathbb C)$. It intertwines the helicity multiplier and projectors with scalar multiplication:
$$ThT^{-1}=M_{(\mathbf k,\sigma)\mapsto\sigma},\qquad TP_\sigma T^{-1}=M_{\mathbf1_{\{\sigma\}}}.$$
The sections are Borel measurable and need not be continuous or smooth.

## Statement references

[[def-qftx-photon-helicity-bundle]]

## Facts & Assumptions

**Given:** Countable Choice, $M=\mathbb R^3\setminus\{0\}$, the measure $d\nu=d^3\mathbf k/(2|\mathbf k|)$, and the transverse projectors $P_\sigma(\mathbf n)$.

[A1] Assume Countable Choice. [[def-countable-choice]]

[F1] [[def-qftx-photon-helicity-bundle]]: for every $\mathbf n\in S^2$, $P(\mathbf n)$ is the orthogonal projection onto $\mathbf n^\perp$, the two operators $P_\sigma(\mathbf n)$ are mutually orthogonal rank-one projections on that plane, $P_++P_-=P$, and $hP_\sigma=\sigma P_\sigma$.

[F2] The weighted measure $\nu$ is sigma-finite, and $\mathcal H_T^\nu$ consists of measurable square-integrable transverse fields modulo equality almost everywhere. [[def-qftx-photon-helicity-bundle]]

## Proof

**Given:** [A1], [F1], [F2], and the definitions in the Statement.

1.1 Fix a Cartesian orthonormal basis $e_1,e_2,e_3$ of $\mathbb C^3$ and $\sigma\in\{+1,-1\}$. Since $P_\sigma(\mathbf n)$ has rank one, at least one of $P_\sigma(\mathbf n)e_1,P_\sigma(\mathbf n)e_2,P_\sigma(\mathbf n)e_3$ is nonzero. Define $j_\sigma(\mathbf n)$ to be the least such index. The matrix fields $P_\sigma$ are smooth, so each set $\{\mathbf n:j_\sigma(\mathbf n)=j\}$ is Borel: it is the intersection of $\{\|P_\sigma e_j\|>0\}$ with the finitely many preceding zero sets. On that set define
 $e_\sigma(\mathbf n)=P_\sigma(\mathbf n)e_j/\|P_\sigma(\mathbf n)e_j\|$.
The denominator is positive on its defining Borel set, so the piecewise formula is Borel, has unit norm, and lies in the range of $P_\sigma(\mathbf n)$. [F1, given, construct]

2.1 At each $\mathbf n$, the vectors $e_+(\mathbf n),e_-(\mathbf n)$ are orthonormal because the projectors are orthogonal, and they span $P(\mathbf n)\mathbb C^3$ because their ranges are the two rank-one summands of $P(\mathbf n)$. For every transverse representative $f(\mathbf k)$, the fiberwise expansion is $f(\mathbf k)=\sum_{\sigma=\pm1}e_\sigma(\mathbf n(\mathbf k))\bigl(\overline{e_\sigma(\mathbf n(\mathbf k))}\cdot f(\mathbf k)\bigr)$ and $|f(\mathbf k)|^2=\sum_{\sigma=\pm1}|(Tf)(\mathbf k,\sigma)|^2$.
Borel measurability of $e_\sigma$ makes $Tf$ measurable, and integration gives $\|Tf\|_{L^2(X)}=\|f\|_{\mathcal H_T^\nu}$. Conversely, for any $g\in L^2(X)$ the field $f(\mathbf k)=\sum_{\sigma=\pm1}e_\sigma(\mathbf n(\mathbf k))g(\mathbf k,\sigma)$ is measurable, transverse and square-integrable, and $Tf=g$. Hence $T$ is unitary. [A1, F1, F2, step 1.1, construct, algebra]

3.1 On each fiber $h e_\sigma=\sigma e_\sigma$ and $P_\tau e_\sigma=\mathbf1_{\{\tau=\sigma\}}e_\sigma$. Substituting the fiberwise expansion from step 2.1 gives $Thf(\mathbf k,\sigma)=\sigma Tf(\mathbf k,\sigma)$ and $TP_\tau f(\mathbf k,\sigma)=\mathbf1_{\{\tau=\sigma\}}Tf(\mathbf k,\sigma)$ for every transverse field class. These are precisely the two multiplication-operator identities in the Statement. [F1, step 2.1, given, algebra] ∎

## Remarks

The measurable sections do not contradict the nonzero Chern numbers of the helicity line bundles: no global smooth section is asserted. The explicit first-nonzero-coordinate rule supplies a Borel trivialization for the measure-space representation used by the Fock multiplier theorem.
