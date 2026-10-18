---
id: def-frobenius-object-and-knowledgeable-sewing-data
kind: definition
title: "Frobenius objects and typed colored knowledgeable sewing data"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 0
deps: [def-algebra-over-a-commutative-ring, def-category, def-hh-frobenius-functional-and-associative-pairing, def-monoidal-category, def-symmetric-monoidal-category]
justified_by: [lem-frobenius-sewing-derived-moves]
provenance:
  statement: literature-derived
  proof: not-applicable
axiom_use: "No choice; all vector spaces and algebraic tensor products are finite-dimensional over an arbitrary field k."
sources:
  references:
    - title: "Aaron D. Lauda and Hendryk Pfeiffer, Open-closed strings: Two-dimensional extended TQFTs and Frobenius algebras, arXiv:math/0510664v3"
      url: "https://arxiv.org/pdf/math/0510664v3"
      locator: "§§2.1–2.2, PDF pp. 4–11; §5.1, PDF pp. 42–44."
    - title: "Joachim Kock, Frobenius algebras and 2D topological quantum field theories, complete minicourse notes"
      url: "https://mat.uab.cat/~kock/TQFT/FS.pdf"
      locator: "§2.4, PDF pp. 25–30, for the Frobenius object/comultiplication equations."
    - title: "Gregory W. Moore and Graeme Segal, D-branes and K-theory in 2D topological field theory, arXiv:hep-th/0609042v1"
      url: "https://arxiv.org/pdf/hep-th/0609042v1"
      locator: "§2.1–2.4, PDF pp. 5–12, for the independent open/closed algebraic sewing data and Cardy condition."
verification:
  precheck: n/a
---

## Definition

Fix a field $k$ and write $\mathrm{Vect}_{\mathrm{fd}}(k)$ for finite-dimensional $k$-vector spaces and linear maps, with the algebraic tensor product, unit object $k$, canonical associator $\alpha_{U,V,W}: (U\otimes V)\otimes W\to U\otimes(V\otimes W)$, unitors $\lambda_U:k\otimes U\to U$ and $\rho_U:U\otimes k\to U$, and flip $\tau_{U,V}:U\otimes V\to V\otimes U$. The associator sends $(u\otimes v)\otimes w$ to $u\otimes(v\otimes w)$; the unitors send $c\otimes u$ and $u\otimes c$ to $cu$. All tensor expressions below use these maps, so no strictification is implicit.

A **Frobenius object** in $\mathrm{Vect}_{\mathrm{fd}}(k)$ is a finite-dimensional vector space $A$ and linear maps
$$
\mu:A\otimes A\to A,\qquad \eta:k\to A,\qquad \Delta:A\to A\otimes A,\qquad \epsilon:A\to k
$$
such that $(A,\mu,\eta)$ is a unital associative algebra, $(A,\Delta,\epsilon)$ is a counital coassociative coalgebra, and the two Frobenius identities hold:
$$
\Delta\circ\mu =(1_A\otimes\mu)\circ\alpha_{A,A,A}\circ(\Delta\otimes1_A) =(\mu\otimes1_A)\circ\alpha^{-1}_{A,A,A}\circ(1_A\otimes\Delta).
$$
Here associativity is $\mu\circ(\mu\otimes1_A)=\mu\circ(1_A\otimes\mu)\circ\alpha_{A,A,A}$, and the two unit equations use $\lambda_A,\rho_A$. Coassociativity is $\alpha_{A,A,A}\circ(\Delta\otimes1_A)\circ\Delta=(1_A\otimes\Delta)\circ\Delta$, and the counit equations are $(\epsilon\otimes1_A)\circ\Delta=\lambda_A^{-1}$ and $(1_A\otimes\epsilon)\circ\Delta=\rho_A^{-1}$.

Its **Frobenius pairing** is $b_A:=\epsilon\circ\mu:A\otimes A\to k$. It is **symmetric** when $b_A=b_A\circ\tau_{A,A}$. It is **commutative** when $\mu=\mu\circ\tau_{A,A}$. These are different conditions: commutativity implies symmetry of $b_A$, but symmetry of $b_A$ does not assert commutativity of $\mu$.

An **S-colored knowledgeable Frobenius datum** consists of:

- a commutative Frobenius object $(C,\mu_C,\eta_C,\Delta_C,\epsilon_C)$;
- a finite-dimensional vector space $A_{ab}$ for every ordered pair $a,b\in S$;
- maps, for every $a,b,c\in S$,
  $$
\mu_{abc}:A_{ab}\otimes A_{bc}\to A_{ac},\quad \Delta_{abc}:A_{ac}\to A_{ab}\otimes A_{bc},
$$
  and, for every $a\in S$,
  $$
\eta_a:k\to A_{aa},\quad \epsilon_a:A_{aa}\to k,\quad i_a:C\to A_{aa},\quad i_a^*:A_{aa}\to C.
$$

These maps obey the following typed equations. The first eight equations are the colored category, unit, coalgebra, counit, and Frobenius laws. The two Frobenius equalities are written separately by their domains and codomains; this avoids chaining opposite-direction composites into one equation.

1. For $a,b,c,d\in S$, associativity is
$$
\mu_{abd}\circ(1_{A_{ab}}\otimes\mu_{bcd})\circ\alpha_{A_{ab},A_{bc},A_{cd}} =\mu_{acd}\circ(\mu_{abc}\otimes1_{A_{cd}}),
$$
as maps $(A_{ab}\otimes A_{bc})\otimes A_{cd}\to A_{ad}$.

2. The left and right units are
$$
\mu_{aab}\circ(\eta_a\otimes1_{A_{ab}})=\lambda_{A_{ab}}, \qquad \mu_{abb}\circ(1_{A_{ab}}\otimes\eta_b)=\rho_{A_{ab}}.
$$

3. Coassociativity and the two counits are
$$
\alpha_{A_{ab},A_{bc},A_{cd}}\circ(\Delta_{abc}\otimes1_{A_{cd}})\circ\Delta_{acd} =(1_{A_{ab}}\otimes\Delta_{bcd})\circ\Delta_{abd},
$$
$$
(\epsilon_a\otimes1_{A_{ab}})\circ\Delta_{aab}=\lambda_{A_{ab}}^{-1}, \qquad (1_{A_{ab}}\otimes\epsilon_b)\circ\Delta_{abb}=\rho_{A_{ab}}^{-1}.
$$

4. The two typed Frobenius identities are
$$
\Delta_{abd}\circ\mu_{acd} =(1_{A_{ab}}\otimes\mu_{bcd})\circ\alpha_{A_{ab},A_{bc},A_{cd}}\circ(\Delta_{abc}\otimes1_{A_{cd}}),
$$
as maps $A_{ac}\otimes A_{cd}\to A_{ab}\otimes A_{bd}$, and
$$
\Delta_{acd}\circ\mu_{abd} =(\mu_{abc}\otimes1_{A_{cd}})\circ\alpha^{-1}_{A_{ab},A_{bc},A_{cd}}\circ(1_{A_{ab}}\otimes\Delta_{bcd}),
$$
as maps $A_{ab}\otimes A_{bd}\to A_{ac}\otimes A_{cd}$.

5. The trace is cyclic across opposite colors:
$$
\epsilon_a\circ\mu_{aba} =\epsilon_b\circ\mu_{bab}\circ\tau_{A_{ab},A_{ba}}
$$
as maps $A_{ab}\otimes A_{ba}\to k$.

6. Each $i_a$ is a unital algebra map, its image acts centrally on each $A_{ab}$, and $i_a^*$ is pairing-adjoint to $i_a$:
$$
\mu_{aaa}\circ(i_a\otimes i_a)=i_a\circ\mu_C,\qquad \eta_a=i_a\circ\eta_C,
$$
$$
\mu_{aab}\circ(i_a\otimes1_{A_{ab}}) =\mu_{abb}\circ\tau_{A_{bb},A_{ab}}\circ(i_b\otimes1_{A_{ab}})
$$
as maps $C\otimes A_{ab}\to A_{ab}$, and
$$
\epsilon_C\circ\mu_C\circ(1_C\otimes i_a^*) =\epsilon_a\circ\mu_{aaa}\circ(i_a\otimes1_{A_{aa}})
$$
as maps $C\otimes A_{aa}\to k$.

7. The colored Cardy equation is
$$
i_a\circ i_b^* =\mu_{aba}\circ\tau_{A_{ba},A_{ab}}\circ\Delta_{bab}:A_{bb}\to A_{aa}.
$$
In particular, the reverse labels on $A_{ba}$ and $A_{ab}$ are required for the displayed composites to type-check.

A **homomorphism** from unprimed to primed S-colored data is a family of linear maps $f_C:C\to C'$ and $f_{ab}:A_{ab}\to A'_{ab}$ such that $f_C$ preserves the four Frobenius maps on $C$:
$$
\mu'_C(f_C\otimes f_C)=f_C\mu_C,\quad f_C\eta_C=\eta'_C,\quad \Delta'_C f_C=(f_C\otimes f_C)\Delta_C,\quad \epsilon'_C f_C=\epsilon_C,
$$
and
$$
\mu'_{abc}(f_{ab}\otimes f_{bc})=f_{ac}\mu_{abc},\quad f_{aa}\eta_a=\eta'_a,\quad \Delta'_{abc}f_{ac}=(f_{ab}\otimes f_{bc})\Delta_{abc},
$$
$$
\epsilon'_a f_{aa}=\epsilon_a,\quad f_{aa}i_a=i'_a f_C,\quad f_C i_a^*=i_a^{*'}f_{aa}
$$
for all indicated labels. Composition and identities are componentwise. For singleton $S=\{*\}$, write $A=A_{**}$, $i=i_*$, and $i^*=i_*^*$; this is the usual pair $(A,C,i,i^*)$.

For each $a,b\in S$, define the open pairing
$$
b_{ab}:A_{ab}\otimes A_{ba}\to k,\qquad b_{ab}:=\epsilon_a\circ\mu_{aba}.
$$
The cyclic trace equation above identifies $b_{ab}$ with the reversed pairing $b_{ba}\circ\tau_{A_{ab},A_{ba}}$. The equations do not impose nondegeneracy as a separate axiom: [[lem-frobenius-sewing-derived-moves]] proves that both induced maps to algebraic duals are isomorphisms, by exhibiting the two snake composites. For $a=b$, this is the symmetric Frobenius pairing on $A_{aa}$.

No equality $C=Z(A_{aa})$ is part of the definition. The Cardy equation is an additional map equality; it does not identify the underlying vector spaces or force the whole open algebra to be commutative.

## Diagram convention

The diagram records the two typed Frobenius composites in the uncolored case. Both arrows start at $A\otimes A$ and end at $A\otimes A$; the associator indicated by $\alpha$ is part of the second composite. The diagram is explanatory; the equations above are the definitions.

~~~tikzcd
A\otimes A \arrow[r, bend left=18, "\Delta\circ\mu"] \arrow[r, bend right=18, "{(1\otimes\mu)\circ\alpha\circ(\Delta\otimes1)}"']
& A\otimes A
~~~
