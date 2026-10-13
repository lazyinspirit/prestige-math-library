---
id: ex-kashiwara-strings-in-the-three-dimensional-sl-two-module
kind: example
title: "Kashiwara strings in the three-dimensional $\\mathfrak{sl}_2$-module"
status: published
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-crystal-graph-epsilon-phi-and-weight, def-crystal-lattice-and-crystal-basis, def-kashiwara-crystal-operators, def-kashiwara-lattices-lambda-and-infinity, thm-quantized-sl-two-string-formulas, thm-unique-kashiwara-i-string-decomposition]
justified_by: []
aliases: []
landmark: false
dependency_level: 6
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-11
sources:
  scraped: []
  references:
    - title: "Masaki Kashiwara, On crystal bases of the q-analogue of universal enveloping algebras, Duke Math. J. 63 (1991), no. 2, 465-516"
      url: "https://webpages.math.luc.edu/~ptingley/oldseminars/QuantumGroupsSpring2011/Kashiwara91.pdf"
      locator: "§2.2, printed p. 473, (2.2.1)–(2.2.5): string-shift operators, specialized locally to the length-two string."
    - title: "Kyeonghoon Jeong, Seok-Jin Kang and Masaki Kashiwara, Crystal Bases for Quantum Generalized Kac-Moody Algebras, arXiv:math/0305390"
      url: "https://arxiv.org/pdf/math/0305390"
      locator: "§5, printed p. 19, Example 5.1(a): divided-string crystal of a real-root highest module."
    - title: "Richard Borcherds, Mark Haiman, Theo Johnson-Freyd, Nicolai Reshetikhin and Vera Serganova, Berkeley Lectures on Lie Groups and Quantum Groups (book-length lecture notes, last updated 18 January 2024)"
      url: "https://categorified.net/LieQuantumGroups.pdf"
      locator: "§13.3, printed p. 329, Example 13.3.0.3: irreducible rank-one chain crystals."
---

## Example

Let $\mathfrak g=\mathfrak{sl}_2$, so $I=\{1\}$, $a_{11}=2$, $d_1=1$, $q_1=q$, $P=\mathbb Z\omega$ with $\langle h_1,\omega\rangle=1$ and $\alpha_1=2\omega$. Let $V=L_1(2)$ be the three-dimensional simple $U_q(\mathfrak{sl}_2)$-module of [[thm-quantized-sl-two-string-formulas]](iii), with highest weight vector $v_2=w_2$ of weight $2\omega$, and put $v_1:=F_1v_2$ and $v_0:=F_1^{(2)}v_2=\frac{1}{[2]_1}F_1^2v_2$; then $(v_2,v_1,v_0)$ is a $\mathbb Q(q)$-basis of $V$ with weights $2\omega,0,-2\omega$, and $F_1v_2=v_1$, $F_1v_1=[2]_1v_0$, $F_1v_0=0$.

(a) **String decompositions.** $v_2=v_2$ (the $n=0$ component is $v_2$), $v_1=F_1^{(1)}v_2$ (component $u_1=v_2$), $v_0=F_1^{(2)}v_2$ (component $u_2=v_2$). Hence
$$\tilde e_1v_2=0,\quad \tilde e_1v_1=v_2,\quad \tilde e_1v_0=v_1,\qquad \tilde f_1v_2=v_1,\quad \tilde f_1v_1=v_0,\quad \tilde f_1v_0=0 .$$
In particular $F_1v_1=[2]_1v_0\neq0$ while $\tilde f_1v_1=v_0$, and $F_1v_0=0$ while $\tilde f_1v_0=0$: the Kashiwara operator $\tilde f_1$ agrees with $F_1$ on $\operatorname{Ker}E_1=\mathbb Q(q)v_2$ but not on the interior of the string, and $\tilde e_1$ agrees with $E_1$ on lowest weight vectors.

(b) **Crystal.** $\mathcal L(2\omega)=A_0v_2\oplus A_0v_1\oplus A_0v_0$ is a crystal lattice of $V$, and $\mathcal B(2\omega)=\{b_2,b_1,b_0\}$ with $b_2=v_2+q\mathcal L(2\omega)$, $b_1=v_1+q\mathcal L(2\omega)$, $b_0=v_0+q\mathcal L(2\omega)$ is a crystal basis with crystal graph $b_2\xrightarrow{1}b_1\xrightarrow{1}b_0$. The invariants are $\operatorname{wt}(b_2)=2\omega$, $\operatorname{wt}(b_1)=0$, $\operatorname{wt}(b_0)=-2\omega$, $\varepsilon_1(b_2)=0$, $\varepsilon_1(b_1)=1$, $\varepsilon_1(b_0)=2$, $\varphi_1(b_2)=2$, $\varphi_1(b_1)=1$, $\varphi_1(b_0)=0$, and $\varphi_1(b)=\varepsilon_1(b)+\langle h_1,\operatorname{wt}(b)\rangle$ holds for all three (for example $2=0+\langle h_1,2\omega\rangle$ and $0=2+\langle h_1,-2\omega\rangle$), in accordance with [[def-crystal-graph-epsilon-phi-and-weight]].

(c) **Partial inverses.** $\tilde e_1\tilde f_1=\operatorname{id}_V-p_{\mathrm{bot}}$ and $\tilde f_1\tilde e_1=\operatorname{id}_V-p_0$, where $p_0$ is the projection $v_2\mapsto v_2$, $v_1,v_0\mapsto0$ onto $\operatorname{Ker}E_1$; evaluated at $v_2$ this shows the failure at the top of the string: $\tilde f_1\tilde e_1v_2=0\neq v_2$. No choice principle is used. Here $p_{\mathrm{bot}}$ projects onto $\mathbb Q(q)v_0$, so $\tilde e_1\tilde f_1v_0=0\neq v_0$ fails at the bottom as well as $\tilde f_1\tilde e_1v_2=0\neq v_2$ fails at the top.

## Facts & Assumptions

**Given:** The datum of $\mathfrak{sl}_2$, the module $V=L_1(2)$ with basis $v_2,v_1,v_0$ and the operators of [[def-kashiwara-crystal-operators]].

[F1] In $V=L_1(2)$ use descending weight labels $v_2$ (highest), $v_1:=F_1v_2$ and $v_0:=F_1^{(2)}v_2$. Then $K_1v_2=q^2v_2$, $K_1v_1=v_1$, $K_1v_0=q^{-2}v_0$; $F_1v_2=v_1$, $F_1v_1=[2]_1v_0$, $F_1v_0=0$; and $E_1v_2=0$, $E_1v_1=[2]_1v_2$, $E_1v_0=v_1$. These are the supplier's divided-string formulas with its position index $t$ replaced by $2-t$ ([[thm-quantized-sl-two-string-formulas]], part (iii)).

[F2] A vector $u\in M_\lambda$ has a unique admissible string decomposition $u=\sum_nF_1^{(n)}u_n$ with $u_n\in H_{\lambda+n\alpha_1}=\ker E_1\cap M_{\lambda+n\alpha_1}$; the operators act by $\tilde e_1(\sum_nF_1^{(n)}u_n)=\sum_{n\ge1}F_1^{(n-1)}u_n$ and $\tilde f_1(\sum_nF_1^{(n)}u_n)=\sum_{n\ge0}F_1^{(n+1)}u_n$ ([[thm-unique-kashiwara-i-string-decomposition]], [[def-kashiwara-crystal-operators]]).

[F3] $\dim V_\mu=1$ for $\mu=2\omega,0,-2\omega$ and $E_1v_2=0$, $F_1v_2=v_1$, $F_1v_1=[2]_1v_0$ with $[2]_1=q+q^{-1}\neq0$ ([[def-crystal-lattice-and-crystal-basis]], [F1], [[def-kashiwara-lattices-lambda-and-infinity]]).

## Verification

**Proof technique:** direct.

1.1 The string components. $V_{2\omega}=\mathbb Q(q)v_2$ with $E_1v_2=0$, so the decomposition of $v_2$ is $v_2=F_1^{(0)}v_2$ with top component $v_2\in H_{2\omega}$. Since $v_1=F_1v_2=F_1^{(1)}v_2$ and $V_0=\mathbb Q(q)v_1$, the decomposition of $v_1$ is $v_1=F_1^{(1)}v_2$ with top component $v_2\in H_{2\omega}$; likewise $v_0=F_1^{(2)}v_2$ is the decomposition of $v_0$ with top component $v_2\in H_{2\omega}$. [F1, F2, F3]

2.1 The six formulas. Reading the definitions off the decompositions of step 1.1: $\tilde e_1v_2=0$, $\tilde e_1v_1=F_1^{(0)}v_2=v_2$, $\tilde e_1v_0=F_1^{(1)}v_2=v_1$ and $\tilde f_1v_2=F_1^{(1)}v_2=v_1$, $\tilde f_1v_1=F_1^{(2)}v_2=v_0$, $\tilde f_1v_0=F_1^{(3)}v_2=0$. In particular $F_1v_1=[2]_1v_0$ while $\tilde f_1v_1=v_0$, and $E_1v_0=v_1=\tilde e_1v_0$ and $F_1v_0=0=\tilde f_1v_0$ show the bottom agreements; the interior difference is exactly the factor $[2]_1\neq1$. [F1, F2, step 1.1]

3.1 Lattice and residue basis. Since $v_2,v_1,v_0$ have distinct weights, $\mathcal L(2\omega)=A_0v_2\oplus A_0v_1\oplus A_0v_0$ and it generates $V$ over $\mathbb Q(q)$; step 2.1 shows that $\tilde e_1$ and $\tilde f_1$ preserve it, so it is a crystal lattice. The classes $b_2,b_1,b_0$ of the three basis vectors are $\mathbb Q$-independent in $L/qL$ because $L$ is free with those basis vectors and the crystal-limit map is an isomorphism, so they form a $\mathbb Q$-basis; the operator action of step 2.1 lies in $\{b_2,b_1,b_0\}\cup\{0\}$, and the only nonzero arrows are $b_2\to b_1$ and $b_1\to b_0$, whose inverses under $\tilde e_1$ hold, giving the partial-inverse axiom. [F1, F3, step 2.1]

4.1 The invariants. From the chain $b_2\to b_1\to b_0$ the values $\varepsilon_1(b_2)=0$, $\varepsilon_1(b_1)=1$, $\varepsilon_1(b_0)=2$ and $\varphi_1(b_2)=2$, $\varphi_1(b_1)=1$, $\varphi_1(b_0)=0$ are immediate, and the weights are those of step 3.1; the equalities $\varphi_1(b)=\varepsilon_1(b)+\langle h_1,\mathrm{wt}(b)\rangle$ read $2=0+2$, $1=1+0$, $0=2-2$. [step 3.1, algebra]

5.1 Partial inverses. Evaluating step 2.1 gives $\tilde e_1\tilde f_1v_2=v_2$, $\tilde e_1\tilde f_1v_1=v_1$, $\tilde e_1\tilde f_1v_0=0=v_0-p_{\mathrm{bot}}v_0$, and $\tilde f_1\tilde e_1v_2=0=v_2-p_0v_2$, $\tilde f_1\tilde e_1v_1=v_1=v_1-p_0v_1$, $\tilde f_1\tilde e_1v_0=v_0=v_0-p_0v_0$; by linearity these are the stated identities, and no choice is used because everything is computed on the three displayed vectors. [step 2.1] ∎
