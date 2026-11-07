---
id: lem-choice-free-ramified-crystalline-comparison-injection
kind: lemma
title: Ramified crystalline comparison injection without Choice
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 13
deps:
  - lem-cyclotomic-tilt-valuation-and-fontaine-principal-kernel
  - lem-choice-free-fontaine-map-surjectivity-for-the-padic-completion
  - lem-perfect-base-witt-frobenius-and-p-adic-completeness
  - lem-choice-free-de-rham-period-completion-is-a-discrete-valuation-ring
  - lem-choice-free-algebraic-coefficients-and-logarithm-branch-in-de-rham-periods
  - lem-choice-free-completed-crystalline-embedding-in-the-de-rham-ring
  - lem-choice-free-finite-padic-different-and-base-change-calculus
  - lem-choice-free-cyclotomic-tilt-value-group-and-residue-constants
  - lem-choice-free-identification-of-padic-algebraic-closure-completions
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Olivier Brinon, Représentations cristallines
      url: https://www.numdam.org/item/10.5802/aif.2205.pdf
      locator: Section 2.4, Propositions 2.45–2.47; the Kummer towers are replaced below by the specified Fontaine section
verification: {}
---

## Statement

Let $F/\mathbb Q_p$ be a GIVEN valued algebraic closure, $C=\widehat F$ its ordinary completion, and a compatible primitive cyclotomic system be GIVEN. Let $K\subset F$ be finite over $\mathbb Q_p$ with maximal unramified subfield $K_0$. Then the natural multiplication map
$$K\otimes_{K_0}B_{\mathrm{cris}}\longrightarrow B_{\mathrm{dR}}$$
is injective. No Choice axiom or compatible Kummer root tower is used. This result does not assert the semistable tensor injection or period-ring invariant fields.

## Facts & Assumptions

**Given:** The valued algebraic closure, its completion, the primitive cyclotomic system, and the finite extension $K/\mathbb Q_p$.

[F1] The tilt $R=\mathcal O_C^\flat$ is a valuation domain with $v_R(x)=v(x^\sharp)$; the regular cyclotomic generator $\xi$ of $\ker\theta$ reduces to an element of tilt valuation one. [[lem-cyclotomic-tilt-valuation-and-fontaine-principal-kernel]]

[F2] The Fontaine map $\theta:W(R)\to\mathcal O_C$ is surjective and comes with a specified set-theoretic section $\sigma$. [[lem-choice-free-fontaine-map-surjectivity-for-the-padic-completion]]

[F3] The Witt ring is $p$-adically complete and separated, $p$ is regular, and reduction mod $p$ is $R$. [[lem-perfect-base-witt-frobenius-and-p-adic-completeness]]

[F4] $B_{\mathrm{dR}}^+$ is the complete DVR of the Fontaine kernel with residue $C$, and its finite quotients are the corresponding Fontaine quotients. [[lem-choice-free-de-rham-period-completion-is-a-discrete-valuation-ring]]

[F5] The given algebraic closure embeds canonically in $B_{\mathrm{dR}}^+$ with its prescribed residue. [[lem-choice-free-algebraic-coefficients-and-logarithm-branch-in-de-rham-periods]]

[F6] The completed crystalline ring embeds into $B_{\mathrm{dR}}^+$ by its finite-quotient completion map. [[lem-choice-free-completed-crystalline-embedding-in-the-de-rham-ring]]

[F7] Finite valuation rings are finite free over the lower valuation rings; a totally ramified extension is generated integrally by a uniformizer with an Eisenstein polynomial. [[lem-choice-free-finite-padic-different-and-base-change-calculus]]

[F8] The tilt has the canonical residue-constant field embedding. [[lem-choice-free-cyclotomic-tilt-value-group-and-residue-constants]]

[F9] The ordinary and ball completions agree, and $\mathcal O_C$ is canonically complete for powers of $\pi$. [[lem-choice-free-identification-of-padic-algebraic-closure-completions]]

## Proof

1.1 Put $W=W(R)$ and $e=[K:K_0]$. When $e=1$ the conclusion is [F6]. Assume $e>1$, and choose one uniformizer $\pi$ with $\pi^e=pu$ for a unit $u\in\mathcal O_K^\times$. Put $\eta=\sigma(\pi)\in W$, so $\theta(\eta)=\pi$. Its mod-$p$ reduction $a\in R$ has $v_R(a)=1/e$: the reduction of $\theta$ sends $a$ to $a^\sharp\bmod p$, and $v(\pi)=1/e<1$. Write $B=\mathcal O_K\otimes_{W(k)}W$, $z=\eta/\pi$, $D=B[z]\subset B[1/p]$, and $A=\widehat D$ for the $\pi$-adic completion. The unramified Witt embedding is the canonical residue-constant embedding, $B$ is finite free over $W$, and $B/\pi B\cong R$. [F1, F2, F3, F6, F7, F8, F9, given, construct, algebra]

2.1 The natural map $B[Z]/(\pi Z-\eta)\to D$ is an isomorphism: modulo $\pi$, $\eta$ is the nonzero element $a$ of the domain $R$, so the relation ideal is $\pi$-saturated by reduction and cancellation. Thus $A/\pi A\cong(R/aR)[Z]$. Set $w=1-z$. The monic polynomial $1-Z$ is regular modulo $\pi$, so $wA$ is $\pi$-saturated and closed. Its quotient $A/wA$ is the $\pi$-adic completion of $B/(\pi-\eta)$. [F1, F3, step 1.1, algebra]

3.1 The map $B\to\mathcal O_C$ induced by [F2] and [F5] has modulo $\pi$ kernel $aR$: this is exactly the set of tilt elements whose sharp has valuation at least $v(\pi)$. It is surjective. Thus $B/(\pi-\eta)\to\mathcal O_C$ is an isomorphism modulo $\pi$. Its source is $\pi$-adically complete and separated: $(\pi-\eta)B$ is $\pi$-saturated since $a$ is regular in $R$, hence closed by successive division. Passing through the complete quotients proves $A/wA\cong\mathcal O_C$. Let $g(X)=X^e+\sum_{i<e}c_iX^i$ be the Eisenstein polynomial of $\pi$ over $K_0$. The reduction of $g(\eta)$ mod $p$ is $a^e$, of tilt valuation one, and $\theta(g(\eta))=0$. Therefore $g(\eta)=\xi v$ for a unit $v\in W^\times$. In $B$, factor $g(\eta)=(\eta-\pi)q(\eta)$; the residue of $q(\eta)$ is $g'(\pi)\ne0$. Hence $w$ is a uniformizer of $B_{\mathrm{dR}}^+$. [F1, F2, F3, F4, F5, F7, F9, step 2.1, algebra]

4.1 For each $n$, $B/(\pi-\eta)^n$ is $\pi$-adically complete and separated, since the reduction of $(\pi-\eta)^n$ is the non-zero-divisor $(-a)^n$. The map to $B_{\mathrm{dR}}^+/w^n$ gives an isomorphism after inverting $p$: factor the Eisenstein equation at $\eta$, use that the cofactor has nonzero residue, and apply finite nilpotent Hensel lifting to identify the unique root reducing to $\pi$. The quotient is the constructed $W[1/p]/\xi^n$. Modulo $w^n$, substitute $z=1-w$: the image of $D$ lies in the fixed complete module $\pi^{-(n-1)}B/(\pi-\eta)^n$. Evaluation thus extends to $h:A\to B_{\mathrm{dR}}^+$. Since $A/wA\cong\mathcal O_C$, induction gives $h^{-1}(w^nB_{\mathrm{dR}}^+)=w^nA$. [F3, F4, F5, step 2.1, step 3.1, construct, algebra]

5.1 If $x\in\bigcap_nw^nA$, its image in $(R/aR)[Z]$ is divisible by every power of $1-Z$, hence zero by bounded polynomial degree. Thus $x=\pi x_1$; regularity of $1-Z$ modulo $\pi$ gives $x_1\in\bigcap_nw^nA$. Iterating proves $x\in\bigcap_m\pi^mA=0$, so $h$ is injective. [F3, step 2.1, step 4.1, algebra]

6.1 Put $s=\xi/p$ and $A_{\max}=\widehat{W[s]}_p$. Since $c_i\in pW(k)$ and $\pi^e=pu$, the identity $g(\eta)=\xi v$ gives $v s=u z^e+\sum_{i<e}(c_i/p)\eta^i$. Hence $B[s]\subset D$. Dividing the same identity by $\pi^e$ shows that $z$ satisfies a monic degree-$e$ equation over $B[s]$: each $c_i/\pi^{e-i}$ belongs to $\mathcal O_K$, and $\xi/\pi^e=s/u$. Consequently $D$ is spanned over $B[s]$ by $1,z,\ldots,z^{e-1}$, and $D\subseteq\pi^{-(e-1)}B[s]$. These bounds make the two $\pi$-adic topologies equivalent; since $B$ is finite free over $W$, completion gives $K\otimes_{K_0}A_{\max}[1/p]\cong A[1/p]$. [F1, F3, F7, step 1.1, step 3.1, step 5.1, algebra]

7.1 The same polynomial-mod-$p$ argument with $D_0=W[\xi/p]$ and $w_0=\xi/p$ embeds $A_{\max}$ in $B_{\mathrm{dR}}^+$: its quotient modulo $p$ is $(R/\bar\xi R)[w_0]$, its quotient by $w_0$ is $\mathcal O_C$, and the $w_0$-adic intersection is zero by the argument of steps 2.1–5.1. Every $\xi^n/n!$ lies in $W[\xi/p]$, since $p^n/n!\in\mathbb Z_p$. The completed map $A_{\mathrm{cris}}\to A_{\max}$ followed by this de Rham embedding agrees with [F6] on every finite quotient and is therefore injective. Finite flatness and inversion of the nonzero $t$ now give $K\otimes_{K_0}B_{\mathrm{cris}}\hookrightarrow B_{\mathrm{dR}}$. The proof uses the specified Fontaine section, a single finite uniformizer choice and finite quotient calculations, not an infinite root selection. [F1, F2, F3, F4, F6, step 2.1, step 5.1, step 6.1, algebra] ∎

## Source notes

Brinon, Section 2.4, Propositions 2.45–2.47, was read in the full locally cached paper. The proof reconstructs its ramified $A_{\max}$ argument and replaces both Kummer towers by the already supplied Fontaine section and an Eisenstein polynomial. It does not assert semistable injection or the invariant fields.
