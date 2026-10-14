---
id: thm-discrete-likelihood-ratio-classes-are-minimal-sufficient
kind: theorem
title: "Likelihood-ratio classes are minimal sufficient on a common discrete support"
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 7
deps:
  - def-likelihood-ratio-equivalence-on-common-discrete-support
  - def-sufficient-statistic
  - def-minimal-sufficient-statistic
  - def-minimal-sufficient-sigma-field
  - def-axiom-of-choice
  - def-measure-kernel-and-probability-kernel
  - def-standard-borel-space
justified_by: []
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
proof_strategy: direct
sources:
  references:
    - title: "Ryan Martin, Lecture Notes on Advanced Statistical Theory"
      url: "https://homepages.math.uic.edu/~rgmartin/Teaching/Stat511/Notes/511notes.pdf"
    - title: "Joshua M. Tebbs, STAT 512 Mathematical Statistics Lecture Notes"
      url: "https://people.stat.sc.edu/Tebbs/stat512/s24notes.pdf"
    - title: "Peter Kempthorne, MIT 18.655 Lecture Note 6: Sufficiency"
      url: "https://ocw.mit.edu/courses/18-655-mathematical-statistics-spring-2016/bbbca14a2009e47add8c7ea2a49daa41_MIT18_655S16_LecNote6.pdf"
    - title: "Noah Fithian, Stat 210a Reader: Sufficiency"
      url: "https://stat210a.berkeley.edu/fall-2025/reader/sufficiency.html"
    - title: "Noah Fithian, Stat 210a Reader: Completeness, Ancillarity, and Basu’s Theorem"
      url: "https://stat210a.berkeley.edu/fall-2025/reader/completeness.html"
    - title: "Charles J. Geyer, Stat 5421 Lecture Notes: Exponential Families"
      url: "https://www.stat.umn.edu/geyer/5421/notes/expfam.pdf"
    - title: "Jiahao Tian, Chapter 2: Sufficiency and Exponential Families"
      url: "https://jiahaotian-stat.github.io/Notes/en/Advanced_Stat/2Sufficiency/"
---

## Statement

Assume AC. Under the hypotheses of [[def-likelihood-ratio-equivalence-on-common-discrete-support]], let $T(x)=[x]_{\sim}$ on $X_0$, as a statistic into the countable quotient with its discrete standard-Borel structure, and assign one arbitrary class off $X_0$. Then $T$ is minimal sufficient for $(P_\theta)$, modulo $\mathcal X\setminus X_0$.

## Facts & Assumptions

**Given:** AC, a nonempty countable sample space with its full $\sigma$-field, a nonempty common positive support $X_0$, and the likelihood-ratio equivalence relation.

[F1] [[def-likelihood-ratio-equivalence-on-common-discrete-support]]: the quotient is countable discrete standard Borel and, within a class, the ratio of any two point probabilities is independent of $\theta$.

[F2] [[def-sufficient-statistic]]: one conditional probability kernel must work for all parameters.

[F3] [[def-minimal-sufficient-statistic]] and [[def-minimal-sufficient-sigma-field]]: minimal sufficiency requires containment modulo common null sets in every sufficient sub-sigma-field.

[A1] [[def-axiom-of-choice]]: AC selects countably many separating events of an arbitrary sub-sigma-field on the countable sample space.

[F4] [[def-measure-kernel-and-probability-kernel]]: each conditional kernel section is a probability measure.


## Proof

1.1 Fix a class $D\subseteq X_0$ and its first point $r_D$ in a fixed enumeration. By [F1], $w_D(x)=P_\theta(\{x\})/P_\theta(\{r_D\})$ for $x\in D$ is positive and independent of $\theta$. The sum $W_D=\sum_{x\in D}w_D(x)=P_\theta(D)/P_\theta(\{r_D\})$ is finite and positive. Define $K(D,A)=\sum_{x\in A\cap D}w_D(x)/W_D$ for every $A\subseteq\mathcal X$. Each row is a probability measure: its total mass is one and countable additivity follows by regrouping nonnegative sums over disjoint events. Every row is independent of $\theta$, and the countable discrete quotient makes all evaluations measurable [F4]. This defines $K$ on every class; off-support sample points use the row of their assigned class, with no separate row assignment. [F1, F4, given, choose, construct]

1.2 Let $S$ be any other sufficient statistic into a standard Borel space, with common kernel $L$. If $x,y\in X_0$ and $S(x)=S(y)=s$, then $\{s\}$ is Borel and $P_\theta(S=s)>0$ for every $\theta$. The conditional identity forces $L(s,\{x\})=P_\theta(\{x\})/P_\theta(S=s)$ and $L(s,\{y\})=P_\theta(\{y\})/P_\theta(S=s)$. The common kernel has no parameter index, so their ratio is constant in $\theta$; [F1] yields $x\sim y$. Therefore $S$ is constant only within one class on $X_0$. [F1, F2, F4, given, algebra]

2.1 For every $\theta$, class $D$, and $A\subseteq\mathcal X$, the point-mass ratio definition gives $P_\theta(A\cap D)=P_\theta(D)K(D,A)$. Summing over classes proves the conditional-law identity in [F2]; thus $T$ is sufficient. [F1, F2, step 1.1, given, algebra]

2.2 Since $X_0$ is countable, its image under $S$ is countable and Borel in the standard Borel target. Step 1.2 defines a function from that image to the countable quotient with $T=\varphi\circ S$ on $X_0$; extend $\varphi$ by one fixed class off the image. This extension is Borel because its nonconstant domain is countable. Since every model law is concentrated on $X_0$, $T=\varphi(S)$ almost surely under every parameter. This proves the comparison with every standard Borel sufficient statistic. [F3, step 1.2, given, construct]

3.1 Let $\mathcal H$ be any sufficient sub-sigma-field of the full sigma-field on $\mathcal X$. For $x,y\in\mathcal X$ that some $\mathcal H$-event separates, choose one such event, using [A1] for this countable set of pairs. The atoms $H_x=\{y:\text{no }\mathcal H\text{-event separates }x,y\}$ are measurable: each is the countable intersection of the chosen events or their complements containing $x$. Every $\mathcal H$-measurable function is constant on each $H_x$, since unequal real values would be separated by the inverse image of a rational cut. For $x,y\in X_0$ in the same atom $H$, let $v_x,v_y$ be common bounded conditional-expectation versions of $1_{\{x\}},1_{\{y\}}$ supplied by sufficiency. Testing on $H$ gives $v_x|_H=P_\theta(\{x\})/P_\theta(H)$ and $v_y|_H=P_\theta(\{y\})/P_\theta(H)$ for every $\theta$; these constants are positive and independent of $\theta$. Thus the point-mass ratio is constant and $x\sim y$. Each class $D$ is therefore the intersection with $X_0$ of a union of $\mathcal H$-atoms. That union is countable and measurable, and differs from $T^{-1}(\{D\})$ only off $X_0$. Unions of classes give $\sigma(T)\subseteq\mathcal H$ modulo the family-null ideal. The common kernel in step 2.1 supplies bounded conditional versions for $\sigma(T)$ by summing bounded functions on the countable sample space. Hence [F3] proves minimal sufficiency in its full sigma-field sense. [A1, F1, F3, step 2.1, given, construct] ∎
