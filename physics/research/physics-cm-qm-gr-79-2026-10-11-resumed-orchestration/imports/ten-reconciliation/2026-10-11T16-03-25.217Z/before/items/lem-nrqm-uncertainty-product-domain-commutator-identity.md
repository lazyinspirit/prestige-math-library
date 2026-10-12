---
id: lem-nrqm-uncertainty-product-domain-commutator-identity
aliases: [nrqm-uncertainty-product-domain-commutator-identity]
kind: lemma
domain: mathematics
title: "The position-momentum commutator identity on the product domain"
status: draft
origin: pipeline
dependency_level: 5
deps: [def-adjoint-of-a-densely-defined-unbounded-operator, def-axiom-of-choice, def-countable-choice, def-hilbert-space, def-l-p-space-as-a-quotient-by-null-functions, def-schwartz-space-and-its-seminorms, def-weak-derivative-of-a-locally-integrable-function, lem-nrqm-kinematics-ccr-and-internal-factor-commutation, lem-nrqm-kinematics-componentwise-position-and-momentum, lem-weak-leibniz-rule-with-a-smooth-factor, thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces]
dependency_roles:
  def-adjoint-of-a-densely-defined-unbounded-operator: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-countable-choice: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-l-p-space-as-a-quotient-by-null-functions: mathematical-premise
  def-schwartz-space-and-its-seminorms: mathematical-premise
  def-weak-derivative-of-a-locally-integrable-function: mathematical-premise
  lem-nrqm-kinematics-ccr-and-internal-factor-commutation: mathematical-premise
  lem-nrqm-kinematics-componentwise-position-and-momentum: mathematical-premise
  lem-weak-leibniz-rule-with-a-smooth-factor: mathematical-premise
  thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Section 2.1, printed pages 55-58 (PDF pages 67-70): position and momentum operators, dense domains and the canonical commutation relation"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Sections 2.3.1-2.3.2, printed pages 26-27 (PDF pages 34-35): the commutator [x,p]=i hbar computed on differentiable wavefunctions"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Countable Choice and the Axiom of Choice
([[def-countable-choice]], [[def-axiom-of-choice]]). Fix integers $d\ge1$,
$r\ge1$ and $\hbar>0$, let $H^{(r)}=L^{2}(\mathbb R^{d};\mathbb C^{r})$ be the
component-valued space with the componentwise position and momentum operators
$Q_{j},P_{k}$ of [[lem-nrqm-kinematics-componentwise-position-and-momentum]]
clauses (a) and (b), with domains
$$D(Q_{j})=\{f=(f_{l}):\ x_{j}f_{l}\in L^{2}\ \text{for all }l\},\qquad D(P_{k})=\{f=(f_{l}):\ D_{k}f_{l}\in L^{2}\ \text{for all }l\},$$
and let $D_{k}$ denote the weak partial derivative
([[def-weak-derivative-of-a-locally-integrable-function]]). Then:

(a) *Product rule.* If $f\in H^{(r)}$ has $x_{j}f\in L^{2}(\mathbb R^{d};\mathbb C^{r})$
and $x_{j}D_{j}f\in L^{2}(\mathbb R^{d};\mathbb C^{r})$ (the latter read
componentwise), then $x_{j}f$ lies in $D(P_{j})$ and
$$D_{j}(x_{j}f)=f+x_{j}D_{j}f;$$

(b) *The product domain.* $D(Q_{j}P_{j})=\{f\in D(P_{j}):\ x_{j}D_{j}f\in L^{2}(\mathbb R^{d};\mathbb C^{r})\}$
and $D(P_{j}Q_{j})=\{f\in D(Q_{j}):\ D_{j}(x_{j}f)\in L^{2}(\mathbb R^{d};\mathbb C^{r})\}$,
and their intersection is
$$D(Q_{j}P_{j})\cap D(P_{j}Q_{j})=\bigl\{f\in H^{(r)}:\ D_{j}f,\ x_{j}f,\ x_{j}D_{j}f\in L^{2}(\mathbb R^{d};\mathbb C^{r})\bigr\};$$

(c) *Commutator identity.* For every $f\in D(Q_{j}P_{j})\cap D(P_{j}Q_{j})$,
$$(Q_{j}P_{j}-P_{j}Q_{j})f=i\hbar\,f;$$

(d) *Core.* The componentwise Schwartz class
$\mathcal S(\mathbb R^{d};\mathbb C^{r})$ ([[def-schwartz-space-and-its-seminorms]])
is contained in $D(Q_{j}P_{j})\cap D(P_{j}Q_{j})$, and (c) holds on it.

No identity of unbounded products is asserted outside $D(Q_{j}P_{j})\cap D(P_{j}Q_{j})$;
in particular no identity is asserted on $D(P_{j})$ alone.

## Facts & Assumptions

**Given:** The Axiom of Countable Choice and the Axiom of Choice; integers $d,r\ge1$; $\hbar>0$; the componentwise operators $Q_{j},P_{k}$ with the displayed domains; a class $f\in H^{(r)}$; a coordinate index $j$.

[F1] **Domains and actions.** $Q_{j}$ and $P_{k}$ are self-adjoint with the maximal componentwise domains displayed in the Statement, $(Q_{j}f)_{l}=x_{j}f_{l}$ and $(P_{k}f)_{l}=-i\hbar D_{k}f_{l}$ componentwise, and $D(P_{k})=\{f:\ \xi_{k}\mathcal F_{2}^{(r)}f\in L^{2}\}$ ([[lem-nrqm-kinematics-componentwise-position-and-momentum]] clauses (a), (b)). Hence, for a class $f$, the products $Q_{j}P_{j}f$ and $P_{j}Q_{j}f$ are defined exactly by the memberships $P_{j}f\in D(Q_{j})$ and $Q_{j}f\in D(P_{j})$ respectively, that is $x_{j}D_{j}f\in L^{2}$ and $D_{j}(x_{j}f)\in L^{2}$ in the componentwise reading; no other hypothesis enters the definitions of the product domains.

[F2] **Weak Leibniz rule with a smooth factor.** Let $\Omega\subseteq\mathbb R^{n}$ be open, $\eta\in C^{\infty}(\Omega;\mathbb C)$, and $u\in L^{1}_{\mathrm{loc}}(\Omega;\mathbb C)$; suppose $u$ has weak derivatives $D^{\gamma}u\in L^{1}_{\mathrm{loc}}(\Omega;\mathbb C)$ for all $\gamma\le\alpha$. Then $\eta u$ has a weak $\alpha$-derivative, and its almost-everywhere class is $D^{\alpha}(\eta u)=\sum_{\beta\le\alpha}\binom{\alpha}{\beta}(D^{\beta}\eta)D^{\alpha-\beta}u$ ([[lem-weak-leibniz-rule-with-a-smooth-factor]]). With $\alpha=e_{j}$ and $\eta(x)=x_{j}$ this gives $D_{j}(x_{j}u)=u+x_{j}D_{j}u$ in $L^{1}_{\mathrm{loc}}$ for every $u\in L^{1}_{\mathrm{loc}}$ whose weak $j$-derivative exists in $L^{1}_{\mathrm{loc}}$.

[F3] **Componentwise reading and Schwartz core.** Weak differentiation, multiplication by $x_{j}$ and the $L^{2}$ condition are read componentwise; a class lies in $\mathcal S(\mathbb R^{d};\mathbb C^{r})$ exactly when all of its components lie in the scalar Schwartz class ([[def-schwartz-space-and-its-seminorms]], [[def-l-p-space-as-a-quotient-by-null-functions]]); the Schwartz class is contained in $D(Q_{j})\cap D(P_{k})$, is mapped into itself by $Q_{j}$ and $P_{k}$, and satisfies the canonical commutation relation $(Q_{j}P_{j}-P_{j}Q_{j})f=i\hbar f$ there ([[lem-nrqm-kinematics-ccr-and-internal-factor-commutation]] clauses (a) and (d)).

[F4] **Local square-integrability.** $L^{2}(\mathbb R^{d};\mathbb C^{r})\subseteq L^{1}_{\mathrm{loc}}(\mathbb R^{d};\mathbb C^{r})$ componentwise, by the Cauchy-Schwarz bound on bounded measurable sets ([[thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces]], [[def-l-p-space-as-a-quotient-by-null-functions]]).

## Proof

**Proof technique:** apply the weak Leibniz rule with the smooth factor $x_{j}$ componentwise, read the product domains off the definitions, and assemble the commutator with the two actions.

**Given:** The data of the statement and [F1]-[F4].

1.1 [The product rule] Let $f\in H^{(r)}$ with $x_{j}f\in L^{2}$ and $x_{j}D_{j}f\in L^{2}$. Componentwise, each $f_{l}\in L^{2}\subseteq L^{1}_{\mathrm{loc}}$ has weak derivative $D_{j}f_{l}\in L^{2}\subseteq L^{1}_{\mathrm{loc}}$ by [F4], so [F2] with $\alpha=e_{j}$ and $\eta=x_{j}$ applies and gives $D_{j}(x_{j}f_{l})=f_{l}+x_{j}D_{j}f_{l}$ in $L^{1}_{\mathrm{loc}}$ for every $l$. The right-hand side is a component of an $L^{2}$ class by hypothesis, so $D_{j}(x_{j}f)\in L^{2}$ componentwise and $x_{j}f\in D(P_{j})$ with the displayed identity. This is (a). [given, F2, F4, algebra]

2.1 [The two product domains] By [F1], $D(Q_{j}P_{j})=\{f:\ P_{j}f\in D(Q_{j})\}=\{f\in D(P_{j}):\ x_{j}D_{j}f\in L^{2}\}$ and $D(P_{j}Q_{j})=\{f:\ Q_{j}f\in D(P_{j})\}=\{f\in D(Q_{j}):\ D_{j}(x_{j}f)\in L^{2}\}$, which are the first two displays of (b). For the intersection, the inclusion $\subseteq$ is immediate from these displays; conversely, if $f\in H^{(r)}$ has $D_{j}f$, $x_{j}f$ and $x_{j}D_{j}f$ in $L^{2}$, then $f\in D(P_{j})\cap D(Q_{j})$ and step 1.1 gives $D_{j}(x_{j}f)=f+x_{j}D_{j}f\in L^{2}$, so $f$ lies in both product domains. This is (b). [step 1.1, F1, algebra]

3.1 [The commutator] Let $f\in D(Q_{j}P_{j})\cap D(P_{j}Q_{j})$. By [F1] and step 2.1, $(Q_{j}P_{j}f)_{l}=x_{j}(-i\hbar D_{j}f_{l})=-i\hbar\,x_{j}D_{j}f_{l}$ componentwise, while $(P_{j}Q_{j}f)_{l}=-i\hbar D_{j}(x_{j}f_{l})=-i\hbar(f_{l}+x_{j}D_{j}f_{l})$ by step 1.1. Subtracting componentwise, $((Q_{j}P_{j}-P_{j}Q_{j})f)_{l}=-i\hbar x_{j}D_{j}f_{l}+i\hbar f_{l}+i\hbar x_{j}D_{j}f_{l}=i\hbar f_{l}$, so $(Q_{j}P_{j}-P_{j}Q_{j})f=i\hbar f$. This is (c). [step 1.1, step 2.1, F1, algebra]

4.1 [The core] Every component of a Schwartz class lies in the scalar Schwartz class, which is closed under multiplication by $x_{j}$ and under $D_{j}$ and is contained in $L^{2}$; hence $D_{j}f$, $x_{j}f$ and $x_{j}D_{j}f$ are in $L^{2}$, and step 2.1 places $\mathcal S(\mathbb R^{d};\mathbb C^{r})$ in the intersection. The identity of (c), together with [F3], gives (d). [step 2.1, step 3.1, F3] ∎
