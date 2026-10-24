---
id: cex-an-a-zero-lattice-without-a-crystal-basis
kind: counterexample
title: "A free $A_0$-lattice generating the module that is not a crystal lattice"
status: published
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
provenance:
  statement: ai-generated
  proof: ai-generated
deps: [def-crystal-lattice-and-crystal-basis, def-kashiwara-crystal-operators, def-kashiwara-lattices-lambda-and-infinity, def-the-local-ring-at-q-zero, thm-quantized-sl-two-string-formulas, thm-unique-kashiwara-i-string-decomposition, def-symmetrizable-cartan-datum-for-a-quantum-group, def-drinfeld-jimbo-quantized-enveloping-algebra]
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
generation:
  role: counterexample
sources:
  scraped: []
  references:
    - title: "Masaki Kashiwara, On crystal bases of the q-analogue of universal enveloping algebras, Duke Math. J. 63 (1991), no. 2, 465-516"
      url: "https://webpages.math.luc.edu/~ptingley/oldseminars/QuantumGroupsSpring2011/Kashiwara91.pdf"
      locator: "§2.3, printed pp. 473–474, Definition 2.3.1: the axioms refuted by the locally constructed witnesses."
    - title: "Kyeonghoon Jeong, Seok-Jin Kang and Masaki Kashiwara, Crystal Bases for Quantum Generalized Kac-Moody Algebras, arXiv:math/0305390"
      url: "https://arxiv.org/pdf/math/0305390"
      locator: "§4, printed pp. 15–17, Definitions 4.4 and 4.6: graded and operator-stable lattice axioms."
    - title: "Richard Borcherds, Mark Haiman, Theo Johnson-Freyd, Nicolai Reshetikhin and Vera Serganova, Berkeley Lectures on Lie Groups and Quantum Groups (book-length lecture notes, last updated 18 January 2024)"
      url: "https://categorified.net/LieQuantumGroups.pdf"
      locator: "§13.3, printed pp. 328–329, Definitions 13.3.0.1–13.3.0.2: background axioms; independence witnesses are constructed locally."
---

## Statement refuted

**Refuted claim:** for a free $A_0$-submodule $L$ of an integrable module that generates it over $\mathbb Q(q)$, the two extra crystal-lattice axioms are automatic: the weight decomposition (ii) and the operator stability (iii) would each follow from the other.

This is false. In the two-dimensional simple $U_q(\mathfrak{sl}_2)$-module $V(\omega)=L_1(1)$ the lattice $L=A_0(v+w)\oplus A_0(qv)$ is free of rank $2$ and generates $V(\omega)$, but it violates both (ii) and (iii), so no set $B$ makes $(L,B)$ a crystal basis. Moreover the two axioms are independent, not merely jointly non-automatic: the lattice $L'=A_0(qv)\oplus A_0w$ satisfies (ii) and violates (iii), while in an explicitly specified rank-one datum with a central toral direction the lattice $A_0(u+w)\oplus A_0(qu)$ satisfies (iii) and violates (ii). No choice principle is used.

## Facts & Assumptions

**Given:** The type-one datum of $\mathfrak{sl}_2$ with $a_{11}=2$, $q_1=q$, $P=\mathbb Z\omega$, $\langle h_1,\omega\rangle=1$, $\alpha_1=2\omega$, and the two-dimensional simple module $V(\omega)=L_1(1)$ of [[thm-quantized-sl-two-string-formulas]](iii); and the auxiliary rank-one datum of step 1.3 below.

[F1] $V(\omega)$ has basis $v$ of weight $\omega$ and $w:=F_1v$ of weight $\omega-\alpha_1$, with $E_1v=0$, $F_1v=w$, $E_1w=v$, $F_1w=0$, $K_1v=qv$ and $K_1w=q^{-1}w$ ([[thm-quantized-sl-two-string-formulas]], part (iii)).

[F2] The string decomposition of $v$ is $v=v$ with $v\in\ker E_1$, and that of $w$ is $w=F_1^{(1)}v$; hence $\tilde e_1v=0$, $\tilde f_1v=w$, $\tilde e_1w=v$, $\tilde f_1w=0$, and $\mathcal L(\omega)=A_0v\oplus A_0w$ is a crystal lattice with crystal basis the classes of $v$ and $w$ ([[def-kashiwara-crystal-operators]], [[thm-unique-kashiwara-i-string-decomposition]], [[def-kashiwara-lattices-lambda-and-infinity]]).

[F3] A crystal lattice is a free $A_0$-submodule $L\subseteq M$ with (i) $\mathbb Q(q)\otimes_{A_0}L\cong M$, (ii) $L=\bigoplus_\mu L_\mu$ with $L_\mu=L\cap M_\mu$ free, and (iii) $\tilde e_iL\subseteq L$, $\tilde f_iL\subseteq L$; a crystal basis requires a crystal lattice ([[def-crystal-lattice-and-crystal-basis]]).

[F4] The auxiliary datum: $P=\mathbb Z\omega\oplus\mathbb Z\delta$, $P^{\vee}=\mathbb Zh\oplus\mathbb Zd$, $\langle h,\omega\rangle=\langle d,\delta\rangle=1$ and all other pairings zero, $\alpha_1=2\omega$ with simple coroot $h$ and $d_1=1$; this is a symmetrizable Cartan datum with $a_{11}=\langle\alpha_1,h\rangle=2$ and a central toral direction $d$ ([[def-symmetrizable-cartan-datum-for-a-quantum-group]]).

[F5] For a label module with $E_1=F_1=0$ the Kashiwara operators vanish and every $A_0$-submodule is operator stable; $A_0=\mathbb Q[q]_{(q)}$ is a DVR with units the fractions with nonzero value at $0$ ([[def-kashiwara-crystal-operators]], [[def-the-local-ring-at-q-zero]], [[def-drinfeld-jimbo-quantized-enveloping-algebra]]).

## Counterexample

**Proof technique:** direct.

1.1 The standard lattice. By [F1] and [F2], $\tilde e_1(v+w)=\tilde e_1v+\tilde e_1w=0+v=v$ and $\tilde e_1w=v$, while $L=A_0(v+w)\oplus A_0(qv)$ is a free $A_0$-module of rank $2$ because $v+w$ and $qv$ are $\mathbb Q(q)$-independent; it generates $V(\omega)$ because $v=q^{-1}(qv)$ and $w=(v+w)-v$. [F1, F2, algebra]

1.2 Weight decomposition without operator stability. The lattice $L'=A_0(qv)\oplus A_0w$ generates $V(\omega)$ because $v=q^{-1}(qv)$, and it is the direct sum $L'_\omega\oplus L'_{\omega-\alpha_1}$ with $L'_\omega=A_0qv$ and $L'_{\omega-\alpha_1}=A_0w$ by distinct weights; but $\tilde e_1w=v$, and $v=aqv+bw$ with $a,b\in A_0$ forces $1=aq$ and $a=q^{-1}\notin A_0$, so $v\notin L'$ and $L'$ violates exactly (iii), not (ii). [F2, F3, algebra]

1.3 Operator stability without weight decomposition. In the datum of [F4], take one-dimensional modules $M_0=\mathbb Q(q)u$, $M_\delta=\mathbb Q(q)w$ of labels $0,\delta$, with $E_1=F_1=0$, $K_h=1$ on both and $K_d$ acting by $1,q$, respectively. The toral and mixed relations hold, so these are integrable label modules. All Kashiwara operators vanish by [F5]. Hence $L^{\prime\prime}:=A_0(u+w)\oplus A_0(qu)$ is operator stable; its displayed generators are independent and span $M_0\oplus M_\delta$ over the field. In $a(u+w)+bqu$ the coordinates are $(a+bq,a)$, so $L^{\prime\prime}\cap M_0=A_0qu$ (set $a=0$), whereas $L^{\prime\prime}\cap M_\delta=qA_0w$ (set $a=-bq$). Their direct sum omits $u+w$, whose coordinates are both $1\notin qA_0$. Thus this free generating lattice satisfies (iii) and violates (ii). [F4, F5, algebra]

2.1 The lattice is not operator stable. If $v=a(v+w)+bqv$ with $a,b\in A_0$, comparison of the coefficients of $w$ gives $a=0$, and then $1=bq$, that is $b=q^{-1}\notin A_0$; hence $v\notin L$ while $\tilde e_1(v+w)=v$, so (iii) fails. [F3, step 1.1, algebra]

2.2 The lattice is not weight decomposed. The weight pieces are $L_\omega=L\cap\mathbb Q(q)v=\{a(v+w)+bqv:a=0\}=A_0qv$ and $L_{\omega-\alpha_1}=L\cap\mathbb Q(q)w=\{a(v+w)+bqv:a+bq=0\}=\{-bq(v+w)+bqv:b\in A_0\}=qA_0w$. If $v+w=aqv+bqw$ with $a,b\in A_0$, comparison of the coefficients of $v$ gives $a=q^{-1}\notin A_0$, so $v+w\notin L_\omega\oplus L_{\omega-\alpha_1}$ and $L\neq L_\omega\oplus L_{\omega-\alpha_1}$: (ii) fails too. [F3, step 1.1, algebra]

3.1 No crystal basis on $L$. By steps 2.1 and 2.2 the lattice $L$ violates the crystal-lattice axioms (ii) and (iii); since a crystal basis $(L,B)$ requires $L$ to be a crystal lattice by [F3], there is no set $B$ with $(L,B)$ a crystal basis of $V(\omega)$. [F3, step 2.1, step 2.2]

4.1 Conclusion. The lattice $L$ shows that neither axiom is automatic for a free generating lattice, and steps 1.2 and 1.3 exhibit, respectively, a lattice satisfying (ii) but not (iii) and a lattice satisfying (iii) but not (ii); hence the two axioms are independent in the class of allowed graded quantum data. All maps and vectors are displayed or the zero operators, so no choice principle is used. [step 3.1, step 1.2, step 1.3] ∎
