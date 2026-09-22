---
id: thm-hilbert-schmidt-norm-is-basis-independent
kind: theorem
title: The Hilbert–Schmidt norm is basis independent
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-hilbert-schmidt-operator, def-hilbert-space, def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis, def-square-summable-family-on-an-arbitrary-index-set, thm-parseval-equivalences-for-a-complete-orthonormal-family, def-hilbert-space-adjoint, thm-hilbert-adjoint-properties, def-bounded-linear-operator, def-operator-norm, lem-finite-choice, def-countable-choice, def-finite-cardinality]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "John Roe, Lectures on Analysis — Lecture 13, Definition 13.1 and the preceding matrix-coefficient calculation, printed p. 67"
      url: "https://bpb-us-e1.wpmucdn.com/sites.psu.edu/dist/1/4020/files/2017/12/analysis-slides-278829v.pdf"
    - title: "Gerald Teschl, Topics in Real and Functional Analysis, version November 17, 2017 — §3.6, Lemma 3.23, printed pp. 93–94"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let $H$ and
$K$ be real or complex Hilbert spaces ([[def-hilbert-space]]) and let
$T\in\mathcal B(H,K)$ be a bounded linear operator
([[def-bounded-linear-operator]], [[def-operator-norm]]), with Hilbert adjoint
$T^*\in\mathcal B(K,H)$ ([[def-hilbert-space-adjoint]],
[[thm-hilbert-adjoint-properties]]). Let $E$ be a Hilbert basis of $H$ and $F$ a
Hilbert basis of $K$
([[def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis]]), and
let $s_E(T)=\sum_{e\in E}\|Te\|^2$ and $s_F(T^*)=\sum_{f\in F}\|T^*f\|^2$ be the
finite-subset-supremum sums of
[[def-hilbert-schmidt-operator]] and
[[def-square-summable-family-on-an-arbitrary-index-set]]. Then:

1. **(matrix-coefficient form)** the finite-subset supremum
   $$\sup\Bigl\{\sum_{e\in A}\sum_{f\in B}|\langle Te,f\rangle|^2 \;:\; A\subseteq E,\ B\subseteq F \text{ finite}\Bigr\}$$
   equals $s_E(T)$, and it also equals $s_F(T^*)$;
2. **(basis independence)** $s_E(T)=s_{E'}(T)$ for every Hilbert basis $E'$ of
   $H$, and $s_E(T)=s_F(T^*)$ for every Hilbert basis $F$ of $K$;
3. **(membership and norms)** $T$ is Hilbert–Schmidt relative to $E$ if and
   only if it is Hilbert–Schmidt relative to every other Hilbert basis of $H$,
   and then $\|T\|_{HS,E}=\|T\|_{HS,E'}=\|T^*\|_{HS,F}$ for all such bases
   $E,E'$ and every Hilbert basis $F$ of $K$; when the common defining sum is
   $+\infty$, none of these Hilbert–Schmidt norms is defined, and $T$ is
   Hilbert–Schmidt relative to none of the bases.

## Facts & Assumptions

**Given:** Countable Choice, bounded $T:H\to K$, a Hilbert basis $E$ of $H$ and a Hilbert basis $F$ of $K$.

[F1] Since $F$ is a complete orthonormal family in the Hilbert space $K$, every $y\in K$ satisfies $\|y\|^2=\sum_{f\in F}|\langle y,f\rangle|^2$, the sum being the finite-subset supremum; similarly for $E$ in $H$ ([[thm-parseval-equivalences-for-a-complete-orthonormal-family]], [[def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis]]).

[F2] The Hilbert adjoint satisfies $\langle Tx,y\rangle=\langle x,T^*y\rangle$ for all $x\in H$, $y\in K$, it is the unique such bounded operator, and $T^*f\in H$ for every $f\in K$ ([[def-hilbert-space-adjoint]], [[thm-hilbert-adjoint-properties]]).

[F3] For a fixed finite set $A$, fix one bijection $q:n\to A$ with a von Neumann natural $n$ ([[def-finite-cardinality]]). Given nonempty sets $\mathcal C_e$ for $e\in A$, apply [[lem-finite-choice]] to the function $k\mapsto\mathcal C_{q(k)}$ on $n$. Its choice function $c$ on the set of values yields $b_e=c(\mathcal C_e)\in\mathcal C_e$. This transports finite choice to this fixed $A$; no enumeration of the entire basis or simultaneous choice of enumerations is asserted.

[F4] For a nonnegative family $(c_e)_{e\in E}$ the sum is the supremum of the finite subsums, is monotone in the family, and satisfies $\sum_{e\in E}c_e=\sum_{e\in F}c_e+\sum_{e\in E\setminus F}c_e$ for finite $F\subseteq E$ ([[def-square-summable-family-on-an-arbitrary-index-set]]).

[F5] Countable Choice is the hypothesis under which Parseval and the adjoint interface are available ([[def-countable-choice]]).

[F6] The operator $T$ is Hilbert–Schmidt relative to $E$ exactly when $s_E(T)<+\infty$, and then $\|T\|_{HS,E}=(s_E(T))^{1/2}$; the same definitions apply to $E'$ and to $T^*$ with respect to $F$ ([[def-hilbert-schmidt-operator]]).

## Proof

**Proof technique:** direct.

**Given:** Countable Choice, bounded $T:H\to K$, Hilbert bases $E$ of $H$ and $F$ of $K$, and the nonnegative numbers $a_{e,f}:=|\langle Te,f\rangle|^2$.

1.1 For every $e\in E$ the vector $Te$ lies in $K$, so [F1] applied in $K$ to the Hilbert basis $F$ gives $\|Te\|^2=\sum_{f\in F}a_{e,f}$, a supremum over finite $B\subseteq F$. [F1, F5]

1.2 For every $f\in F$ the vector $T^*f$ lies in $H$ by [F2], so [F1] applied in $H$ to the Hilbert basis $E$ gives $\|T^*f\|^2=\sum_{e\in E}|\langle T^*f,e\rangle|^2$; since $\langle T^*f,e\rangle=\overline{\langle e,T^*f\rangle}$ and $\langle Te,f\rangle=\langle e,T^*f\rangle$ by [F2], the moduli agree: $|\langle T^*f,e\rangle|=|\langle Te,f\rangle|=a_{e,f}^{1/2}$. [F1, F2]

2.1 **The iterated suprema agree with the rectangle supremum.** For every finite $A\subseteq E$ the identity $\sup\{\sum_{e\in A}\sum_{f\in B}a_{e,f} : B\subseteq F \text{ finite}\}=\sum_{e\in A}\sum_{f\in F}a_{e,f}$ holds. If $A=\varnothing$, both sides are zero; hence assume $A\ne\varnothing$. Each row sum is the finite number $\|Te\|^2$ by step 1.1. The left side is at most the right side because each $B$ gives a subsum, while for the reverse inequality fix a real $\eta>0$ and, using [F3], choose for each $e\in A$ a finite $B_e\subseteq F$ with $\sum_{f\in B_e}a_{e,f}>\sum_{f\in F}a_{e,f}-\eta$; then $B:=\bigcup_{e\in A}B_e$ is finite and $\sum_{e\in A}\sum_{f\in B}a_{e,f}\ge\sum_{e\in A}\sum_{f\in B_e}a_{e,f}>\sum_{e\in A}\sum_{f\in F}a_{e,f}-|A|\eta$. Hence the supremum over all finite rectangles $A\times B$ equals $\sup_A\sum_{e\in A}\sum_{f\in F}a_{e,f}=\sup_A\sum_{e\in A}\|Te\|^2=s_E(T)$ by [step 1.1] and [F4]; and since every finite $S\subseteq E\times F$ is contained in a rectangle while subsums are monotone, this rectangle supremum is also the supremum over all finite subsets of $E\times F$. [step 1.1, F3, F4, algebra]

2.2 **The same computation with the adjoint.** By [step 1.2] and the same argument with $E$ and $F$ interchanged, $s_F(T^*)=\sup_{B}\sum_{f\in B}\sum_{e\in E}|\langle T^*f,e\rangle|^2=\sup_{A,B}\sum_{e\in A}\sum_{f\in B}|\langle T^*f,e\rangle|^2=\sup_{A,B}\sum_{e\in A}\sum_{f\in B}a_{e,f}$, the last equality by the modulus identity of [step 1.2]; the middle supremum is over finite rectangles, and it is the finite-subset supremum of $E\times F$ because finite subsets of a product lie in rectangles. [step 1.2, F3, F4]

3.1 **Conclusion of the matrix-coefficient form.** Steps 2.1 and 2.2 identify the rectangle supremum of claim 1 with $s_E(T)$ and with $s_F(T^*)$ respectively, so that supremum equals both sums; this proves claim 1. [step 2.1, step 2.2]

4.1 **Basis independence.** Let $E'$ be any Hilbert basis of $H$. Applying [step 3.1] to the pair $(E',F)$ gives $s_{E'}(T)=s_F(T^*)$, and applying it to $(E,F)$ gives $s_E(T)=s_F(T^*)$ for the same basis $F$ of $K$; hence $s_E(T)=s_{E'}(T)$, and also $s_E(T)=s_F(T^*)$ for every Hilbert basis $F$ of $K$, both equalities holding in $[0,+\infty]$. [step 3.1]

5.1 **Membership and the norms.** By [step 4.1] the sums $s_E(T)$, $s_{E'}(T)$ and $s_F(T^*)$ all equal one extended real number, so they are finite simultaneously; when the common value is finite, taking nonnegative square roots gives $\|T\|_{HS,E}=\|T\|_{HS,E'}=\|T^*\|_{HS,F}$ by [F6], and when it is $+\infty$ none of the three norms is defined and $T$ is Hilbert–Schmidt relative to no Hilbert basis of $H$. This is claim 3. [step 4.1, F6] ∎
