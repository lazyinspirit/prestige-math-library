---
page: kashiwara-operators-and-crystal-lattices-examples
title: "Kashiwara Operators and Crystal Lattices — Examples"
status: published
requires: [kashiwara-operators-and-crystal-lattices]
items: []
examples: [cex-an-a-zero-lattice-without-a-crystal-basis,
           ex-crystal-graph-of-b-two-lambda-one,
           ex-kashiwara-strings-in-the-three-dimensional-sl-two-module,
           ex-projection-from-b-infinity-to-a-highest-weight-crystal]
---

**Objective.** This companion page works the machinery of
[[kashiwara-operators-and-crystal-lattices]] on the smallest concrete
instances. Every item is a dependency leaf: nothing outside this page depends
on it, each computation is finite, and the only choice principle that appears
is the one already inherited by the grand-loop projections quoted in the last
example. The page deliberately keeps two negative results: the axioms of a
crystal lattice are independent, and the projection from the negative-half
crystal to a highest weight crystal fails to commute with raising at exactly
one residue.

## Examples and counterexamples

The examples below illustrate the constructions and their boundary cases.

- [[ex-kashiwara-strings-in-the-three-dimensional-sl-two-module]] computes
  every object of the theory in the three-dimensional simple
  $U_q(\mathfrak{sl}_2)$-module $L_1(2)$: the string decompositions of the
  divided basis, the six operator values $\tilde e_1v_2=0$, $\tilde
  e_1v_1=v_2$, $\tilde e_1v_0=v_1$, $\tilde f_1v_2=v_1$, $\tilde
  f_1v_1=v_0$, $\tilde f_1v_0=0$, the crystal lattice $A_0v_2\oplus
  A_0v_1\oplus A_0v_0$ with its residue basis, the invariant table, and the
  partial-inverse identities; it also records where $\tilde f_1$ differs from
  $F_1$ on the interior of the string.
- [[cex-an-a-zero-lattice-without-a-crystal-basis]] produces a free
  $A_0$-submodule $L=A_0(v+w)\oplus A_0(qv)$ of the two-dimensional simple
  $U_q(\mathfrak{sl}_2)$-module that generates it over $\mathbb Q(q)$ but
  violates both the weight-decomposition and the operator-stability axioms,
  and therefore admits no crystal basis. Two further witnesses show the
  axioms are independent rather than merely jointly insufficient:
  $L'=A_0(qv)\oplus A_0w$ satisfies (ii) and not (iii), and in an explicit
  rank-one datum with a central toral direction the lattice
  $A_0(u+w)\oplus A_0(qu)$ satisfies (iii) and not (ii).
- [[ex-crystal-graph-of-b-two-lambda-one]] exhibits the six-vertex crystal of
  the quantum symmetric square $V(2\omega_1)\subset W\otimes W$ for the type
  $A_2$ datum: it verifies that $W$ is a module on a three-vector basis,
  computes the full action table in the divided-normalized basis, proves
  cyclicity and dimension six, lists the color-$1$ and color-$2$ divided
  strings, and checks the six edges, the partial inverses and all twelve
  $\varepsilon_i$-$\varphi_i$ values against the formula
  $\varphi_i=\varepsilon_i+\langle h_i,\mathrm{wt}\rangle$.
- [[ex-projection-from-b-infinity-to-a-highest-weight-crystal]] computes the
  projection $\pi_m:\mathcal B(\infty)\to\mathcal B(m\omega)\cup\{0\}$ for
  $\mathfrak{sl}_2$: the negative-half crystal is
  $\mathbb Z_{\ge0}$ with $\tilde f_1b_n=b_{n+1}$, the killed residues are
  exactly $b_n$ for $n>m$, the surviving residues map bijectively onto
  $\mathcal B(m\omega)$, lowering commutes with $\pi_m$ on every residue, and
  raising commutes on surviving residues but fails at $b_{m+1}$, where
  $\tilde e_1\pi_m(b_{m+1})=0$ while $\pi_m(\tilde e_1b_{m+1})=v_m\ne0$. This
  is the boundary case of the projection lemma, quoted with its inherited
  axiom of choice.
