---
id: lem-choice-free-de-rham-period-completion-is-a-discrete-valuation-ring
kind: lemma
title: The de Rham period completion is a discrete valuation ring without Choice
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 8
deps:
  - lem-choice-free-identification-of-padic-algebraic-closure-completions
  - lem-choice-free-fontaine-map-surjectivity-for-the-padic-completion
  - lem-cyclotomic-tilt-valuation-and-fontaine-principal-kernel
  - lem-perfect-base-witt-teichmuller-expansions-and-units
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Fontaine and Ouyang, Theory of p-adic Galois Representations
      url: https://www.imo.universite-paris-saclay.fr/~fontaine/galoisrep.pdf
      locator: Section5.2.2, Definition5.13, Remark5.14 and Definition5.15; explicit inverse-limit argument supplied here
verification: {}
---

## Statement

Let $F/\mathbb Q_p$ be a GIVEN algebraic closure carrying its extended $p$-adic valuation, let $C=\widehat F$ be its ordinary Cauchy-sequence completion, and suppose a compatible primitive system $(\zeta_{p^n})_{n\ge0}$ in $F$ is GIVEN. Set $A=\mathcal O_C$, $B=A^\flat$, $W=W_p(B)$, $Q=W[1/p]$, and $\epsilon=(\zeta_{p^n}\bmod p)_{n\ge0}$. With $u=\varphi^{-1}\epsilon$ and $\xi=\sum_{j=0}^{p-1}[u]^j$, define
$$B_{\mathrm{dR}}^+=\varprojlim_{n\ge1}Q/\xi^nQ.$$
Then $Q$ embeds canonically in $B_{\mathrm{dR}}^+$. This ring is a complete discrete valuation ring with uniformizer $\xi$ and residue field canonically $C$, and its canonical map to its $\xi$-adic completion is an isomorphism. More precisely, $B_{\mathrm{dR}}^+/\xi^nB_{\mathrm{dR}}^+\cong Q/\xi^nQ$ for every $n\ge1$.

The element $\mu=[\epsilon]-1$ is another uniformizer. The series
$$t=\log(1+\mu)=\sum_{m\ge1}(-1)^{m+1}\frac{\mu^m}{m}$$
converges for this discrete valuation and $t/\mu$ is a unit. Consequently $B_{\mathrm{dR}}=\operatorname{Frac}(B_{\mathrm{dR}}^+)=B_{\mathrm{dR}}^+[1/t]$, and $\operatorname{Fil}^iB_{\mathrm{dR}}=t^iB_{\mathrm{dR}}^+$ defines an exhaustive separated multiplicative filtration for $i\in\mathbb Z$. No Choice axiom is needed. These assertions concern the discrete valuation topology; they assert neither a coefficient-field section $C\to B_{\mathrm{dR}}^+$ nor continuity of Galois actions for that topology.

## Facts & Assumptions

**Given:** The valued algebraic closure and the compatible primitive system. Both are actual input data, not existential selections made by this proof.

[F1] The ordinary completion $C$ is a complete valued field, and $A\to\varprojlim_m A/p^mA$ is canonically an isomorphism. [[lem-choice-free-identification-of-padic-algebraic-closure-completions]]

[F2] The canonical Fontaine homomorphism $\theta:W_p(A^\flat)\to A$ is surjective for these data without Choice. [[lem-choice-free-fontaine-map-surjectivity-for-the-padic-completion]]

[F3] The tilt is a perfect valuation domain; with the displayed cyclotomic $u,\xi$, one has $u^\sharp=\zeta_p$, $\ker\theta=\xi W$, $\xi$ regular, and $\bigcap_n\xi^nQ=0$. [[lem-cyclotomic-tilt-valuation-and-fontaine-principal-kernel]]

[F4] Teichmüller representatives are multiplicative, and a Witt vector over a perfect characteristic-$p$ ring is a unit precisely when its first coordinate is a unit. [[lem-perfect-base-witt-teichmuller-expansions-and-units]]

## Proof

1.1 The hypotheses of [F3] follow from [F1]. Localizing the surjection in [F2] at $p$ gives a surjection $\theta_Q:Q\to A[1/p]=C$ with kernel $\xi Q$: localization preserves the displayed principal kernel, and every element of $C$ becomes integral after multiplication by a sufficiently large power of $p$. In particular $Q/\xi Q=C$. By [F3], the map $Q\to R:=\varprojlim_nQ/\xi^nQ$ has zero kernel. [F1, F2, F3, given, algebra]

2.1 Let $\rho_n:R\to Q/\xi^nQ$ be projection. It is surjective: for any one target class, choose one representative $q\in Q$, whose image in $R$ maps to that class. Its kernel is exactly $\xi^nR$. To prove the nontrivial inclusion, take $x\in\ker\rho_n$. For each $m\ge1$, its component $x_{m+n}$ reduces to zero modulo $\xi^n$. There is a unique class $y_m\in Q/\xi^mQ$ with $\xi^ny_m=x_{m+n}$ modulo $\xi^{m+n}$: existence is membership in $\xi^nQ$, and uniqueness follows by cancellation of the regular element $\xi^n$ in $Q$. These uniquely defined $y_m$ are compatible, so form $y\in R$, with $\xi^ny=x$. This uses no selection of representatives as $m$ varies. Thus $R/\xi^nR\cong Q/\xi^nQ$ and $\bigcap_n\xi^nR=0$. The same isomorphisms identify the canonical map $R\to\varprojlim_nR/\xi^nR$ with the identity on its defining inverse limit; hence it is an isomorphism. [F3, step 1.1, construct, algebra]

3.1 The element $\xi$ remains regular in $R$. Indeed, if $\xi x=0$, any representative of $x_{m+1}$ in $Q$ satisfies $\xi q\in\xi^{m+1}Q$. Regularity in $Q$ gives $q\in\xi^mQ$, so $x_m=0$ for every $m$ and $x=0$. By step 2.1, $R/\xi R=C$. If $r\in R$ has nonzero residue, take one $s\in R$ lifting the inverse of that residue. Write $rs=1+\xi z$. The finite sums $\sum_{j<N}(-\xi z)^j$ define a compatible inverse-limit element, since the omitted terms vanish modulo $\xi^n$ once $N\ge n$. Multiplying this element by $s$ gives an inverse of $r$. Elements of $\xi R$ cannot be units, since their residues vanish. Therefore $R$ is local with maximal ideal $\xi R$ and residue field $C$. [F3, step 2.1, construct, algebra]

4.1 For $r\ne0$, separatedness in step 2.1 gives a least positive integer $n$ with $r\notin\xi^nR$. Then $r\in\xi^{n-1}R$, so $r=\xi^{n-1}a$ with $a\notin\xi R$, and $a$ is a unit by step 3.1. The exponent is unique, since $\xi$ is regular and not a unit. Products of such expressions are nonzero and add exponents; hence $R$ is a domain. For any nonzero ideal $I$, the set of these exponents for its nonzero elements has a least member $d$. One element attaining $d$ is $\xi^d$ times a unit; consequently $\xi^d\in I$, while all elements of $I$ are in $\xi^dR$. Thus $I=\xi^dR$. This proves the discrete valuation assertion, including all ideal and completeness claims, directly from the inverse limit. Every fraction of two nonzero elements of $R$ is a unit times an integral power of $\xi$, so $\operatorname{Frac}(R)=R[1/\xi]$. [step 2.1, step 3.1, construct, algebra]

5.1 Since $\epsilon=u^p$ in the tilt and Teichmüller representatives are multiplicative, the finite geometric identity gives $\mu=[u]^p-1=([u]-1)\xi$ in $Q$. Its first factor maps under $\theta_Q$ to $u^\sharp-1=\zeta_p-1\ne0$ by [F3]; this remains true for $p=2$. That factor is therefore a unit of $R$ by step 3.1. Hence $\mu$ and $\xi$ generate the same maximal ideal and their powers define the same filtration. Every integer prime to $p$ is a unit of $W$ by [F4], since its first coordinate is a nonzero element of $\mathbb F_p\subset B$; thus $Q$, and hence $R$, contains $\mathbb Q$. In particular each rational nonzero scalar is a unit of $R$, since it already has its inverse in $Q$. Thus $\mu^m/m\in\xi^mR$. The displayed logarithm is consequently a well-defined inverse-limit sum. Dividing its terms by $\mu$ gives $t/\mu=1+\mu z$ for an element $z\in R$, again by the same convergent series argument. This quotient is a unit, so $t$ is a uniformizer as well. [F3, F4, step 1.1, step 3.1, step 4.1, algebra, construct]

6.1 Replacing $\xi$ by its unit multiple $t$ in step 4.1 proves $\operatorname{Frac}(R)=R[1/t]$. Every nonzero fraction is $t^j$ times a unit for one $j\in\mathbb Z$. Therefore the submodules $t^iR$ are exhaustive and separated in the fraction field and their products equal $t^{i+j}R$. These statements also handle zero, all integer filtration indices, and every prime. All infinite objects used above are inverse limits of prescribed quotients or series whose every finite quotient is eventually fixed; the only representative choices were for one fixed target element at a time. The construction never selects representatives for a countable family or a coefficient field. The residue of the discrete valuation topology is discrete, so no assertion about the separate natural period-ring topology follows from this proof. [step 2.1, step 3.1, step 4.1, step 5.1, algebra] ∎

## Source notes

Fontaine–Ouyang Section5.2.2, Definition5.13 and Definition5.15 describe the inverse-limit ring and its fraction field; the entire relevant passage, including Remark5.14 on the two topologies and Proposition5.16/Remark5.17 on Choice for a coefficient-field section, was read. The proof here supplies the inverse-limit division, units and DVR arguments explicitly rather than importing the source's compressed assertion. The surjectivity and principal-kernel inputs are the previously completed local proofs, not the source's repeated-preimage construction.

This constructs the de Rham completion and its logarithmic uniformizer at the GIVEN valued p-adic closure and GIVEN compatible-system input. It does not construct those input data, identify this logarithm with a logarithm in a completed crystalline ring, prove injectivity from that crystalline ring, construct the semistable comparison, prove period-ring invariants, or establish a generic perfectoid comparison. No coefficient-field section or natural-topology continuity theorem is used.
