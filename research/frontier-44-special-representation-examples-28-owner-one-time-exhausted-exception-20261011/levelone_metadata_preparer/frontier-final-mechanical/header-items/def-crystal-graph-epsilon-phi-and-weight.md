---
id: def-crystal-graph-epsilon-phi-and-weight
kind: definition
title: "The crystal graph, $\\varepsilon_i$, $\\varphi_i$ and the weight function"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-crystal-lattice-and-crystal-basis, def-kashiwara-crystal-operators, def-quantum-weight-module-and-integrability, thm-unique-kashiwara-i-string-decomposition, thm-the-i-string-decomposition-of-the-negative-half]
justified_by: []
aliases: []
landmark: false
dependency_level: 5
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Masaki Kashiwara, On crystal bases of the q-analogue of universal enveloping algebras, Duke Math. J. 63 (1991), no. 2, 465-516"
      url: "https://webpages.math.luc.edu/~ptingley/oldseminars/QuantumGroupsSpring2011/Kashiwara91.pdf"
      locator: "§2.4, printed pp. 475-476: the crystal graph, the finite string length $\\varepsilon_i(b)$ and the relation $\\varphi_i(b)=\\varepsilon_i(b)+\\langle h_i,\\mathrm{wt}(b)\\rangle$; §3.1-3.2 for $\\gamma_i=\\varepsilon_i+\\varphi_i$."
    - title: "Kyeonghoon Jeong, Seok-Jin Kang and Masaki Kashiwara, Crystal Bases for Quantum Generalized Kac-Moody Algebras, arXiv:math/0305390"
      url: "https://arxiv.org/pdf/math/0305390"
      locator: "§4, printed pp. 19-21, Definitions 4.5-4.6 and Proposition 4.8: $\\varepsilon_i,\\varphi_i$ on integrable crystals and the formal $\\varphi_i=\\varepsilon_i+\\langle h_i,\\mathrm{wt}\\rangle$ on $B(\\infty)$, which is not a finite lowering length."
    - title: "Richard Borcherds, Mark Haiman, Theo Johnson-Freyd, Nicolai Reshetikhin and Vera Serganova, Berkeley Lectures on Lie Groups and Quantum Groups (book-length lecture notes, last updated 18 January 2024)"
      url: "https://categorified.net/LieQuantumGroups.pdf"
      locator: "Ch. 13, §13.3, printed pp. 328-330: the chain description of $\\mathfrak{sl}_2$-crystals and the positions of a vertex in its string."
---

## Definition

Let $(L,B)$ be a crystal basis of an integrable chosen $P$-graded type-1 module $M$ ([[def-crystal-lattice-and-crystal-basis]]) with the induced operators $\tilde e_i,\tilde f_i$ on $L/qL$ ([[def-kashiwara-crystal-operators]]). For $b\in B$ write $\mathrm{wt}(b)=\mu$ when $b\in B_\mu$, and define
$$\varepsilon_i(b):=\max\{n\ge0:\tilde e_i^{\,n}b\neq0\},\qquad \varphi_i(b):=\max\{n\ge0:\tilde f_i^{\,n}b\neq0\}.$$
Then (see below) both numbers are finite and
$$\varphi_i(b)=\varepsilon_i(b)+\langle h_i,\mathrm{wt}(b)\rangle .$$
The top of the $i$-string through $b$ is the vertex $\tilde e_i^{\,\varepsilon_i(b)}b$, of weight $\mathrm{wt}(b)+\varepsilon_i(b)\alpha_i$; its highest rank-one integer is $\langle h_i,\mathrm{wt}(b)\rangle+2\varepsilon_i(b)=\varepsilon_i(b)+\varphi_i(b)$.

In the crystal graph of $(L,B)$ the arrows $b\to\tilde f_ib$ are the inverse raising edges: on an existing edge, $\varepsilon_i$ increases by $1$, $\varphi_i$ decreases by $1$ and the weight decreases by $\alpha_i$, and the $i$-chains of $B$ are the finite strings with $\varepsilon_i(b)+\varphi_i(b)+1$ vertices.

For a crystal basis of the negative half $U_q^-$ ([[thm-the-i-string-decomposition-of-the-negative-half]]) one uses the same arrows and the same finite $\varepsilon_i$, but defines the **formal** $\varphi_i:=\varepsilon_i+\langle h_i,\mathrm{wt}\rangle$ as an integer of the abstract root-graded crystal; it may be negative, and it is not the lowering-chain length. The actual lowering-chain length of a negative-half vertex is denoted $\ell_i^-$ and equals $+\infty$, because $\tilde f_i$ is injective there; the negative half is not asserted to be an integrable finite-string module. No choice principle is used.

## Facts & Assumptions

**Given:** A crystal basis $(L,B)$ of an integrable chosen $P$-graded type-1 module $M$, and the induced operators $\tilde e_i,\tilde f_i$ on the crystal limit $L/qL$; for the negative half, a crystal basis of $U_q^-$ with its infinite strings.

[F1] $B=\bigsqcup_\mu B_\mu$ with $B_\mu\subseteq L_\mu/qL_\mu$, and $\tilde e_iB\subseteq B\cup\{0\}$, $\tilde f_iB\subseteq B\cup\{0\}$; for $b,b'\in B$ one has $\tilde f_ib=b'$ if and only if $b=\tilde e_ib'$ ([[def-crystal-lattice-and-crystal-basis]], axioms (iv)-(vi)).

[F2] On $M$ the operators are given by the unique admissible string decomposition, $\tilde f_i\tilde e_i=\mathrm{id}-p_{\mathrm{top}}$ and $\tilde e_i\tilde f_i=\mathrm{id}-p_{\mathrm{bottom}}$, with $p_{\mathrm{top}},p_{\mathrm{bottom}}$ preserving the lattice $L$; the operators shift weights by $\mp\alpha_i$, and every element of $M$ lies in a finite sum of string positions ([[def-kashiwara-crystal-operators]], [[thm-unique-kashiwara-i-string-decomposition]]).

[F3] For $\mu\in P$ with $a=\langle\mu,h_i\rangle\ge0$, the string of any nonzero highest vector in $H_\mu=\ker E_i\cap M_\mu$ has the nonzero vectors $F_i^{(n)}h$, $0\le n\le a$, and $F_i^{(n)}h=0$ for $n>a$; if $a<0$ then $H_\mu=0$ ([[thm-unique-kashiwara-i-string-decomposition]]).

[F4] On the negative half $U_q^-$, $\tilde e_i\tilde f_i=\mathrm{id}$, $\tilde e_iu=0$ if and only if $u\in\ker e_i'$, $\tilde f_i$ is injective, $\tilde e_i$ raises the root degree by $\alpha_i$, so it lowers the height in the positive root lattice by one, and $\tilde f_i$ lowers the root degree by $\alpha_i$ ([[thm-the-i-string-decomposition-of-the-negative-half]]).

## Verification

**Proof technique:** direct. Finiteness comes from the finite string expansion of a lift; the chain structure comes from the partial-inverse axiom; the weight formula is read off the rank-one string of a highest lift.

1.1 Finiteness. Let $b\in B$ and let $x\in L$ be a lift of $b$. By [F2] the vector $x$ is a finite sum of string positions $F_i^{(n)}u_n$; along each of the finitely many strings both $\tilde e_i$ and $\tilde f_i$ move one position and kill the ends, so there are integers $N,M$ with $\tilde f_i^Nx=0$ and $\tilde e_i^Mx=0$. The operators preserve $L$ and descend to the quotient, so $\tilde f_i^Nb=0$ and $\tilde e_i^Mb=0$; hence $\varepsilon_i(b)$ and $\varphi_i(b)$ are finite. [F2, given]

1.2 A highest lift. Let $b_{\mathrm{top}}:=\tilde e_i^{\varepsilon_i(b)}b$ and let $y\in L$ be a lift of $b_{\mathrm{top}}$. Since $\tilde e_ib_{\mathrm{top}}=0$, the element $\tilde e_iy$ lies in $qL$, hence so does $\tilde f_i\tilde e_iy$; by [F2], $h:=(\mathrm{id}-\tilde f_i\tilde e_i)(y)=y-\tilde f_i\tilde e_iy$ is a lift of $b_{\mathrm{top}}$ that lies in the image of $p_{\mathrm{top}}=\mathrm{id}-\tilde f_i\tilde e_i$, that is, in $\ker\tilde e_i=\ker E_i$; it is nonzero because its class $b_{\mathrm{top}}$ is nonzero. Thus $h$ is a nonzero $E_i$-highest vector of $M$, and its weight is $\mu:=\mathrm{wt}(b_{\mathrm{top}})=\mathrm{wt}(b)+\varepsilon_i(b)\alpha_i$ by [F2]. [F1, F2]

1.3 The negative half. For $U_q^-$ and a residue class $b$ of root degree $-\nu$, the operator $\tilde e_i$ raises the root degree by $\alpha_i$ and hence lowers the height $\operatorname{ht}(\nu)$ by one; iterating, $\tilde e_i^{\,\operatorname{ht}(\nu)+1}b=0$, so $\varepsilon_i(b)$ is finite. The operator $\tilde f_i$ is injective by [F4], so $\tilde f_i^{\,n}b\ne0$ for every $n\ge0$; the actual lowering-chain length is therefore $\ell_i^-=+\infty$. The formal quantity $\varphi_i:=\varepsilon_i+\langle h_i,\mathrm{wt}\rangle$ is an integer, well defined on the root-graded crystal, and along a lowering edge it changes by $+1-2=-1$: indeed $\varepsilon_i$ increases by one and $\langle h_i,\mathrm{wt}\rangle$ decreases by $\langle h_i,\alpha_i\rangle=2$. It can be negative (for example $\varphi_i=0$ at the unit, and $\varphi_i=\varepsilon_i-\nu_i$ at degree $-\nu$), and it is not the length of the lowering chain. No integrability or finite-string property of the whole negative half is used. [F4, algebra]

2.1 The component is a finite chain. By [F1] the relation $b\sim b'$ if $\tilde f_i^mb=b'$ or $\tilde f_i^mb'=b$ for some $m\ge0$ is symmetric and transitive, and each vertex has at most one $\tilde f_i$-image and at most one $\tilde f_i$-preimage in $B$; by step 1.1 every class is finite, so the component of $b$ is a finite path. It has a unique top, where $\tilde e_i$ acts by $0$, and a unique bottom, where $\tilde f_i$ acts by $0$; writing $\varepsilon_i$ and $\varphi_i$ for the distances from the top and to the bottom gives $\varepsilon_i(b)+\varphi_i(b)+1=\#$ of vertices of the component. [F1, step 1.1]

3.1 The chain has length $a+1$. Put $a:=\langle\mu,h_i\rangle$, so $a\ge0$ and $h\in H_\mu$. By [F3], $F_i^{(n)}h\ne0$ for $0\le n\le a$ and $F_i^{(n)}h=0$ for $n>a$, so exactly $a+1$ positions of this string are nonzero; their classes are the vertices reached from $b_{\mathrm{top}}$ by $\tilde f_i$ (while nonzero), and by step 2.1 they are precisely the vertices of the component of $b$. Hence the component of $b$ has $a+1$ vertices. [F3, step 1.2]

4.1 The formulas. If $b$ is the position $n$ of the chain, counted from the top, then $\varepsilon_i(b)=n$ and, by step 3.1, $\varphi_i(b)=a-n$. Since $a=\langle\mu,h_i\rangle=\langle h_i,\mathrm{wt}(b)\rangle+2n$ by step 1.2, this gives $\varphi_i(b)=\langle h_i,\mathrm{wt}(b)\rangle+n=\varepsilon_i(b)+\langle h_i,\mathrm{wt}(b)\rangle$, and also $\varepsilon_i(b)+\varphi_i(b)=a=\langle h_i,\mathrm{wt}(b)\rangle+2\varepsilon_i(b)$, which is the highest rank-one integer of the top label. [step 1.2, step 3.1, algebra]

5.1 Edges. On an existing arrow $b\to\tilde f_ib$, the position increases by one, so $\varepsilon_i$ increases by $1$ and $\varphi_i$ decreases by $1$, while the weight decreases by $\alpha_i$; conversely, $\tilde e_i$ moves one position up whenever $b$ is not the top. By step 2.1 the chain has exactly $\varepsilon_i(b)+\varphi_i(b)+1$ vertices. [step 2.1, step 4.1]

6.1 Choice. The data $(L,B)$, the operators and the chain positions are given or uniquely determined; all constructions above use finite sums and the unique string decomposition, so no choice principle is used. [given] ∎
