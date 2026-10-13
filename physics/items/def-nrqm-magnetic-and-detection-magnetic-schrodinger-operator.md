---
id: def-nrqm-magnetic-and-detection-magnetic-schrodinger-operator
aliases: [nrqm-magnetic-and-detection-magnetic-schrodinger-operator]
kind: definition
domain: mathematics
title: "Bounded-coefficient magnetic Schrodinger operator"
status: published
origin: pipeline
dependency_level: 2
deps: [def-nrqm-magnetic-and-detection-position-and-momentum-operators, lem-nrqm-magnetic-and-detection-weak-product-rule, lem-nrqm-magnetic-and-detection-momentum-operators-self-adjoint, def-sobolev-space-wkp-and-its-norm, def-weak-derivative-of-a-locally-integrable-function, def-countable-choice, def-axiom-of-choice]
dependency_roles:
  def-nrqm-magnetic-and-detection-position-and-momentum-operators: mathematical-premise
  lem-nrqm-magnetic-and-detection-weak-product-rule: mathematical-premise
  lem-nrqm-magnetic-and-detection-momentum-operators-self-adjoint: mathematical-premise
  def-sobolev-space-wkp-and-its-norm: mathematical-premise
  def-weak-derivative-of-a-locally-integrable-function: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, first edition 2009, Section 6.1 printed pp. 133-135 (PDF pp. 145-147), Theorem 6.4 p. 135: relative boundedness and Kato-Rellich; Section 7.2 printed pp. 167-168 (PDF pp. 179-180): the free operator on H2. Background only; the bounded-coefficient magnetic operator and its weak-derivative domain construction are supplied locally."
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 3.3 printed p. 45 equation (3.31), and Section 3.3.1 printed pp. 46-47 equations (3.40)-(3.45) (PDF pp. 53-55): minimal coupling and time-independent magnetic gauge phase algebra. The bounded-coefficient Sobolev-domain hypotheses are supplied locally."
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
---

## Definition

Assume the Axiom of Choice and the Axiom of Countable Choice
([[def-axiom-of-choice]], [[def-countable-choice]]). Fix $\hbar>0$, $m>0$ and
$q\in\mathbb R$, and work on $L^2(\mathbb R^3;\mathbb C)$ with the position
and momentum operators $Q_j,P_j$ of
[[def-nrqm-magnetic-and-detection-position-and-momentum-operators]].

**Admissible magnetic data.** Call the pair $(A,\Phi)$ **admissible** when
$A=(A_1,A_2,A_3)$ is a triple of real-valued classes
$A_j\in L^\infty(\mathbb R^3;\mathbb R)$ having weak first derivatives
$D_kA_j\in L^\infty(\mathbb R^3;\mathbb R)$ for all $j,k\in\{1,2,3\}$, and
$\Phi\in L^\infty(\mathbb R^3;\mathbb R)$ is a real-valued bounded class
([[def-weak-derivative-of-a-locally-integrable-function]],
[[def-sobolev-space-wkp-and-its-norm]]). Write $|A|^2:=A_1^2+A_2^2+A_3^2$
and $\operatorname{div}A:=D_1A_1+D_2A_2+D_3A_3$ for chosen representatives;
both are bounded classes.

**Magnetic momentum operators.** For admissible $(A,\Phi)$ and
$j\in\{1,2,3\}$ define the $\mathbb C$-linear operator
$$P_{A,j}:=P_j-qA_j,\qquad D(P_{A,j}):=D(P_j)=\{f\in L^2:\ D_jf\in L^2\},$$
where $A_j$ acts as multiplication; this is well defined into $L^2$ because
$A_j\in L^\infty$ and $f\in L^2$. The self-adjointness of $P_{A,j}$ is proved
later on this page, not asserted here.

**The operator.** Put $D(K_{A,\Phi}):=W^{2,2}(\mathbb R^3;\mathbb C)$ and
$$K_{A,\Phi}u:=\frac1{2m}\sum_{j=1}^3P_{A,j}\bigl(P_{A,j}u\bigr)+q\,\Phi u \qquad(u\in D(K_{A,\Phi})).$$
This is well defined: if $u\in W^{2,2}$ and $(A,\Phi)$ is admissible, then
$P_{A,j}u=P_ju-qA_ju\in W^{1,2}(\mathbb R^3;\mathbb C)$ by
[[lem-nrqm-magnetic-and-detection-weak-product-rule]] together with
$P_ju\in W^{1,2}$, so $P_{A,j}u\in D(P_{A,j})$ and every summand lies in
$L^2$. Write $K_0:=K_{(0,0)}$ for the **free operator**, so that
$K_0u=\frac1{2m}\sum_jP_j(P_ju)$ on $W^{2,2}$. The same formula shows
$K_{A,\Phi}$ is $\mathbb C$-linear. Its symmetry, self-adjointness, expansion
in the magnetic momenta and relative boundedness with respect to $K_0$ are the
content of
the self-adjointness theorem on this page,
not asserted here.
