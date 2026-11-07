---
dependency_level: 2
id: thm-generic-local-gln-representation-has-congruence-newvectors
kind: theorem
title: "Generic Local GL(n) Representations Have Congruence Newvectors"
status: draft
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-generated
deps: 
  - def-smooth-generic-local-gln-representation-and-mirabolic-induction
  - lem-nonzero-fourier-orbit-of-a-smooth-mirabolic-module
proof_strategy: direct
sources:
  references:
    - title: "I. N. Bernstein and A. V. Zelevinsky, Induced Representations of Reductive p-adic Groups I, §3.2(e) and §3.5, pp. 451–452 (generic compact-induction submodule and its congruence-vector consequence)"
      url: "https://www.numdam.org/item/ASENS_1977_4_10_4_441_0.pdf"
    - title: "J. W. Cogdell, L-functions and Converse Theorems for GL(n), Lecture 3, pp. 27–32"
      url: "https://people.math.osu.edu/cogdell.1/pcmi-www.pdf"
pipeline_run: number-theory-all-141-2026-10-25
---

## Statement

Let $k$ be a nonarchimedean local field of characteristic zero. For every nonzero smooth generic complex representation $V$ of $\mathrm{GL}_n(k)$ there is an integer $m\ge0$ with

$$V^{K_1(\mathfrak p^m)}\ne0.$$

Consequently the set of such integers has a least element. Irreducibility, admissibility and unitarity are not required for this existence assertion. It asserts neither uniqueness at the least level nor an identity with a local epsilon exponent.

## Statement references

[[def-smooth-generic-local-gln-representation-and-mirabolic-induction]]

[[lem-nonzero-fourier-orbit-of-a-smooth-mirabolic-module]]

## Facts & Assumptions

[F1] Local genericity, the mirabolic groups and compact induction have the conventions in [[def-smooth-generic-local-gln-representation-and-mirabolic-induction]].

[F2] The nonzero Fourier-orbit injection is [[lem-nonzero-fourier-orbit-of-a-smooth-mirabolic-module]].

## Proof

**Given:** A nonzero smooth $\mathrm{GL}_n(k)$-module $V$ and a nonzero Whittaker functional $\lambda$ for some nontrivial smooth additive character $\psi$.

1.1 We may choose $\psi$ trivial on $\mathcal O$. Indeed continuity gives a fractional ideal on which $\psi$ is trivial, so for a suitable $c\in k^\times$ the character $x\mapsto\psi(cx)$ is trivial on $\mathcal O$. Conjugation by $\operatorname{diag}(c^{n-1},c^{n-2},\ldots,c,1)$ rescales every simple-root coordinate by $c$; composing $\lambda$ with that diagonal action supplies the required Whittaker functional. For $n=1$, any nonzero smooth vector is fixed by $1+\mathfrak p^m$ for some $m\ge1$, which proves the assertion in that case. Assume henceforth $n\ge2$. [F1, given, construct]

1.2 Restrict $V$ to $P_n=G_{n-1}\ltimes U_n$. The functional $\lambda$ factors through $V_{U_n,\chi_0}$, since $\psi_{N_n}$ restricts on the last column to $\chi_0(u)=\psi(u_{n-1})$. On this quotient it is a nonzero Whittaker functional for $N_{n-1}\subset P_{n-1}$. Applying F2 embeds the compact induction of this quotient, extended by $\chi_0$ on $U_n$, into $V|_{P_n}$. Repeat the same operation on the quotient as a smooth $P_{n-1}$-module, down to $P_1=\{1\}$. The factored functional remains nonzero at every stage. Compact induction preserves submodule injections because its functions take values pointwise in those submodules. Induction in stages then produces an injection
$$\mathrm{c\!\operatorname{-}Ind}_{N_n}^{P_n}(\psi_{N_n}\otimes W)\longrightarrow V|_{P_n}$$
for a nonzero vector space $W$ on which $N_n$ acts trivially. For completeness, induction in stages here identifies a function on the outer group with its function of the outer coordinate valued in the inner induced space; evaluation in the inner coordinate gives the inverse identification. The covariance rules agree because $N_r=N_{r-1}\ltimes U_r$. Compact quotient support is preserved in both directions: cover its compact projection by finitely many local sections of the successive orbit maps from F2, and use the compact inner supports on those finitely many pieces. Smoothness reduces the inner functions on each compact piece to finitely many translates, so their support union remains compact. This proves the induction-in-stages assertion in exactly the groups used here. [F1, F2, step 1.1, construct]

1.3 Choose $0\ne w\in W$. In this induced representation take the function supported on $N_nP_n(\mathcal O)$ and defined by $f(up)=\psi_{N_n}(u)w$ for $u\in N_n$ and $p\in P_n(\mathcal O)$. It is well-defined because $N_n\cap P_n(\mathcal O)=N_n(\mathcal O)$ and $\psi$ is trivial on $\mathcal O$. It is nonzero at the identity, is fixed under right $P_n(\mathcal O)$, and has compact quotient support, the image of the compact group $P_n(\mathcal O)$. It is smooth since $P_n(\mathcal O)$ is open in $P_n$. Its image in $V$ is therefore a nonzero $P_n(\mathcal O)$-fixed vector $v$. [F1, step 1.1, step 1.2, construct]

1.4 Smoothness of $V$ gives $m\ge1$ for which $K(\mathfrak p^m)$ fixes $v$. Each $k\in K_1(\mathfrak p^m)$ is a product $pj$ with $p\in P_n(\mathcal O)$ and $j\in K(\mathfrak p^m)$: replace the bottom row of $k$ by $(0,\ldots,0,1)$ to form $p$. It is congruent to $k$ modulo $\mathfrak p^m$, so its determinant is a unit and $p\in P_n(\mathcal O)$; then $j=p^{-1}k$ is congruent to the identity modulo $\mathfrak p^m$. Both factors fix $v$. Thus $V^{K_1(\mathfrak p^m)}\ne0$, and the nonempty subset of $\mathbb Z_{\ge0}$ has a least element by well-ordering. [F1, step 1.3, given, construct] ∎
