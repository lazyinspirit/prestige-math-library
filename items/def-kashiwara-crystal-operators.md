---
id: def-kashiwara-crystal-operators
kind: definition
title: "The Kashiwara operators $\\tilde e_i$ and $\\tilde f_i$ of an integrable module"
status: published
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-kashiwara-skew-derivations-on-the-negative-quantum-half, def-quantum-weight-module-and-integrability, thm-unique-kashiwara-i-string-decomposition, thm-quantized-sl-two-string-formulas, def-quantum-integers-factorials-and-divided-powers-at-q-i, thm-the-i-string-decomposition-of-the-negative-half]
justified_by: []
aliases: []
landmark: false
dependency_level: 3
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Masaki Kashiwara, On crystal bases of the q-analogue of universal enveloping algebras, Duke Math. J. 63 (1991), no. 2, 465-516"
      url: "https://webpages.math.luc.edu/~ptingley/oldseminars/QuantumGroupsSpring2011/Kashiwara91.pdf"
      locator: "§2.2, printed p. 473, (2.2.1)–(2.2.5): module string operators; §3.5, printed pp. 486–487, negative-half operators."
    - title: "Kyeonghoon Jeong, Seok-Jin Kang and Masaki Kashiwara, Crystal Bases for Quantum Generalized Kac-Moody Algebras, arXiv:math/0305390"
      url: "https://arxiv.org/pdf/math/0305390"
      locator: "§4, printed p. 15, Definition 4.3, (4.3)–(4.4); §6, printed p. 23, Definition 6.2, (6.9)–(6.10)."
    - title: "Richard Borcherds, Mark Haiman, Theo Johnson-Freyd, Nicolai Reshetikhin and Vera Serganova, Berkeley Lectures on Lie Groups and Quantum Groups (book-length lecture notes, last updated 18 January 2024)"
      url: "https://categorified.net/LieQuantumGroups.pdf"
      locator: "§13.3, printed pp. 328–329: string operators and naturality."
---

## Definition

Let $M$ be an integrable chosen $P$-graded type-1 module ([[def-quantum-weight-module-and-integrability]]) and fix $i\in I$. By [[thm-unique-kashiwara-i-string-decomposition]] every $u\in M_\lambda$ has a unique admissible decomposition
$$u=\sum_{n\ge0}F_i^{(n)}u_n,\qquad u_n\in H_{\lambda+n\alpha_i}=\ker(E_i)\cap M_{\lambda+n\alpha_i},$$
with $u_n=0$ whenever $n>\langle\lambda+n\alpha_i,h_i\rangle$. Define the **Kashiwara operators**
$$\tilde e_i u:=\sum_{n\ge1}F_i^{(n-1)}u_n,\qquad \tilde f_i u:=\sum_{n\ge0}F_i^{(n+1)}u_n .$$
Both are linear maps on $M$, shifting the label weight by $+\alpha_i$, respectively $-\alpha_i$. Along each string, $\tilde e_i$ moves $F_i^{(n)}u_n$ to $F_i^{(n-1)}u_n$ and kills the top position $n=0$, while $\tilde f_i$ moves it to $F_i^{(n+1)}u_n$ and kills a string exactly at its bottom, where $n=\langle\mathrm{wt}(u_n),h_i\rangle$.

Let $p_{\mathrm{top}}$ and $p_{\mathrm{bottom}}$ be the projections onto the top positions and the bottom positions of these strings:
$$p_{\mathrm{top}}u:=u_0,\qquad p_{\mathrm{bottom}}u:=\sum_{n:\,n=\langle\lambda+n\alpha_i,h_i\rangle}F_i^{(n)}u_n .$$
Then
$$\ker\tilde e_i=\ker E_i,\qquad \ker\tilde f_i=\ker F_i,\qquad \tilde f_i\tilde e_i=\mathrm{id}-p_{\mathrm{top}},\qquad \tilde e_i\tilde f_i=\mathrm{id}-p_{\mathrm{bottom}},$$
so $\tilde e_i$ and $\tilde f_i$ are inverse to each other on each existing string edge. Module homomorphisms commute with both operators, $p_{\mathrm{top}}$ and $p_{\mathrm{bottom}}$. On $\ker E_i$ one has $\tilde f_i=F_i$, and on $\ker F_i$ one has $\tilde e_i=E_i$. At interior positions the operators differ from the generators: in the rank-one module $L_i(2)$ with highest vector $v$ and $u=F_iv$, one has $F_iu=[2]_iF_i^{(2)}v$ while $\tilde f_iu=F_i^{(2)}v$, and $[2]_i\neq1$. No choice principle is used. The analogous Kashiwara operators on the negative half $U_q^-$ are the shifts of its unique $e_i'$-string decomposition ([[thm-the-i-string-decomposition-of-the-negative-half]]), constructed using the skew derivation of [[def-kashiwara-skew-derivations-on-the-negative-quantum-half]]. Their strings have no bottom: $\tilde e_i\tilde f_i=\mathrm{id}$ and $\tilde f_i\tilde e_i=\mathrm{id}-P_i$, where $P_i$ projects onto $\ker e_i'$; the second identity follows by subtracting the position-zero coefficient $u_0=P_iu$ from the string expansion. These string-shift operators are distinct from the skew derivations $e_i',e_i''$. No negative-half operator is used in the module verification below.

## Facts & Assumptions

**Given:** An integrable chosen $P$-graded type-1 module $M$, an index $i$, and for every $u\in M_\lambda$ its unique admissible decomposition $u=\sum_{n\ge0}F_i^{(n)}u_n$ with $u_n\in H_{\lambda+n\alpha_i}$.

[F1] $M=\bigoplus_{\mu\in P}M_\mu$ with $K_h$ acting on $M_\mu$ by $q^{\langle\mu,h\rangle}$, $E_iM_\mu\subseteq M_{\mu+\alpha_i}$, $F_iM_\mu\subseteq M_{\mu-\alpha_i}$, and $E_i,F_i$ locally nilpotent; a nonzero element of $H_\mu$ has $\langle\mu,h_i\rangle\ge0$, and $F_i^{(n)}$ is injective on $H_\mu$ for $0\le n\le\langle\mu,h_i\rangle$ and zero for $n>\langle\mu,h_i\rangle$, with $h_i$ the simple coroot of the datum ([[def-quantum-weight-module-and-integrability]], [[thm-unique-kashiwara-i-string-decomposition]]).

[F2] The decomposition of [F1] is unique and $M_\lambda$ is the internal direct sum of the nonzero spaces $F_i^{(n)}H_{\lambda+n\alpha_i}$; in particular the coefficient $u_n$ and the position of each string are well defined ([[thm-unique-kashiwara-i-string-decomposition]]).

[F3] Divided powers satisfy $F_iF_i^{(n)}=[n+1]_iF_i^{(n+1)}$ and $E_iF_i^{(n)}w=[a-n+1]_iF_i^{(n-1)}w$ for $w\in H_\mu$ with $a=\langle\mu,h_i\rangle$; the module $L_i(2)$ of dimension $3$ has a highest vector $v$ with $F_iv=[1]_iv_1$, $F_iv_1=[2]_iv_2$, $F_iv_2=0$, and $[2]_i=q_i+q_i^{-1}\neq1$ ([[thm-quantized-sl-two-string-formulas]], parts (ii)-(iii), [[def-quantum-integers-factorials-and-divided-powers-at-q-i]]).

## Verification

**Proof technique:** direct. All operators are read off the unique string decomposition string by string.

1.1 Linearity and weights. On a string position $F_i^{(n)}u_n$ with $u_n\in H_{\lambda+n\alpha_i}$ put $\tilde e_i(F_i^{(n)}u_n):=F_i^{(n-1)}u_n$ for $n\ge1$ and $0$ for $n=0$, and $\tilde f_i(F_i^{(n)}u_n):=F_i^{(n+1)}u_n$. By [F2] every $u$ is a unique sum of such positions inside its decomposition, so these prescriptions define linear maps on $M$; the shifted vectors lie in $M_{\lambda+\alpha_i}$ and $M_{\lambda-\alpha_i}$ respectively, since $F_i^{(n-1)}u_n\in M_{\lambda+\alpha_i}$ and $F_i^{(n+1)}u_n\in M_{\lambda-\alpha_i}$ by [F1]. [F1, F2]

2.1 The top projection. Writing $p_{\mathrm{top}}u:=u_0$ gives a well-defined linear idempotent by [F2]. For $u=\sum_nF_i^{(n)}u_n$ one has $\tilde f_i\tilde e_iu=\sum_{n\ge1}F_i^{(n)}u_n$ by step 1.1, hence $u-\tilde f_i\tilde e_iu=u_0=p_{\mathrm{top}}u$; equivalently $\tilde f_i\tilde e_i=\mathrm{id}-p_{\mathrm{top}}$, and on each position with $n\ge1$ the composition $\tilde f_i\tilde e_i$ is the identity. [step 1.1, F2]

2.2 The bottom projection. Put $a_n:=\langle\lambda+n\alpha_i,h_i\rangle$. A nonzero admissible coefficient has $n\le a_n$, and when $n=a_n$ its shifted term $F_i^{(n+1)}u_n$ is zero by [F1]. Thus $\tilde f_iu=\sum_{n<a_n}F_i^{(n+1)}u_n$. Its admissible top coefficients are $v_0=0$ and, for $m\ge1$, $v_m=u_{m-1}$ if $m\le a_{m-1}$, and $v_m=0$ otherwise. Indeed $v_m\in H_{\lambda-\alpha_i+m\alpha_i}$ and the surviving positions satisfy $m\le a_{m-1}$, so [F2] identifies this as the unique admissible decomposition; bottom coefficients are discarded. Applying step 1.1 gives $\tilde e_i\tilde f_iu=\sum_{n<a_n}F_i^{(n)}u_n$, hence $u-\tilde e_i\tilde f_iu=\sum_{n=a_n}F_i^{(n)}u_n=p_{\mathrm{bottom}}u$; on every position that is not a bottom this composition is the identity. [F1, step 1.1, F2]

2.3 Kernels. For $u=\sum_nF_i^{(n)}u_n$, step 1.1 gives $\tilde e_iu=0$ exactly when $u_n=0$ for all $n\ge1$, that is $u=u_0\in H_\lambda$. On the other hand [F3] gives $E_iu=\sum_{n\ge1}[a_n-n+1]_iF_i^{(n-1)}u_n$ with $a_n=\langle\lambda+n\alpha_i,h_i\rangle$; here $a_n-n+1\ge1$ for $n\le a_n$ by admissibility and the term vanishes for $n>a_n$, so $E_iu=0$ exactly when $u_n=0$ for all $n\ge1$ as well; hence $\ker\tilde e_i=\ker E_i$. Likewise $\tilde f_iu=\sum_{n<a_n}F_i^{(n+1)}u_n=0$ exactly when $u_n=0$ for all $n<a_n$, and $F_iu=\sum_{n<a_n}[n+1]_iF_i^{(n+1)}u_n$ vanishes exactly then because $[n+1]_i\neq0$; hence $\ker\tilde f_i=\ker F_i$. [F1, F3, step 1.1]

2.4 Agreement on the kernels. If $u\in\ker E_i$ then $u=u_0$ by [F2], so $\tilde f_iu=F_iu_0=F_iu$; if $u\in\ker F_i$ then every nonzero coefficient $u_n$ sits at a bottom, $n=a_n$, so $E_iu=\sum_{n\ge1}[a_n-n+1]_iF_i^{(n-1)}u_n=\sum_{n\ge1}F_i^{(n-1)}u_n=\tilde e_iu$; the $n=a_n=0$ strings contribute zero to both raising operators by [F3]. [F2, F3, step 1.1]

2.5 Naturality. Let $\varphi:M\to N$ be a homomorphism of weight-graded $A_i$-modules, so $\varphi$ commutes with $E_i$, $F_i$ and $K_i$ and preserves each $H_\mu$ and each weight space. Applying $\varphi$ to the admissible decomposition of $u$ gives the admissible decomposition of $\varphi(u)$ by uniqueness [F2], because $\varphi$ commutes with divided powers; hence $\varphi\tilde e_iu=\tilde e_i\varphi(u)$, $\varphi\tilde f_iu=\tilde f_i\varphi(u)$, and the same holds for the projections. [step 1.1, F2]

3.1 Interior comparison. In $L_i(2)$ take the highest vector $v=v_0$ and $u=F_iv=[1]_iv_1$; by [F3] $F_iu=[2]_iF_i^{(2)}v$, whereas $u$ is the position-$1$ vector of the string of $v$ of length $2$, so $\tilde f_iu=F_i^{(2)}v$. Since $[2]_i=q_i+q_i^{-1}$ and $q_i$ is transcendental over $\mathbb Q$, $[2]_i\neq1$, so $\tilde f_i$ differs from $F_i$ at this interior position. [F3, step 1.1] ∎
