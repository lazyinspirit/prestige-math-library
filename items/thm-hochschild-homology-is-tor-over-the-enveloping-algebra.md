---
id: thm-hochschild-homology-is-tor-over-the-enveloping-algebra
title: Hochschild homology is Tor over the enveloping algebra
kind: theorem
status: published
origin: pipeline
pipeline_run: frontier-36-complete
deps: [def-enveloping-algebra-and-bimodule-module-dictionary, def-two-sided-bar-resolution-of-an-associative-algebra, def-hochschild-chain-complex-of-a-bimodule, thm-two-sided-bar-complex-is-an-enveloping-projective-resolution, lem-hochschild-chains-are-bar-tensor-chains, def-tor-by-resolving-the-right-module, def-balanced-tor-bifunctor, cor-every-module-admits-a-projective-resolution, def-axiom-of-choice, thm-choice-implies-dependent-implies-countable-choice]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, Chapter 9, §§9.1.3–9.1.5"
      url: https://math.mit.edu/~hrm/palestine/weibel/09-hochschild_and_cyclic_homology.pdf
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
---

## Statement

Assume the Axiom of Choice (AC). Let $k$ be a field, let $A$ be a unital
associative $k$-algebra, and let $M$ be a $k$-central $A$-bimodule. Regard $A$
as a right $A^e=A\otimes_k A^{\mathrm{op}}$-module by
$a(c\otimes d^{\mathrm{op}})=dac$, and regard $M$ as a left $A^e$-module by
$(c\otimes d^{\mathrm{op}})m=cmd$. For every $n\geq0$, there is a canonical
isomorphism

$$HH_n(A,M)\cong\operatorname{Tor}^{A^e}_n(A,M),$$

natural in the coefficient bimodule $M$. The Axiom of Choice is assumed; no
$A^e$-projectivity of $M$ is assumed.

## Facts & Assumptions

**Given:** AC, a field $k$, a unital associative $k$-algebra $A$, and a $k$-central $A$-bimodule $M$.

[F1] A $k$-central $A$-bimodule $M$ is a left $A^e$-module by $(c\otimes d^{\mathrm{op}})m=cmd$ ([[def-enveloping-algebra-and-bimodule-module-dictionary]]).

[F2] The regular bimodule $A$ is a right $A^e$-module by $a(c\otimes d^{\mathrm{op}})=dac$ ([[def-enveloping-algebra-and-bimodule-module-dictionary]]).

[F3] The augmented two-sided bar complex has terms $\operatorname{Bar}_n(A)=A\otimes_k A^{\otimes_k n}\otimes_k A$ and the specified alternating adjacent-multiplication differential, including the empty middle tensor in degree zero ([[def-two-sided-bar-resolution-of-an-associative-algebra]]).

[F4] Under AC, $\operatorname{Bar}_\bullet(A)\to A$ is a projective resolution of the regular right $A^e$-module $A$ ([[thm-two-sided-bar-complex-is-an-enveloping-projective-resolution]]).

[F5] The Hochschild complex has $C_0(A,M)=M$, $C_n(A,M)=M\otimes_k A^{\otimes_k n}$ for $n\geq1$, and $HH_n(A,M)=H_n(C_\bullet(A,M))$ ([[def-hochschild-chain-complex-of-a-bimodule]]).

[F6] The maps $(a_0\otimes\cdots\otimes a_{n+1})\otimes m\mapsto (a_{n+1}ma_0)\otimes a_1\otimes\cdots\otimes a_n$ give a chain isomorphism $\operatorname{Bar}_\bullet(A)\otimes_{A^e}M\cong C_\bullet(A,M)$, natural in $M$, with no projectivity assumption on $M$ ([[lem-hochschild-chains-are-bar-tensor-chains]]).

[F7] If $Q_\bullet\twoheadrightarrow N$ is a specified projective resolution of a right $R$-module, the right-resolution construction is $\operatorname{Tor}^{R,Q}_n(N,L):=H_n(Q_\bullet\otimes_R L)$ for a left $R$-module $L$ ([[def-tor-by-resolving-the-right-module]]).

[F8] Under DC and with projective resolutions supplied for both modules, balanced $\operatorname{Tor}^R_n(N,L)$ is identified from either resolution; the identifications are canonical under change of resolution and define a covariant bifunctor up to those canonical isomorphisms ([[def-balanced-tor-bifunctor]]).

[F9] Under AC, every left module over a unital ring admits a projective resolution ([[cor-every-module-admits-a-projective-resolution]]).

[F10] AC means every family of nonempty sets has a choice function ([[def-axiom-of-choice]]).

[F11] In ZF, AC implies DC ([[thm-choice-implies-dependent-implies-countable-choice]]).

## Proof

**Proof technique:** direct.

1.1 By [F1] and [F2], the right module in the Tor expression is the regular right $A^e$-module $A$, and the coefficient bimodule is a left $A^e$-module. Thus the tensor products and resolution statements below use the stated sides of the enveloping algebra. [F1, F2, given]

1.2 Put $P_\bullet=\operatorname{Bar}_\bullet(A)$. By [F4], under the assumed AC this is a projective resolution of the right $A^e$-module $A$. The augmentation endpoint is $\operatorname{Bar}_0(A)\to A$ by multiplication. [F3, F4, given]

2.1 Applying the right-resolution definition [F7] to this specified resolution gives $\operatorname{Tor}^{A^e,P}_n(A,M)=H_n(P_\bullet\otimes_{A^e}M)$. This construction does not require $M$ itself to be projective. [F7, step 1.2]

2.2 Applying [F9] to the unital ring $A^e$ supplies a left projective resolution of $M$. Together with the right projective resolution $P_\bullet$ of $A$ from step 1.2, this supplies both resolutions required in [F8]. The corollary does not assert that $M$ is itself projective. [F4, F8, F9, step 1.2]

3.1 The chain isomorphism [F6], followed by the homology definition [F5], gives for every $n\geq0$ the identity $HH_n(A,M)=H_n(C_\bullet(A,M))\cong H_n(P_\bullet\otimes_{A^e}M)=\operatorname{Tor}^{A^e,P}_n(A,M)$. In degree zero, [F6] maps $(a_0\otimes a_1)\otimes m$ to $a_1ma_0$; in degree one its chain-map identity uses $b_1(m\otimes a)=ma-am$, so the first nonzero boundary is included. [F5, F6, step 2.1]

4.1 By [F10] AC is the assumed choice principle, and [F11] gives the DC hypothesis of [F8]. Hence the right-resolution group in step 3.1 is canonically identified with the balanced $\operatorname{Tor}^{A^e}_n(A,M)$, independently of the chosen projective resolutions. For a bimodule map $f:M\to M'$, the map $1_{P_\bullet}\otimes f$ induces the right-resolution homology map; [F5] commutes with $f$, and [F8] makes the balanced Tor identifications natural. Thus the isomorphism in the statement is natural in $M$. AC is used in [F4] to choose a $k$-basis of $A$ and make the resulting free bar terms projective, in [F9] to make the canonical free resolution of $M$ projective, and through AC$\Rightarrow$DC for balanced Tor comparison and naturality; no choice is used in the chain isomorphism itself. [F4, F5, F6, F8, F10, F11, step 3.1, step 2.2]

5.1 If $M=0$, both chain complexes in step 3.1 vanish and both sides are zero. If $A=k$, every bar term identifies with $k$ and every adjacent-multiplication face identifies with $1_k$, so $d_n=\sum_{r=0}^n(-1)^r\,1_k$: it is the identity for even $n$ and zero for odd $n$. After tensoring with $M$, this augmented complex has homology $M$ in degree zero and zero in positive degrees; the length-zero resolution of the projective right $k$-module $k$ gives the same Tor groups. The degree-zero and degree-one endpoints are those already checked in step 3.1. [F3, F4, F6, F7, F8, step 3.1] ∎

## Source comparison

Weibel, *An Introduction to Homological Algebra*, §9.1.3, Lemma 9.1.3, printed pp. 302–303 (PDF pp. 2–3), identifies Hochschild homology with relative Tor over $k\to A^e$ and gives the bar-tensor chain isomorphism. Section 9.1.4 and Corollary 9.1.5, printed p. 303 (PDF p. 3), explain that when $A$ is projective over $k$, the bar terms are projective over $A^e$ and the relative Tor computation agrees with absolute Tor. These passages corroborate the relative/absolute distinction; the proof above obtains the absolute Tor resolution directly from the AC-qualified projectivity theorem [F3].
