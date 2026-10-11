---
id: ex-projection-from-b-infinity-to-a-highest-weight-crystal
kind: example
title: "The projection from $B(\\infty)$ to a highest weight crystal for $\\mathfrak{sl}_2$"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-axiom-of-choice, def-crystal-graph-epsilon-phi-and-weight, def-crystal-lattice-and-crystal-basis, def-kashiwara-crystal-operators, def-kashiwara-lattices-lambda-and-infinity, def-kashiwara-skew-derivations-on-the-negative-quantum-half, lem-crystal-operators-commute-with-highest-weight-projection-modulo-q, thm-crystal-basis-of-the-negative-half, thm-quantized-sl-two-string-formulas, thm-the-i-string-decomposition-of-the-negative-half]
justified_by: []
aliases: []
landmark: false
dependency_level: 9
proof_strategy: direct
verification:
  precheck: pass
axiom_use: "AC is inherited through the two cited general suppliers (the projection lemma and the negative-half crystal theorem); the example's own rank-one computations are choice-free."
sources:
  scraped: []
  references:
    - title: "Masaki Kashiwara, On crystal bases of the q-analogue of universal enveloping algebras, Duke Math. J. 63 (1991), no. 2, 465-516"
      url: "https://webpages.math.luc.edu/~ptingley/oldseminars/QuantumGroupsSpring2011/Kashiwara91.pdf"
      locator: "Theorem 5, printed p. 488: the projection $\\pi_\\lambda:L(\\infty)\\to L(\\lambda)$ with $\\pi_\\lambda(L(\\infty))=L(\\lambda)$, $B(\\lambda)\\cong\\{b\\in B(\\infty):\\pi_\\lambda(b)\\neq0\\}$ and the operator compatibility; in the rank-one case $B(\\infty)=\\mathbb Z_{\\ge0}$ and the projection is the truncation $n\\mapsto n$ for $n\\le m$."
    - title: "Kyeonghoon Jeong, Seok-Jin Kang and Masaki Kashiwara, Crystal Bases for Quantum Generalized Kac-Moody Algebras, arXiv:math/0305390"
      url: "https://arxiv.org/pdf/math/0305390"
      locator: "§6-7, printed pp. 22-26 and 46: the rank-one case of $B(\\infty)$ on $\\mathbb Q(q)[F_1]$ and Proposition 7.34 (N(r)) with Corollary 7.14 for the truncation to $B(m\\Lambda_1)$."
    - title: "Richard Borcherds, Mark Haiman, Theo Johnson-Freyd, Nicolai Reshetikhin and Vera Serganova, Berkeley Lectures on Lie Groups and Quantum Groups (book-length lecture notes, last updated 18 January 2024)"
      url: "https://categorified.net/LieQuantumGroups.pdf"
      locator: "Ch. 13, §13.3, printed p. 329, Theorem 13.3.0.4 and Example 13.3.0.3: the chain description of irreducible $\\mathfrak{sl}_2$-crystals used for $B(m\\omega)$."
---

## Example

Let $\mathfrak g=\mathfrak{sl}_2$ with $q_1=q$ as in [[ex-kashiwara-strings-in-the-three-dimensional-sl-two-module]]. Then $U_q^-=\mathbb Q(q)[F_1]$ and the Kashiwara operators on the negative half act by $\tilde f_1(F_1^{(n)})=F_1^{(n+1)}$ and $\tilde e_1(F_1^{(n)})=F_1^{(n-1)}$ (with $F_1^{(-1)}=0$), so
$$\mathcal L(\infty)=A_0\text{-span}\{F_1^{(n)}:n\ge0\},\qquad \mathcal B(\infty)=\{b_n:=F_1^{(n)}+q\mathcal L(\infty):n\ge0\}\cong\mathbb Z_{\ge0},$$
with $\tilde f_1b_n=b_{n+1}$, $\tilde e_1b_{n+1}=b_n$, $\tilde e_1b_0=0$, $\operatorname{wt}(b_n)=-n\alpha_1=-2n\omega$, $\varepsilon_1(b_n)=n$, formal $\varphi_1(b_n)=-n$ and actual lowering length $\ell_1^-(b_n)=\infty$.

For $\lambda=m\omega\in P^+$ ($m\ge0$) let $V(m\omega)=L_1(m)$ have basis $v_t=F_1^{(t)}v_m$ ($0\le t\le m$, $v_m$ the highest weight vector) as in [[thm-quantized-sl-two-string-formulas]](iii), and let $\pi_m=\pi_{m\omega}:U_q^-\to V(m\omega)$, $P\mapsto Pv_m$. Then:

(a) $\pi_m(b_n)=0$ for $n>m$, and $\pi_m$ restricts to a bijection $\{b_0,\dots,b_m\}\xrightarrow{\sim}\mathcal B(m\omega)=\{v_0+q\mathcal L(m\omega),\dots,v_m+q\mathcal L(m\omega)\}$;

(b) $\tilde e_1\pi_m(b_n)=\pi_m(\tilde e_1b_n)$ for $0\le n\le m$; this raising compatibility is asserted only for surviving residues. It fails at the killed residue $b_{m+1}$, where the left side is $0$ and the right side is the nonzero bottom residue $\pi_m(b_m)$. Lowering compatibility holds for every $b_n$, with both sides zero for $n\ge m$.

(c) for $m\ge n$ the map $\pi_m:\mathcal L(\infty)_{-n\alpha_1}\to\mathcal L(m\omega)_{m\omega-n\alpha_1}$ is an isomorphism, and $\{b\in\mathcal B(\infty)_{-n\alpha_1}:\pi_m(b)\neq0\}=\{b_0,\dots,b_n\}$ for $m\ge n$; these are the large-weight instances of [[lem-crystal-operators-commute-with-highest-weight-projection-modulo-q]].

**Choice.** The example's own rank-one computations are choice-free, but it cites the general projection lemma [[lem-crystal-operators-commute-with-highest-weight-projection-modulo-q]] and [[thm-crystal-basis-of-the-negative-half]], whose proofs inherit the axiom of choice from the grand loop; [[def-axiom-of-choice]] is therefore declared as a dependency.

## Facts & Assumptions

**Given:** The rank-one datum of $\mathfrak{sl}_2$, the divided powers $F_1^{(n)}$, the module $V(m\omega)=L_1(m)$ with basis $v_t=F_1^{(t)}v_m$, and the projection $\pi_m$.

[F1] $U_q^-=\mathbb Q(q)[F_1]$ is the polynomial algebra on $F_1$; the skew derivation satisfies $e_1'(F_1^n)=(1+q^{-2}+\cdots+q^{-2(n-1)})F_1^{n-1}$ with kernel the constants, so the divided monomials $F_1^{(n)}$ have the single string component $1$ at position $n$; hence $\mathcal L(\infty)=A_0\text{-span}\{F_1^{(n)}:n\ge0\}$ with $\tilde f_1(F_1^{(n)})=F_1^{(n+1)}$ and $\tilde e_1(F_1^{(n)})=F_1^{(n-1)}$ ([[def-kashiwara-skew-derivations-on-the-negative-quantum-half]], [[thm-the-i-string-decomposition-of-the-negative-half]]).

[F2] $V(m\omega)=L_1(m)$ has divided basis $v_t=F_1^{(t)}v_m$ with $\tilde e_1v_t=v_{t-1}$, $\tilde f_1v_t=v_{t+1}$ for the string positions and endpoint zeros, and $\mathcal L(m\omega)=A_0v_0\oplus\cdots\oplus A_0v_m$ with residue basis $\mathcal B(m\omega)$ ([[thm-quantized-sl-two-string-formulas]], part (iii), [[def-kashiwara-crystal-operators]], [[def-kashiwara-lattices-lambda-and-infinity]]).

[F3] The projection lemma and the negative-half crystal theorem give, for general highest weights, the lattice projection, the surviving-residue bijection, the operator compatibilities on surviving residues, the residue basis of $\mathcal L(\infty)$ and the infinite lowering length; their proofs inherit the axiom of choice, declared here ([[lem-crystal-operators-commute-with-highest-weight-projection-modulo-q]], [[thm-crystal-basis-of-the-negative-half]], [[def-axiom-of-choice]]).

[F4] Invariants of a crystal: $\varepsilon_1(b)=\max\{n:\tilde e_1^nb\neq0\}$, $\varphi_1=\varepsilon_1+\langle h_1,\mathrm{wt}\rangle$ formally on the negative half, $\ell_1^-=\infty$ ([[def-crystal-graph-epsilon-phi-and-weight]]).

## Verification

**Proof technique:** direct.

1.1 The negative-half crystal. By [F1], $\pi_0:\mathbb Q(q)[F_1]\to V(0)=\mathbb Q(q)$ kills $F_1^{(n)}$ for $n\ge1$ and fixes constants, so the residue classes $b_n=F_1^{(n)}+q\mathcal L(\infty)$ ($n\ge0$) are nonzero and linearly independent modulo $q$; the operators act as $\tilde f_1b_n=b_{n+1}$ and $\tilde e_1b_{n+1}=b_n$, $\tilde e_1b_0=0$. Hence $\mathcal B(\infty)\cong\mathbb Z_{\ge0}$, with weights $\mathrm{wt}(b_n)=-n\alpha_1=-2n\omega$, $\varepsilon_1(b_n)=n$, formal $\varphi_1(b_n)=n-2n=-n$ and $\ell_1^-(b_n)=\infty$. [F1, F4]

2.1 The module crystal. By [F2], $\pi_m(F_1^{(n)})=v_n$ for $n\le m$ and $0$ for $n>m$; so $\pi_m(b_n)=0$ for $n>m$ and $\pi_m(b_n)=v_n+q\mathcal L(m\omega)$ for $0\le n\le m$. The classes $v_0,\dots,v_m$ are a $\mathbb Q$-basis of $\mathcal L(m\omega)/q\mathcal L(m\omega)$, and the operator action on them is the string action, so the surviving residues map bijectively onto $\mathcal B(m\omega)$; this is (a). [F2, step 1.1]

3.1 Raising compatibility and its failure. For $0\le n\le m$ one has $\tilde e_1\pi_m(b_n)=\tilde e_1(v_n+q\mathcal L(m\omega))=v_{n-1}$ for $n\ge1$ and $0$ for $n=0$, while $\pi_m(\tilde e_1b_n)=v_{n-1}$ for $n\ge1$ and $0$ for $n=0$; hence the two sides agree for every surviving residue. At the killed residue $n=m+1$, the left side is $\tilde e_1\pi_m(b_{m+1})=\tilde e_1\cdot0=0$, while the right side is $\pi_m(\tilde e_1b_{m+1})=\pi_m(b_m)=v_m\neq0$ modulo $q$; this is the stated boundary failure. Lowering: $\tilde f_1\pi_m(b_n)=v_{n+1}$ for $n<m$ and $0$ for $n\ge m$, while $\pi_m(\tilde f_1b_n)=v_{n+1}$ for $n<m$ and $0$ for $n\ge m$, so both sides agree for every $n$. [F2, step 2.1]

4.1 Isomorphism in fixed degree. In root degree $-n\alpha_1$ the free $A_0$-module $\mathcal L(\infty)_{-n\alpha_1}$ is the one-dimensional span of $F_1^{(n)}$ with residue $b_n$, and $\mathcal L(m\omega)_{m\omega-n\alpha_1}$ is the one-dimensional span of $v_n$ with residue $v_n+q\mathcal L(m\omega)$ for $m\ge n$; the map $\pi_m$ sends $F_1^{(n)}$ to $v_n$, an isomorphism on these one-dimensional free modules, and its surviving-residue set is $\{b_n\}$ when $m\ge n$ and empty otherwise. Together with step 3.1 this is the large-weight instance of the projection lemma. [F2, F3, step 2.1]

5.1 Choice. The computations of steps 1.1 through 4.1 use only explicit monomials, divided powers and one-dimensional free modules, so they are choice-free; the axiom of choice is declared because the cited general suppliers [F3] inherit it from the grand loop. [F3] ∎
