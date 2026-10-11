---
id: ex-crystal-graph-of-b-two-lambda-one
kind: example
title: "The crystal graph of the quantum symmetric square of the standard $A_2$-module"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-crystal-graph-epsilon-phi-and-weight, def-crystal-lattice-and-crystal-basis, def-drinfeld-jimbo-quantized-enveloping-algebra, def-kashiwara-crystal-operators, def-kashiwara-lattices-lambda-and-infinity, def-symmetrizable-cartan-datum-for-a-quantum-group, thm-integrable-quantum-highest-weight-module-exists-and-is-unique, thm-quantized-sl-two-string-formulas, thm-the-drinfeld-jimbo-formulas-define-a-hopf-algebra, thm-unique-kashiwara-i-string-decomposition]
justified_by: []
aliases: []
landmark: false
dependency_level: 6
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Masaki Kashiwara, On crystal bases of the q-analogue of universal enveloping algebras, Duke Math. J. 63 (1991), no. 2, 465-516"
      url: "https://webpages.math.luc.edu/~ptingley/oldseminars/QuantumGroupsSpring2011/Kashiwara91.pdf"
      locator: "§4.2-4.4, printed pp. 483-489: the crystal of a tensor product and the explicit small type-$A_2$ examples obtained from the standard representation."
    - title: "Kyeonghoon Jeong, Seok-Jin Kang and Masaki Kashiwara, Crystal Bases for Quantum Generalized Kac-Moody Algebras, arXiv:math/0305390"
      url: "https://arxiv.org/pdf/math/0305390"
      locator: "§4, printed pp. 18-21: the tensor product rule for rank-one chains used to read off the six edges and the invariants."
    - title: "Richard Borcherds, Mark Haiman, Theo Johnson-Freyd, Nicolai Reshetikhin and Vera Serganova, Berkeley Lectures on Lie Groups and Quantum Groups (book-length lecture notes, last updated 18 January 2024)"
      url: "https://categorified.net/LieQuantumGroups.pdf"
      locator: "Ch. 12, §12.1-12.2 and Ch. 13, §13.3, printed pp. 271-281 and 327-330: the standard representation, tensor product chains and the rank-two crystal."
---

## Example

Use the type $A_2$ datum with $q_1=q_2=q$, $\alpha_1=2\omega_1-\omega_2$, $\alpha_2=-\omega_1+2\omega_2$. Let $W$ have standard basis $e_1,e_2,e_3$ of labels $\omega_1$, $\omega_2-\omega_1$, $-\omega_2$, with $E_1e_2=e_1$, $F_1e_1=e_2$, $E_2e_3=e_2$, $F_2e_2=e_3$ and all other positive and negative actions zero. Use $\Delta E=E\otimes K^{-1}+1\otimes E$, $\Delta F=F\otimes1+K\otimes F$. The quantum symmetric square is the highest submodule $V=U_q(e_1\otimes e_1)\subset W\otimes W$, isomorphic to $V(2\omega_1)$, with six divided-normalized basis vectors
$$v_{11}=e_1\otimes e_1,\quad v_{12}=e_2\otimes e_1+q\,e_1\otimes e_2,\quad v_{22}=e_2\otimes e_2,$$
$$v_{13}=e_3\otimes e_1+q\,e_1\otimes e_3,\quad v_{23}=e_3\otimes e_2+q\,e_2\otimes e_3,\quad v_{33}=e_3\otimes e_3 .$$
Their respective labels are $(2,0),(0,1),(-2,2),(1,-1),(-1,0),(0,-2)$ in the $\omega$-basis. Their spans specialize to the ordinary symmetric square at $q=1$.

The color-$1$ divided strings are $v_{11}\to v_{12}\to v_{22}$, $v_{13}\to v_{23}$ and $\{v_{33}\}$; the color-$2$ strings are $v_{12}\to v_{13}$, $v_{22}\to v_{23}\to v_{33}$ and $\{v_{11}\}$. The $A_0$-span of the six vectors is the recursively generated crystal lattice and their residue classes form its crystal basis, with precisely these six lowering edges. Their $(\varepsilon_1,\varphi_1,\varepsilon_2,\varphi_2)$ are respectively $(0,2,0,0)$, $(1,1,0,1)$, $(2,0,0,2)$, $(0,1,1,0)$, $(1,0,1,1)$, $(0,0,2,0)$. All twelve $\varepsilon$-$\varphi$ equalities $\varphi_i(b)=\varepsilon_i(b)+\langle h_i,\mathrm{wt}(b)\rangle$ hold. No choice principle is used.

## Facts & Assumptions

**Given:** The $A_2$ Cartan datum with $I=\{1,2\}$, $a_{ij}=2$ for $i=j$ and $-1$ otherwise, $d_1=d_2=1$, $q_1=q_2=q$, fundamental labels $\omega_1,\omega_2$ with $\langle h_i,\omega_j\rangle=\delta_{ij}$, and the tensor product $W\otimes W$ with the stated coproduct.

[F1] The Drinfeld–Jimbo algebra of the datum has generators $E_i,F_i,K_h$ with the relations $K_hE_iK_h^{-1}=q^{\langle\alpha_i,h\rangle}E_i$, $K_hF_iK_h^{-1}=q^{-\langle\alpha_i,h\rangle}F_i$ and $E_iF_j-F_jE_i=\delta_{ij}(K_i-K_i^{-1})/(q-q^{-1})$, together with the Serre relations ([[def-drinfeld-jimbo-quantized-enveloping-algebra]], [[def-symmetrizable-cartan-datum-for-a-quantum-group]]).

[F2] The coproduct is an algebra map with $\Delta E_i=E_i\otimes K_i^{-1}+1\otimes E_i$ and $\Delta F_i=F_i\otimes1+K_i\otimes F_i$, so tensor products of modules are modules ([[thm-the-drinfeld-jimbo-formulas-define-a-hopf-algebra]]).

[F3] A cyclic highest weight module of weight $2\omega_1$ with nonzero highest vector receives a nonzero map from the simple integrable module $V(2\omega_1)$; the simple module has dimension $6$ and its Weyl dimension is $\frac{3}{1}\cdot\frac{1}{1}\cdot\frac{4}{2}=6$ for the three positive roots $\alpha_1,\alpha_2,\alpha_1+\alpha_2$ ([[thm-integrable-quantum-highest-weight-module-exists-and-is-unique]]).

[F4] Kashiwara operators are defined through the string decomposition; on a $2$-step string with first step coefficient $1$ and second step coefficient $[2]$, the operator $\tilde f_i$ moves one position with coefficient $1$ and $\tilde e_i$ is its inverse on the string; at the endpoints it acts by $0$ ([[def-kashiwara-crystal-operators]], [[thm-unique-kashiwara-i-string-decomposition]], [[thm-quantized-sl-two-string-formulas]], part (iii)).

[F5] For an integrable type-1 module with a crystal lattice $L$ and residue basis $B$, $\varepsilon_i(b)=\max\{n:\tilde e_i^nb\neq0\}$, $\varphi_i(b)=\max\{n:\tilde f_i^nb\neq0\}$ and $\varphi_i=\varepsilon_i+\langle h_i,\mathrm{wt}\rangle$ ([[def-crystal-graph-epsilon-phi-and-weight]], [[def-crystal-lattice-and-crystal-basis]], [[def-kashiwara-lattices-lambda-and-infinity]]).

## Verification

**Proof technique:** direct.

1.1 $W$ is a module. The assignments of the statement satisfy the defining relations of [F1] on the three basis vectors: the toral actions are the stated labels; $[E_1,F_1]$ equals $e_1\mapsto e_1$, $e_2\mapsto-e_2$, $e_3\mapsto0$, which is $(K_1-K_1^{-1})/(q-q^{-1})$; $[E_2,F_2]$ equals $e_1\mapsto0$, $e_2\mapsto e_2$, $e_3\mapsto-e_3$, which is $(K_2-K_2^{-1})/(q-q^{-1})$; the mixed commutators $[E_1,F_2]$, $[E_2,F_1]$ vanish on all three basis vectors; and the Serre relations hold because $E_i^2=F_i^2=0$ for $i=1,2$ and every word with three or more factors from $\{E_1,E_2\}$ (or from $\{F_1,F_2\}$) kills every basis vector. [F1, F2, algebra]

1.2 Action table. Computing $\Delta E_i,\Delta F_i$ on the six displayed vectors gives $F_1v_{11}=v_{12}$, $F_1v_{12}=[2]v_{22}$, $F_1v_{13}=v_{23}$, $F_2v_{12}=v_{13}$, $F_2v_{22}=v_{23}$, $F_2v_{23}=[2]v_{33}$ and $E_1v_{12}=[2]v_{11}$, $E_1v_{22}=v_{12}$, $E_1v_{23}=v_{13}$, $E_2v_{13}=v_{12}$, $E_2v_{23}=[2]v_{22}$, $E_2v_{33}=v_{23}$, with all other positive and negative actions on the six vectors zero; for instance $\Delta F_1(v_{13})=F_1e_3\otimes e_1+K_1e_3\otimes F_1e_1+qF_1e_1\otimes e_3+qK_1e_1\otimes F_1e_3=v_{23}$ and $\Delta E_2(v_{23})=E_2e_3\otimes K_2^{-1}e_2+qE_2e_2\otimes K_2^{-1}e_3+e_2\otimes E_2e_3=(q^{-1}+q)v_{22}$. Diagonal toral actions are the six labels of the statement. [F2, algebra]

2.1 Cyclicity and dimension. The table of step 1.2 gives $v_{12}=F_1v_{11}$, $v_{22}=F_1^{(2)}v_{11}$, $v_{13}=F_2v_{12}$, $v_{23}=F_1v_{13}=F_2v_{22}$ and $v_{33}=F_2^{(2)}v_{22}$, so all six vectors lie in the cyclic submodule generated by $v_{11}$; the six labels are distinct, hence the six vectors are linearly independent and the submodule has dimension $6$. The vector $v_{11}=e_1\otimes e_1$ is killed by $E_1$ and $E_2$ and has label $2\omega_1$, so by [F3] the cyclic submodule receives a nonzero map from the simple module $V(2\omega_1)$ of dimension $6$; a nonzero map from a simple module is injective, so $V=U_q(e_1\otimes e_1)\cong V(2\omega_1)$. [F2, F3, step 1.2]

3.1 The divided strings and the lattice. In the table of step 1.2 the first $F_i$-step of each color-$i$ string has coefficient $1$ and the second has coefficient $[2]$; normalizing by $[1]!=1$ and $[2]!=[2]$ gives the divided strings of the statement, so by [F4] the Kashiwara operators act with coefficient $1$ along them: $\tilde f_1v_{11}=v_{12}$, $\tilde f_1v_{12}=v_{22}$, $\tilde f_1v_{13}=v_{23}$, $\tilde f_2v_{12}=v_{13}$, $\tilde f_2v_{22}=v_{23}$, $\tilde f_2v_{23}=v_{33}$, and the corresponding inverse $\tilde e_i$-actions, with all endpoints $0$. Distinct labels give linear independence, so the $A_0$-span $L$ of the six vectors is their free direct sum; it is stable under both operators and generated by the lowering words from $v_{11}$, so it is the recursively generated crystal lattice, and its residue classes form a $\mathbb Q$-basis of $L/qL$ by the crystal-limit isomorphism. [F4, F5, step 1.2, step 2.1]

4.1 Edges and partial inverses. The only nonzero arrows of the residue basis are the six listed: two color-$1$ edges on each of the chains $v_{11}\to v_{12}\to v_{22}$ and $v_{13}\to v_{23}$, and the color-$2$ edges $v_{12}\to v_{13}$ and $v_{22}\to v_{23}\to v_{33}$, exactly as in the statement; every arrow is the inverse of the corresponding $\tilde e_i$-step by step 3.1, so the partial-inverse axiom holds and no further edges occur. [step 3.1]

5.1 The invariants. Reading the string positions from step 4.1 gives the table $(\varepsilon_1,\varphi_1,\varepsilon_2,\varphi_2)$: $(0,2,0,0)$ at $v_{11}$, $(1,1,0,1)$ at $v_{12}$, $(2,0,0,2)$ at $v_{22}$, $(0,1,1,0)$ at $v_{13}$, $(1,0,1,1)$ at $v_{23}$ and $(0,0,2,0)$ at $v_{33}$. Comparing with the six labels of the statement, the twelve equalities $\varphi_i=\varepsilon_i+\langle h_i,\mathrm{wt}\rangle$ are the identities $2=0+2$, $0=0+0$; $1=1+0$, $1=0+1$; $0=2-2$, $2=0+2$; $1=0+1$, $0=1-1$; $0=1-1$, $1=1+0$; $0=0+0$, $0=2-2$. [F5, step 3.1, step 4.1] ∎
