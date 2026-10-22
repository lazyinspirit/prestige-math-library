---
id: def-qftx-chiral-anomaly-interface
kind: definition
title: Four-dimensional chiral anomaly coefficient interface
status: draft
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 12
deps:
  - prop-qftx-anomaly-obstruction
  - def-complexification-of-a-real-lie-algebra
justified_by: []
dependency_roles:
  prop-qftx-anomaly-obstruction: mathematical-premise
  def-complexification-of-a-real-lie-algebra: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Adel Bilal, Lectures on Anomalies
      url: https://arxiv.org/pdf/0802.0634
      locator: §7.1, equations (7.1)–(7.9); §9.1–9.2, equations (9.2)–(9.15); and
        §11.3.2, equations (11.29)–(11.31); chiral trace coefficients,
        Wess–Zumino/BRST consistency, and the four-dimensional mixed
        gauge-gravitational term.
    - title: Glenn Barnich, Friedemann Brandt and Marc Henneaux, Local BRST cohomology
        in gauge theories
      url: https://arxiv.org/pdf/hep-th/0002245
      locator: §2.3 and §12.3, PDF pp. 9–10 and 119–120; local H^{1,n}(s|d) anomaly
        consistency classes and counterterm equivalence.
    - title: Jean Zinn-Justin, Chiral Anomalies and Topology
      url: https://arxiv.org/pdf/hep-th/0201220
      locator: §1, PDF pp. 2–3, on perturbative local anomalies and the separate
        existence of global nonperturbative anomalies; the notes explicitly
        limit their treatment to local anomalies.
---

## Definition

Fix a finite-dimensional real Lie algebra $\mathfrak g$, a finite index set $A$ with real basis $\{t^a\}_{a\in A}$, and a finite species index set $I$. Let $\mathfrak g_{\mathbb C}:=\mathfrak g\otimes_{\mathbb R}\mathbb C$ be the complexification of [[def-complexification-of-a-real-lie-algebra]], with complex scalar multiplication on the second tensor factor and the complex-bilinear bracket specified on pure tensors by $[X\otimes z,Y\otimes w]=[X,Y]\otimes zw$ for $X,Y\in\mathfrak g$ and $z,w\in\mathbb C$. Identify $X\in\mathfrak g$ with its canonical real embedding $X\otimes1$; in particular $t^a$ in a representation argument means $t^a\otimes1$. For each $i\in I$, let $V_i$ be a finite-dimensional complex vector space and let $\rho_i:\mathfrak g_{\mathbb C}\to\operatorname{End}_{\mathbb C}(V_i)$ be a complex-linear Lie-algebra representation, so $\rho_i([U,V])=\rho_i(U)\rho_i(V)-\rho_i(V)\rho_i(U)$. Attach the bookkeeping label $\chi_i=L$ to each species. In this interface, a “left-handed Weyl species” means exactly the data $(V_i,\rho_i,\chi_i=L)$; the label is not a spinor field or a chirality operator. No spacetime manifold, spinor bundle or field, kinetic operator or action, integration of $\rho_i$ to a gauge group, regulator, effective action, or gauge-variation map is constructed or assumed.

Set $T^a_{R_i}:=\rho_i(t^a)$ and define $\{A,B\}:=AB+BA$ for endomorphisms of $V_i$. The algebraic cubic representation coefficient is
$$d^{abc}=\sum_{i\in I}\operatorname{tr}_{V_i}\!\left(T^a_{R_i}\{T^b_{R_i},T^c_{R_i}\}\right)\in\mathbb C.$$
The basis and generator normalization are fixed as part of the data. No factor $1/2$ is included in the anticommutator. If $T^{(b}T^{c)}=(T^bT^c+T^cT^b)/2$, then $d^{abc}$ is twice $\sum_i\operatorname{tr}_{V_i}(T^a_{R_i}T^{(b}_{R_i}T^{c)}_{R_i})$. Cancellation of this coefficient means $d^{abc}=0$ for every basis triple in this convention. These are representation traces only; calling them anomaly coefficients in a physical model requires an additional theorem.

Define the separate linear representation coefficient by
$$\ell^a=\sum_{i\in I}\operatorname{tr}_{V_i}(T^a_{R_i})\in\mathbb C.$$
For one-dimensional representation spaces of a one-dimensional Abelian Lie algebra with fixed generator $t$ and $\rho_i(t)=q_i\operatorname{id}_{\mathbb C}$, this gives $\ell=\sum_iq_i$. The coefficient $\ell^a$ is recorded separately because a later mixed gauge-gravitational analysis needs its own representation data. Such an analysis must specify its spacetime and gauge connections, curvature conventions, and index polynomial; no mixed-anomaly formula is asserted by this interface.

The only local BRST obstruction statement recorded here is a separate formal result for the specific Abelian jet complex used by the mathematical supplier, not a BRST construction for the general Lie algebra $\mathfrak g$ above. In the convention of `def-qftx-brst-relative-local-cohomology`, a compactly supported local horizontal $p$-form is a finite sum of $f_{i_1\ldots i_p}(x,z)\,dx^{i_1}\wedge\cdots\wedge dx^{i_p}$, with each coefficient smooth and compactly supported in $x\in\mathbb R^4$ and polynomial in finitely many field-jet coordinates $z^i_\alpha$; $i$ indexes the field and ghost generators and $\alpha$ their derivative multi-indices. Its total derivative is $D_\mu=\partial/\partial x^\mu+\sum_{i,\alpha}z^i_{\alpha+e_\mu}\partial_L/\partial z^i_\alpha$, where $e_\mu$ is the unit multi-index and $\partial_L$ is the left graded derivative; $d_H=dx^\mu\wedge D_\mu$. The differential $s$ is the odd ghost-number-one Abelian derivation fixed by `def-qftx-abelian-local-brst`, with $sa_\mu=\partial_\mu c_{\mathrm{gh}}$, $sc_{\mathrm{gh}}=0$, $s\bar c=B$, $sB=0$, and $s\psi=igc_{\mathrm{gh}}\psi$, extended by the graded Leibniz rule and commutation with spacetime derivatives; $a_\mu,\psi,B$ are even, $c_{\mathrm{gh}},\bar c$ are odd, and their ghost numbers are $0,0,0,1,-1$, respectively. This source also fixes $s^2=d_H^2=0$ and $sd_H+d_Hs=0$, with nilpotence of $s$ established by `lem-qftx-brst-nilpotence-doublets`. For each $n$, $\mathcal K_n^{r,p}$ is an $s,d_H$-stable subcomplex of these forms, and the relative class is the quotient
$$H^{1,4}(s|d_H;\mathcal K_n)=\frac{\{a_4\in\mathcal K_n^{1,4}:s a_4+d_Ha_3=0\text{ for some }a_3\in\mathcal K_n^{2,3}\}}{\{s b_4+d_Hc_3:b_4\in\mathcal K_n^{0,4},\ c_3\in\mathcal K_n^{1,3}\}}.$$
The direct supplier `prop-qftx-anomaly-obstruction` is a draft proposition with a supplied conditional proof. Its scalar construction premise is the draft theorem `thm-qftx-scalar-eg-induction`: under the Axiom of Choice (every family of nonempty sets has a choice function) and Countable Choice (every sequence of nonempty sets has a choice function), and for admissible flat scalar free data and a local scalar polynomial class as defined by `def-qftx-local-time-ordered-system`, that theorem asserts existence of symmetric multilinear time-ordered maps satisfying its contract at every finite order, with finite graph scaling bounds and local extension ambiguities. It asserts no convergence, adiabatic limit, positivity, or Ward identity. The exact statement of `prop-qftx-anomaly-obstruction` assumes those data and a time-ordering scheme satisfying that theorem. For each ghost number $r$, define the local-functional quotient $\mathscr F_n^r:=\mathcal K_n^{r,4}/d_H\mathcal K_n^{r,3}$ and its formal series module $\mathscr F_n^r\llbracket\hbar\rrbracket$, where $\hbar$ is a formal indeterminate. For some $n\ge1$, it further assumes an odd formal ghost-number-one operator $\mathcal W_\hbar=s+\sum_{j\ge1}\hbar^j\mathcal W_j$ on this module, $\mathcal W_\hbar^2=0$, and an element $X\in\mathscr F_n^0\llbracket\hbar\rrbracket$ with $\mathcal W_\hbar X=\hbar^n\mathcal A+O(\hbar^{n+1})$, where $O(\hbar^{n+1})$ denotes terms of formal degree at least $n+1$, all lower coefficients vanish, and $\mathcal A=[a_4]_{\mathscr F_n}$ for compactly supported $a_4\in\mathcal K_n^{1,4}$. It requires $\mathcal K_n^{0,4}$ to be exactly the admissible local counterterm densities. Under these hypotheses, that proposition states that $s a_4$ is $d_H$-exact and that there exists an admissible $b_4\in\mathcal K_n^{0,4}$ such that shifting $X$ by $-\hbar^n[b_4]_{\mathscr F_n}$ cancels the order-$n$ breaking if and only if $[a_4]_{s|d_H}=0$. This is used only in the stated conditional form: it does not establish that the hypotheses hold for the representation data above or construct a physical effective action, and it does not prove a quantum action principle.

Accordingly, this interface asserts no physical anomaly-cancellation criterion from $d^{abc}$. A later physical theorem must specify its spacetime, field space, action, regulator and renormalized effective-action map, and the map that assigns a local gauge-variation density to that data. It must then prove the relation of that density to an explicitly specified local BRST cohomology class and invariant six-form polynomial, with mixed gauge-gravitational coefficients and loop-order hypotheses stated separately. No conclusion about transformations outside the identity component of a separately specified full gauge-transformation group follows from this infinitesimal representation tensor. Vanishing $d^{abc}$ alone proves neither a nonperturbative gauge theory nor the absence of failures under such transformations.

## Definition references

[[prop-qftx-anomaly-obstruction]]

[[def-complexification-of-a-real-lie-algebra]]

