---
id: cor-local-integrability-beltrami-structures
kind: corollary
title: "Local integrability of measurable conformal structures"
status: published
origin: pipeline
deps:
  - def-measurable-beltrami-coefficient
  - def-weak-solution-beltrami-equation
  - thm-measurable-riemann-mapping-sphere
  - def-complex-domain
  - def-acl-sobolev-quasiconformal-homeomorphism
  - def-beltrami-coefficient-and-maximal-dilatation
  - thm-composition-and-inverse-quasiconformal
  - thm-one-quasiconformal-is-conformal
  - def-biholomorphic-map
  - def-countable-choice
  - def-axiom-of-choice
  - thm-choice-implies-dependent-implies-countable-choice
  - def-geometric-quasiconformal-homeomorphism
  - def-riemann-sphere-holomorphic-charts
dependency_level: 10
axiom_use: >-
  Assume AC. It is spent through the global measurable Riemann mapping theorem
  for the existence of a sphere solution. AC implies Countable Choice through
  [[thm-choice-implies-dependent-implies-countable-choice]], which is required
  by the coefficient and Sobolev measure interfaces. No additional choice is
  needed to restrict the normalized solution to the local disk.
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Mikhail Lyubich, Conformal Geometry and Dynamics of Quadratic Polynomials, vol. I (book draft, Stony Brook)"
      url: "https://www.math.stonybrook.edu/~mlyubich/book.pdf"
      locator: "Ch. 2 Theorem 14.1 (semi-local integrability), printed pp. 195–196; §§14.1–14.2, printed p. 196, for uniqueness by Weyl's lemma and zero extension from the global theorem; read in full."
    - title: "Christopher J. Bishop, Quasiconformal Mappings (Stony Brook Math 627 course notes)"
      url: "https://www.math.stonybrook.edu/~bishop/classes/math627.S18/QC.pdf"
      locator: "Ch. 3 §2, printed p. 88, Theorem 2.11: measurable mapping theorem context only; the printed constant has the sign error (k+1)/(k−1), and its proof invokes an unresolved Theorem ??, so it is not used as proof."
verification:
  audited: "2026-10-08"
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Statement

Assume the Axiom of Choice. It implies Countable Choice ([[thm-choice-implies-dependent-implies-countable-choice]]). Let $\Omega\subseteq\mathbb C$ be a complex domain and let $\mu$ be a Beltrami coefficient on $\Omega$ with $\|\mu\|_\infty\le k$ for some $0\le k<1$ ([[def-axiom-of-choice]], [[def-countable-choice]], [[def-complex-domain]], [[def-measurable-beltrami-coefficient]]).

(i) **Local coordinates.** For every $p\in\Omega$, there are $r>0$ with $\overline{D(p,r)}\subseteq\Omega$ and a complex domain $V\subseteq\mathbb C$ ([[def-complex-domain]]) with an orientation-preserving analytically quasiconformal homeomorphism $w:D(p,r)\to V$ ([[def-acl-sobolev-quasiconformal-homeomorphism]], [[def-geometric-quasiconformal-homeomorphism]]) whose weak derivatives satisfy $w_{\bar z}=\mu w_z$ almost everywhere ([[def-weak-solution-beltrami-equation]]) and whose Beltrami coefficient equals $\mu$ almost everywhere ([[def-beltrami-coefficient-and-maximal-dilatation]]). Thus the measurable conformal structure defined by $\mu$ is locally equivalent to the standard one.

(ii) **Uniqueness up to conformal maps.** If $U,V_1,V_2\subseteq\mathbb C$ are complex domains, $U\subseteq\Omega$, and $w_i:U\to V_i$ $(i=1,2)$ are orientation-preserving analytically quasiconformal homeomorphisms that solve the same Beltrami equation and have $\mu_{w_1}=\mu_{w_2}=\mu$ almost everywhere, then $w_2\circ w_1^{-1}:V_1\to V_2$ is conformal, hence biholomorphic ([[thm-composition-and-inverse-quasiconformal]], [[thm-one-quasiconformal-is-conformal]], [[def-biholomorphic-map]]). The transition maps between quasiconformal coordinates therefore differ by conformal postcomposition.

## Facts & Assumptions

**Given:** AC; a complex domain $\Omega$; a Beltrami coefficient $\mu$ on $\Omega$ with $\|\mu\|_\infty\le k$ for some $0\le k<1$; and, in part (ii), two coefficient-compatible quasiconformal solutions on a common domain.

[F1] A sphere coefficient is determined by its finite-chart representative; its infinity-chart representative is given by the holomorphic pullback law, whose factor has modulus one, so measurable zero extension in the finite chart preserves the essential bound ([[def-measurable-beltrami-coefficient]], [[def-riemann-sphere-holomorphic-charts]]).

[F2] A complex domain is open, so every $p\in\Omega$ has a disk with closure contained in $\Omega$ ([[def-complex-domain]]).

[F3] Every sphere coefficient with essential norm below one has a normalized quasiconformal homeomorphic solution fixing $0,1,\infty$, with the prescribed coefficient and weak equation ([[thm-measurable-riemann-mapping-sphere]]). The stable global theorem supplies the exact coefficient-compatible normalized homeomorphic solution used below.

[F4] Restricting an ACL/Sobolev quasiconformal homeomorphism and its weak equation to an open subdomain preserves the local Sobolev condition, almost-everywhere Beltrami equation, and coefficient class; a homeomorphism fixing $\infty$ sends every finite point to the finite chart, and its image of a disk is open and connected ([[def-acl-sobolev-quasiconformal-homeomorphism]], [[def-weak-solution-beltrami-equation]], [[def-beltrami-coefficient-and-maximal-dilatation]], [[def-geometric-quasiconformal-homeomorphism]], [[def-riemann-sphere-holomorphic-charts]], [[def-complex-domain]]).

[F5] For two analytic quasiconformal homeomorphisms with the same coefficient, the composition and inverse formulas make $w_2\circ w_1^{-1}$ analytically $1$-quasiconformal with coefficient zero; a $1$-quasiconformal homeomorphism between plane domains is conformal ([[thm-composition-and-inverse-quasiconformal]], [[def-acl-sobolev-quasiconformal-homeomorphism]], [[def-beltrami-coefficient-and-maximal-dilatation]], [[thm-one-quasiconformal-is-conformal]], [[def-biholomorphic-map]]). The earlier full area and inverse-null interfaces now supply the chain-rule exceptional-set transport.

[F6] AC implies Countable Choice, which is assumed by the measurable-coefficient and Sobolev interfaces ([[def-axiom-of-choice]], [[thm-choice-implies-dependent-implies-countable-choice]], [[def-countable-choice]]).

## Proof

**Proof technique:** zero-extend to the sphere, apply the measurable Riemann mapping theorem, restrict, and use the composition formula for uniqueness.

1.1 Fix $p\in\Omega$. By [F2], choose $r>0$ with $\overline{D(p,r)}\subseteq\Omega$. Take a measurable representative $\mu_0$ and define $\widetilde\mu_0(z)=\mu_0(z)$ on $D(p,r)$ and $\widetilde\mu_0(z)=0$ outside it. Its a.e. class is independent of the representative. By [F1], this finite-chart class determines a sphere coefficient $\widetilde\mu$; its infinity-chart expression is the pullback by $z=1/\zeta$, and the modulus-one factor preserves $\|\widetilde\mu\|_\infty\le k<1$. [F1, F2, given]

2.1 Apply [F3] to $\widetilde\mu$ and take the normalized solution $F$ fixing $0,1,\infty$. Since $F$ is injective and fixes $\infty$, its finite-chart restriction maps $D(p,r)$ into $\mathbb C$; as a homeomorphism it maps this disk onto an open connected set $V$, a complex domain. By [F4], $w=F|_{D(p,r)}:D(p,r)\to V$ is orientation-preserving and analytically quasiconformal, remains a weak solution, and has Beltrami coefficient $\widetilde\mu=\mu$ almost everywhere there. This proves (i). [F3, F4, F6, step 1.1]

3.1 Let $w_1,w_2$ satisfy (ii). By [F5], the composition $h=w_2\circ w_1^{-1}$ is an analytic quasiconformal homeomorphism and its Beltrami coefficient is zero almost everywhere, because the two coefficient terms cancel in the composition formula. Thus $h$ is $1$-quasiconformal; [F5] makes it holomorphic, and since it is a homeomorphism between the domains $w_1(U)$ and $w_2(U)$, it is biholomorphic. Hence the local coordinates differ by conformal postcomposition. [F5, step 2.1, given] ∎

## Source notes

Lyubich, Ch. 2 Theorem 14.1, printed pp. 195–196, states the semi-local integrability result. §§14.1–14.2, printed p. 196, were read in full: uniqueness follows because the quotient of two solutions has vanishing $\bar\partial$ and Weyl's lemma makes it conformal; the global theorem yields the local one by zero extension. The item writes out the coefficient extension and finite-chart restriction. Bishop, Ch. 3 §2, printed p. 88, Theorem 2.11, was read in full but is context only: its printed $K=(k+1)/(k-1)$ is negative for $0\le k<1$, and the proof invokes an unresolved “Theorem ??” for coefficient convergence.

## Supplier reconciliation

The stable global theorem and earlier12 area/inverse-null/composition interfaces supply the exact assertions used in this proof. The local arguments above retain their own stated hypotheses; this reconciliation is separate from root mathematical decisions and full-run certification.
