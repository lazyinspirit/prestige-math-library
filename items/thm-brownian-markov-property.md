---
id: thm-brownian-markov-property
kind: theorem
title: "Markov property of Brownian motion"
status: draft
origin: pipeline
deps: [def-natural-and-usual-augmented-brownian-filtrations, def-brownian-transition-semigroup, lem-brownian-transition-semigroup-property, lem-conditioning-a-known-state-and-independent-noise, def-brownian-motion, thm-grouping-independent-sigma-algebras, thm-pi-system-criterion-for-independent-sigma-algebras, def-independent-sigma-algebras-and-events, def-independent-random-elements, def-conditional-expectation-as-an-ae-class, lem-conditional-expectation-is-unique-almost-surely, thm-tower-property-of-conditional-expectation, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Rick Durrett, Probability: Theory and Examples, fifth edition, Theorem 7.2.1"
      url: "https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"
    - title: "Perla Sousi, Advanced Probability, Definition 6.10 and the argument preceding Theorem 6.13"
      url: "http://www.statslab.cam.ac.uk/~ps422/mynotes.pdf"
---

## Statement

Assume the Axiom of Choice, let $B$ be a standard Brownian motion with raw
natural filtration $(\mathcal F^0_t)$ and usual augmentation
$(\mathcal F_t)$ [[def-natural-and-usual-augmented-brownian-filtrations]], and
let $p_t$, $P_t$ be the Brownian transition kernel and operators
[[def-brownian-transition-semigroup]].

For all deterministic $s,t\ge0$ and every bounded Borel
$f:\mathbb R\to\mathbb R$,
$$E\bigl[f(B_{s+t})\,\bigm|\,\mathcal F^0_s\bigr]=P_tf(B_s) \quad\text{and}\quad E\bigl[f(B_{s+t})\,\bigm|\,\mathcal F_s\bigr]=P_tf(B_s)$$
almost surely. Thus the Markov property holds both for the raw past and for the
usual augmented past.

## Facts & Assumptions

**Given:** AC, a standard Brownian motion $B$, deterministic $s,t\ge0$, and a bounded Borel $f$.

[F1] Brownian increments along a finite strictly increasing list are mutually independent with laws $N(0,\Delta t)$, and $B_0=0$ almost surely. [[def-brownian-motion]]

[F2] Grouping a finite independent family of sigma-algebras by disjoint index sets gives independent generated sigma-algebras, and independent pi-systems containing the whole space generate independent sigma-algebras. [[thm-grouping-independent-sigma-algebras]] [[thm-pi-system-criterion-for-independent-sigma-algebras]] [[def-independent-sigma-algebras-and-events]]

[F3] For a $\mathcal G$-measurable random element $X$ and a random element $Y$ independent of $\mathcal G$ with law $\mu$, the conditional expectation of $h(X,Y)$ is $H(X)$ with $H(x)=\int h(x,y)\mu(dy)$, for bounded product-measurable $h$. [[lem-conditioning-a-known-state-and-independent-noise]] [[def-independent-random-elements]]

[F4] $P_tf(x)=E[f(x+B_t)]=\int_{\mathbb R}f(v)p_t(x,v)dv$ for bounded Borel $f$ and $t\ge0$. [[lem-brownian-transition-semigroup-property]] [[def-brownian-transition-semigroup]]

[F5] Conditional-expectation versions are characterized by their event integrals and are unique almost surely; the tower identity $E[X|\mathcal H]=E[E[X|\mathcal G]|\mathcal H]$ holds for $\mathcal H\subseteq\mathcal G$. [[def-conditional-expectation-as-an-ae-class]] [[lem-conditional-expectation-is-unique-almost-surely]] [[thm-tower-property-of-conditional-expectation]]

[F6] Every set in the completed raw sigma-algebra $\overline{\mathcal F}{}^0_u$ differs from a set of $\mathcal F^0_u$ by a subset of a $P$-null event, and the two integrals of a bounded measurable function over such sets agree. [[def-natural-and-usual-augmented-brownian-filtrations]]

[F7] AC supplies the conditional-expectation interface of [F5]. [[def-axiom-of-choice]]

## Proof

**Proof technique:** direct.

1.1 Put $Y:=B_{s+t}-B_s$. Then $\sigma(Y)$ is independent of $\mathcal F^0_s$, and $Y$ has law $N(0,t)$, the law of $B_t$. Indeed, if $0<u_1<\cdots<u_m\le s$ are distinct past times and $D_1,\dots,D_m$ Borel, then deleting repetitions and using $B_0=0$ almost surely presents $(B_{u_1},\dots,B_{u_m},Y)$ as a fixed measurable function of the independent increment vector $(B_{u_1}-B_0,\dots,B_{u_m}-B_{u_{m-1}},B_{s+t}-B_s)$ from [F1]; grouping [F2] therefore makes $\sigma(B_{u_1},\dots,B_{u_m})$ independent of $\sigma(Y)$, and the rectangle identity $P(A\cap\{Y\in C\})=P(A)P(Y\in C)$ holds for finite past cylinders $A$ and Borel $C$. The finite past cylinders and the sets $\{Y\in C\}$ are pi-systems containing $\Omega$ generating $\mathcal F^0_s$ and $\sigma(Y)$, so [F2] extends the independence to those sigma-algebras. Finally $Y\sim N(0,t)$ because its law is the law of $B_t-B_0$ for the list $0<t$ by [F1] and $B_0=0$ almost surely. [F1, F2, given]

2.1 Apply [F3] with $X=B_s$, which is $\mathcal F^0_s$-measurable, with $Y$ as in step 1.1, and with $h(x,y):=f(x+y)$: the function $H(x)=\int_{\mathbb R}f(x+y)\,\mu(dy)$ with $\mu=N(0,t)$ is Borel, and $E[f(B_{s+t})|\mathcal F^0_s]=H(B_s)$ almost surely. Since $\mu$ is also the law of $B_t$, step 1.1 and [F4] identify $H(x)=E[f(x+B_t)]=P_tf(x)$ for every $x$. This proves the raw-filtration assertion. [F3, F4, step 1.1]

3.1 Fix $u\ge s$, so that $h:=s+t-u$ satisfies $h\ge0$, and apply step 2.1 with base time $u$ and horizon $h$ in place of $s$ and $t$: $E[f(B_{s+t})|\mathcal F^0_u]=P_{h}f(B_u)$ almost surely. On the other hand the tower identity [F5] for $\mathcal F^0_s\subseteq\mathcal F^0_u$ gives $E[f(B_{s+t})|\mathcal F^0_u]=E\bigl[E[f(B_{s+t})|\mathcal F^0_s]\,\bigm|\,\mathcal F^0_u\bigr]=E[P_tf(B_s)|\mathcal F^0_u]=P_tf(B_s)$ almost surely, because $P_tf(B_s)$ is $\mathcal F^0_s\subseteq\mathcal F^0_u$-measurable. Hence $E[f(B_{s+t})|\mathcal F^0_u]=P_tf(B_s)$ almost surely for every $u\ge s$. [F5, step 2.1]

4.1 The same identity holds with the completed raw sigma-algebra $\overline{\mathcal F}{}^0_u$ in place of $\mathcal F^0_u$ for every $u>s$: the candidate $P_tf(B_s)$ is bounded and $\mathcal F^0_s$-measurable, hence $\overline{\mathcal F}{}^0_u$-measurable, and if $A\in\overline{\mathcal F}{}^0_u$ and $A_0\in\mathcal F^0_u$ differs from $A$ by a null set as in [F6], then $\int_Af(B_{s+t})dP=\int_{A_0}f(B_{s+t})dP=\int_{A_0}P_tf(B_s)dP=\int_AP_tf(B_s)dP$, since the bounded integrands coincide on the exceptional null set. By [F5]'s uniqueness, $E[f(B_{s+t})|\overline{\mathcal F}{}^0_u]=P_tf(B_s)$ almost surely. [F5, F6, step 3.1]

5.1 Fix any $u>s$. Since $\mathcal F_s\subseteq\overline{\mathcal F}{}^0_u$ by the definition of the usual augmentation, the tower identity [F5] and step 4.1 give $E[f(B_{s+t})|\mathcal F_s]=E\bigl[E[f(B_{s+t})|\overline{\mathcal F}{}^0_u]\bigm|\mathcal F_s\bigr]=E[P_tf(B_s)|\mathcal F_s]=P_tf(B_s)$ almost surely, because $P_tf(B_s)$ is $\mathcal F^0_s\subseteq\mathcal F_s$-measurable and bounded. This is the usual-filtration assertion. [F5, step 4.1]

6.1 The endpoint cases are included in the argument and are consistent: for $t=0$ the transition convention gives $P_0f=f$ and both identities read $E[f(B_s)|\mathcal G]=f(B_s)$, true because $B_s$ is $\mathcal G$-measurable for $\mathcal G\in\{\mathcal F^0_s,\mathcal F_s\}$; for $s=0$ the argument applies with the past $\mathcal F^0_0=\sigma(B_0)$ and $\mathcal F_0=\bigcap_{u>0}\overline{\mathcal F}{}^0_u$, and gives $E[f(B_t)|\mathcal G]=P_tf(B_0)$ almost surely, which is $P_tf(0)$ since $B_0=0$ almost surely; if $f\equiv0$ both sides vanish. AC is used exactly in [F7] for the conditional-expectation interface of [F5]; the independence and transition computations make no further choice. [F4, F7, given, step 5.1] ∎

## Source notes

Durrett, Theorem 7.2.1, proves the raw statement by conditioning on the known state and the independent increment; Sousi uses the same argument for the right-continuous filtration. The proof here separates the two filtrations explicitly and obtains the usual augmentation from the raw identity at a later time by the tower property, rather than by a limiting argument.
