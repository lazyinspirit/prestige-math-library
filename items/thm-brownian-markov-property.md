---
id: thm-brownian-markov-property
kind: theorem
title: "Markov property of Brownian motion"
status: draft
origin: pipeline
deps: [def-natural-and-usual-augmented-brownian-filtrations, def-brownian-transition-semigroup, lem-brownian-transition-semigroup-property, lem-conditioning-a-known-state-and-independent-noise, def-brownian-motion, thm-grouping-independent-sigma-algebras, thm-pi-system-criterion-for-independent-sigma-algebras, def-independent-sigma-algebras-and-events, def-independent-random-elements, def-conditional-expectation-as-an-ae-class, lem-conditional-expectation-is-unique-almost-surely, thm-dominated-convergence, def-axiom-of-choice]
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

[F5] Conditional-expectation versions are characterized by their event integrals and are unique almost surely. Bounded pointwise-convergent random variables may be passed through event integrals by dominated convergence. [[def-conditional-expectation-as-an-ae-class]] [[lem-conditional-expectation-is-unique-almost-surely]] [[thm-dominated-convergence]]

[F6] Every set in the completed raw sigma-algebra $\overline{\mathcal F}{}^0_u$ differs from a set of $\mathcal F^0_u$ by a subset of a $P$-null event, and the two integrals of a bounded measurable function over such sets agree. [[def-natural-and-usual-augmented-brownian-filtrations]]

[F7] AC supplies the conditional-expectation interface of [F5]. [[def-axiom-of-choice]]

## Proof

**Proof technique:** direct.

1.1 Put $Y:=B_{s+t}-B_s$. Then $\sigma(Y)$ is independent of $\mathcal F^0_s$, and $Y$ has law $N(0,t)$, the law of $B_t$. Indeed, if $0<u_1<\cdots<u_m\le s$ are distinct past times and $D_1,\dots,D_m$ Borel, then deleting repetitions and using $B_0=0$ almost surely presents $(B_{u_1},\dots,B_{u_m},Y)$ as a fixed measurable function of the independent increment vector $(B_{u_1}-B_0,\dots,B_{u_m}-B_{u_{m-1}},B_{s+t}-B_s)$ from [F1]; grouping [F2] therefore makes $\sigma(B_{u_1},\dots,B_{u_m})$ independent of $\sigma(Y)$, and the rectangle identity $P(A\cap\{Y\in C\})=P(A)P(Y\in C)$ holds for finite past cylinders $A$ and Borel $C$. The finite past cylinders and the sets $\{Y\in C\}$ are pi-systems containing $\Omega$ generating $\mathcal F^0_s$ and $\sigma(Y)$, so [F2] extends the independence to those sigma-algebras. Finally $Y\sim N(0,t)$ because its law is the law of $B_t-B_0$ for the list $0<t$ by [F1] and $B_0=0$ almost surely. [F1, F2, given]

2.1 Apply [F3] with $X=B_s$, which is $\mathcal F^0_s$-measurable, with $Y$ as in step 1.1, and with $h(x,y):=f(x+y)$: the function $H(x)=\int_{\mathbb R}f(x+y)\,\mu(dy)$ with $\mu=N(0,t)$ is Borel, and $E[f(B_{s+t})|\mathcal F^0_s]=H(B_s)$ almost surely. Since $\mu$ is also the law of $B_t$, step 1.1 and [F4] identify $H(x)=E[f(x+B_t)]=P_tf(x)$ for every $x$. This proves the raw-filtration assertion. [F3, F4, step 1.1]

3.1 Suppose $t>0$ and choose $u_n\downarrow s$ with $s<u_n<s+t$. Put $h_n=s+t-u_n>0$. Applying step 2.1 at the time pair $(u_n,h_n)$ and then completing the conditioning sigma-algebra as in [F6] gives $E[f(B_{s+t})\mid\overline{\mathcal F}{}^0_{u_n}]=P_{h_n}f(B_{u_n})$ almost surely. Indeed, bounded event integrals are unchanged when an event is replaced by a raw event differing by a null set. [F5, F6, step 2.1]

4.1 On the probability-one continuity event, $B_{u_n}\to B_s$ and $h_n\to t$. The Gaussian densities $v\mapsto p_{h_n}(B_{u_n},v)$ converge pointwise to $p_t(B_s,v)$ and, for all large $n$, are bounded by an integrable Gaussian envelope because $h_n\in[t/2,t]$ and $(B_{u_n})$ is bounded. Dominated convergence therefore gives their $L^1$ convergence, and hence $P_{h_n}f(B_{u_n})\to P_tf(B_s)$ for bounded $f$. If $A\in\mathcal F_s=\bigcap_{u>s}\overline{\mathcal F}{}^0_u$, then $A\in\overline{\mathcal F}{}^0_{u_n}$ for every $n$, so step 3.1 gives $\int_Af(B_{s+t})dP=\int_AP_{h_n}f(B_{u_n})dP$. A second bounded dominated-convergence passage yields $\int_Af(B_{s+t})dP=\int_AP_tf(B_s)dP$. Since $P_tf(B_s)$ is $\mathcal F_s$-measurable, [F5] proves the usual-filtration assertion. [F4, F5, F6, step 3.1]

5.1 For $t=0$ the transition convention gives $P_0f=f$ and both identities read $E[f(B_s)|\mathcal G]=f(B_s)$, true because $B_s$ is $\mathcal G$-measurable for $\mathcal G\in\{\mathcal F^0_s,\mathcal F_s\}$. The proof also covers $s=0$ when $t>0$, and then $P_tf(B_0)=P_tf(0)$ almost surely. If $f\equiv0$ both sides vanish. AC is used exactly in [F7] for the conditional-expectation interface of [F5]; the independence and transition computations make no further choice. [F4, F7, given, step 4.1] ∎

## Source notes

Durrett, Theorem 7.2.1, proves the raw statement by conditioning on the known state and the independent increment; Sousi uses the same argument for the right-continuous filtration. The proof here separates the two filtrations explicitly and obtains the usual augmentation by conditioning at later raw times and passing those times down to the target time.
