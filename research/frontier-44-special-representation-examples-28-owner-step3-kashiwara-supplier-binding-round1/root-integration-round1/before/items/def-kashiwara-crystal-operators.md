---
id: def-kashiwara-crystal-operators
kind: definition
title: "The Kashiwara operators $\\tilde e_i$ and $\\tilde f_i$ of an integrable module"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-kashiwara-skew-derivations-on-the-negative-quantum-half, def-quantum-weight-module-and-integrability, thm-unique-kashiwara-i-string-decomposition, thm-quantized-sl-two-string-formulas, def-quantum-integers-factorials-and-divided-powers-at-q-i]
justified_by: []
aliases: []
landmark: false
dependency_level: 2
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Masaki Kashiwara, On crystal bases of the q-analogue of universal enveloping algebras, Duke Math. J. 63 (1991), no. 2, 465-516"
      url: "https://webpages.math.luc.edu/~ptingley/oldseminars/QuantumGroupsSpring2011/Kashiwara91.pdf"
      locator: "§2.2, printed p. 470, (2.2.2)-(2.2.4): the operators $\\tilde e_i,\\tilde f_i$ on an integrable module, defined through the string decomposition, with $\\tilde e_i\\tilde f_i=\\mathrm{id}-p_i$ on the $i$-strings; §4.1, printed pp. 480-481: the same operators on $V(\\lambda)$ with the endpoint projections."
    - title: "Kyeonghoon Jeong, Seok-Jin Kang and Masaki Kashiwara, Crystal Bases for Quantum Generalized Kac-Moody Algebras, arXiv:math/0305390"
      url: "https://arxiv.org/pdf/math/0305390"
      locator: "§4, printed pp. 17-19, Definition 4.5 and Proposition 4.6: the Kashiwara operators on integrable modules, their weight shifts and kernel and partial-inverse properties."
    - title: "Richard Borcherds, Mark Haiman, Theo Johnson-Freyd, Nicolai Reshetikhin and Vera Serganova, Berkeley Lectures on Lie Groups and Quantum Groups (book-length lecture notes, last updated 18 January 2024)"
      url: "https://categorified.net/LieQuantumGroups.pdf"
      locator: "Ch. 13, §13.3, printed pp. 328-329: the rank-one string operators and the chain model of $\\mathfrak{sl}_2$-crystals used for the endpoint behaviour."
---

## Definition

Let $M$ be an integrable chosen $P$-graded type-1 module ([[def-quantum-weight-module-and-integrability]]) and fix $i\in I$. By [[thm-unique-kashiwara-i-string-decomposition]] every $u\in M_\lambda$ has a unique admissible decomposition
$$u=\sum_{n\ge0}F_i^{(n)}u_n,\qquad u_n\in H_{\lambda+n\alpha_i}=\ker(E_i)\cap M_{\lambda+n\alpha_i},$$
with $u_n=0$ whenever $n>\langle\lambda+n\alpha_i,h_i\rangle$. Define the **Kashiwara operators**
$$\tilde e_i u:=\sum_{n\ge1}F_i^{(n-1)}u_n,\qquad \tilde f_i u:=\sum_{n\ge0}F_i^{(n+1)}u_n .$$
Both are linear maps on $M$, shifting the label weight by $+\alpha_i$, respectively $-\alpha_i$. Along each string, $\tilde e_i$ moves $F_i^{(n)}u_n$ to $F_i^{(n-1)}u_n$ and kills the top position $n=0$, while $\tilde f_i$ moves it to $F_i^{(n+1)}u_n$ and kills a string exactly at its bottom, where $n=\langle h_i,\mathrm{wt}(u_n)\rangle$.

Let $p_{\mathrm{top}}$ and $p_{\mathrm{bottom}}$ be the projections onto the top positions and the bottom positions of these strings:
$$p_{\mathrm{top}}u:=u_0,\qquad p_{\mathrm{bottom}}u:=\sum_{n:\,n=\langle\lambda+n\alpha_i,h_i\rangle}F_i^{(n)}u_n .$$
Then
$$\ker\tilde e_i=\ker E_i,\qquad \ker\tilde f_i=\ker F_i,\qquad \tilde f_i\tilde e_i=\mathrm{id}-p_{\mathrm{top}},\qquad \tilde e_i\tilde f_i=\mathrm{id}-p_{\mathrm{bottom}},$$
so $\tilde e_i$ and $\tilde f_i$ are inverse to each other on each existing string edge. Module homomorphisms commute with both operators, $p_{\mathrm{top}}$ and $p_{\mathrm{bottom}}$. On $\ker E_i$ one has $\tilde f_i=F_i$, and on $\ker F_i$ one has $\tilde e_i=E_i$. At interior positions the operators differ from the generators: in the rank-one module $L_i(2)$ with highest vector $v$ and $u=F_iv$, one has $F_iu=[2]_iF_i^{(2)}v$ while $\tilde f_iu=F_i^{(2)}v$, and $[2]_i\neq1$. No choice principle is used. The negative-half counterpart of these operators, where the infinite string has no bottom and only the lower-string relation survives, is the skew-derivation pair of [[def-kashiwara-skew-derivations-on-the-negative-quantum-half]]; it is not used here.

## Facts & Assumptions

**Given:** An integrable chosen $P$-graded type-1 module $M$, an index $i$, and for every $u\in M_\lambda$ its unique admissible decomposition $u=\sum_{n\ge0}F_i^{(n)}u_n$ with $u_n\in H_{\lambda+n\alpha_i}$.

[F1] $M=\bigoplus_{\mu\in P}M_\mu$ with $K_h$ acting on $M_\mu$ by $q^{\langle\mu,h\rangle}$, $E_iM_\mu\subseteq M_{\mu+\alpha_i}$, $F_iM_\mu\subseteq M_{\mu-\alpha_i}$, and $E_i,F_i$ locally nilpotent; a nonzero element of $H_\mu$ has $\langle\mu,h_i\rangle\ge0$, and $F_i^{(n)}$ is injective on $H_\mu$ for $0\le n\le\langle\mu,h_i\rangle$ and zero for $n>\langle\mu,h_i\rangle$, with $h_i$ the simple coroot of the datum ([[def-quantum-weight-module-and-integrability]], [[thm-unique-kashiwara-i-string-decomposition]]).

[F2] The decomposition of [F1] is unique and $M_\lambda$ is the internal direct sum of the nonzero spaces $F_i^{(n)}H_{\lambda+n\alpha_i}$; in particular the coefficient $u_n$ and the position of each string are well defined ([[thm-unique-kashiwara-i-string-decomposition]]).

[F3] Divided powers satisfy $F_iF_i^{(n)}=[n+1]_iF_i^{(n+1)}$ and $E_iF_i^{(n)}w=[a-n+1]_iF_i^{(n-1)}w$ for $w\in H_\mu$ with $a=\langle\mu,h_i\rangle$; the module $L_i(2)$ of dimension $3$ has a highest vector $v$ with $F_iv=[1]_iv_1$, $F_iv_1=[2]_iv_2$, $F_iv_2=0$, and $[2]_i=q_i+q_i^{-1}\neq1$ ([[thm-quantized-sl-two-string-formulas]], parts (ii)-(iii), [[def-quantum-integers-factorials-and-divided-powers-at-q-i]]).

## Verification

**Proof technique:** direct. All operators are read off the unique string decomposition string by string.

1.1 Linearity and weights. On a string position $F_i^{(n)}u_n$ with $u_n\in H_{\lambda+n\alpha_i}$ put $\tilde e_i(F_i^{(n)}u_n):=F_i^{(n-1)}u_n$ for $n\ge1$ and $0$ for $n=0$, and $\tilde f_i(F_i^{(n)}u_n):=F_i^{(n+1)}u_n$. By [F2] every $u$ is a unique sum of such positions inside its decomposition, so these prescriptions define linear maps on $M$; the shifted vectors lie in $M_{\lambda+\alpha_i}$ and $M_{\lambda-\alpha_i}$ respectively, since $F_i^{(n-1)}u_n\in M_{\lambda+\alpha_i}$ and $F_i^{(n+1)}u_n\in M_{\lambda-\alpha_i}$ by [F1]. [F1, F2]

2.1 The top projection. Writing $p_{\mathrm{top}}u:=u_0$ gives a well-defined linear idempotent by [F2]. For $u=\sum_nF_i^{(n)}u_n$ one has $\tilde f_i\tilde e_iu=\sum_{n\ge1}F_i^{(n)}u_n$ by step 1.1, hence $u-\tilde f_i\tilde e_iu=u_0=p_{\mathrm{top}}u$; equivalently $\tilde f_i\tilde e_i=\mathrm{id}-p_{\mathrm{top}}$, and on each position with $n\ge1$ the composition $\tilde f_i\tilde e_i$ is the identity. [step 1.1, F2]

2.2 The bottom projection. If $n\ge\langle\lambda+n\alpha_i,h_i\rangle$, then $n$ equals that length by [F1], and $F_i^{(n+1)}u_n=0$ because $F_i^{(n)}$ is zero beyond the string length; thus $\tilde f_iu=\sum_{n<\langle\lambda+n\alpha_i,h_i\rangle}F_i^{(n+1)}u_n$, which is the admissible decomposition of $\tilde f_iu$ (its $m$-th top coefficient is $u_{m-1}$ for $m\ge1$). Applying step 1.1 to this decomposition, $\tilde e_i\tilde f_iu=\sum_{n<\langle\lambda+n\alpha_i,h_i\rangle}F_i^{(n)}u_n$, so $u-\tilde e_i\tilde f_iu=\sum_{n=\langle\lambda+n\alpha_i,h_i\rangle}F_i^{(n)}u_n=p_{\mathrm{bottom}}u$; in particular on each position that is not a bottom the composition $\tilde e_i\tilde f_i$ is the identity. [F1, step 1.1, F2]

2.3 Kernels. For $u=\sum_nF_i^{(n)}u_n$, step 1.1 gives $\tilde e_iu=0$ exactly when $u_n=0$ for all $n\ge1$, that is $u=u_0\in H_\lambda$. On the other hand [F3] gives $E_iu=\sum_{n\ge1}[a_n-n+1]_iF_i^{(n-1)}u_n$ with $a_n=\langle\lambda+n\alpha_i,h_i\rangle$; here $a_n-n+1\ge1$ for $n\le a_n$ by admissibility and the term vanishes for $n>a_n$, so $E_iu=0$ exactly when $u_n=0$ for all $n\ge1$ as well; hence $\ker\tilde e_i=\ker E_i$. Likewise $\tilde f_iu=\sum_{n<a_n}F_i^{(n+1)}u_n=0$ exactly when $u_n=0$ for all $n<a_n$, and $F_iu=\sum_{n<a_n}[n+1]_iF_i^{(n+1)}u_n$ vanishes exactly then because $[n+1]_i\neq0$; hence $\ker\tilde f_i=\ker F_i$. [F1, F3, step 1.1]

2.4 Agreement on the kernels. If $u\in\ker E_i$ then $u=u_0$ by [F2], so $\tilde f_iu=F_iu_0=F_iu$; if $u\in\ker F_i$ then every nonzero coefficient $u_n$ sits at a bottom, $n=a_n$, so $E_iu=\sum_n[a_n-n+1]_iF_i^{(n-1)}u_n=\sum_nF_i^{(n-1)}u_n=\tilde e_iu$ by [F3]. [F2, F3, step 1.1]

2.5 Naturality. Let $\varphi:M\to N$ be a homomorphism of weight-graded $A_i$-modules, so $\varphi$ commutes with $E_i$, $F_i$ and $K_i$ and preserves each $H_\mu$ and each weight space. Applying $\varphi$ to the admissible decomposition of $u$ gives the admissible decomposition of $\varphi(u)$ by uniqueness [F2], because $\varphi$ commutes with divided powers; hence $\varphi\tilde e_iu=\tilde e_i\varphi(u)$, $\varphi\tilde f_iu=\tilde f_i\varphi(u)$, and the same holds for the projections. [step 1.1, F2]

3.1 Interior comparison. In $L_i(2)$ take the highest vector $v=v_0$ and $u=F_iv=[1]_iv_1$; by [F3] $F_iu=[2]_iF_i^{(2)}v$, whereas $u$ is the position-$1$ vector of the string of $v$ of length $2$, so $\tilde f_iu=F_i^{(2)}v$. Since $[2]_i=q_i+q_i^{-1}$ and $q_i$ is transcendental over $\mathbb Q$, $[2]_i\neq1$, so $\tilde f_i$ differs from $F_i$ at this interior position. [F3, step 1.1] ∎
