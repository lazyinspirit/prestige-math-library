---
id: lem-cm-local-codimension-and-regular-quotient-ext-concentration
kind: lemma
title: "CM local codimension and Ext concentration over a regular local ring"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 0
deps: [def-axiom-of-choice, def-dependent-choice, lem-depth-localisation-inequality,
       cor-depth-of-a-finite-local-module-at-most-its-dimension,
       lem-associated-primes-of-cohen-macaulay-module-have-full-dimension,
       lem-regular-element-exists-by-prime-avoidance,
       lem-cm-local-regular-sequence-dimension-drop,
       thm-auslander-buchsbaum-formula,
       thm-auslander-buchsbaum-serre-regularity-criterion,
       thm-regular-local-rings-are-domains-and-cohen-macaulay,
       lem-finite-closed-immersion-derived-coinduction-adjunction,
       lem-regular-quotient-dualizing-complex-and-biduality,
       thm-projective-dimension-at-most-n-iff-higher-ext-vanishes,
       thm-localisation-of-hom-for-finitely-presented-modules,
       lem-localisation-of-cohen-macaulay-module-depth-dimension-equality,
       cor-localisations-of-regular-local-rings-are-regular]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "The Stacks Project, Resolution of Surfaces, Sections 54.7-54.8"
      url: "https://stacks.math.columbia.edu/download/resolve.pdf"
    - title: "The Stacks Project, Dualizing Complexes, Lemmas 47.13.1 (0A70), 47.13.10 (0BZH), and 47.16.7 (0B5A)"
      url: "https://stacks.math.columbia.edu/download/dualizing.pdf"
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Choice and the Axiom of Dependent Choice, inherited from
the resolution and Ext suppliers below ([[def-axiom-of-choice]],
[[def-dependent-choice]]). Let $(R,\mathfrak m)$ be a Noetherian
Cohen--Macaulay local ring of dimension $D$.

**(a) Codimension formula.** For every prime $\mathfrak p\in\operatorname{Spec}R$,

$$D=\dim R_{\mathfrak p}+\dim R/\mathfrak p .$$

Consequently $\operatorname{ht}\mathfrak p=D-\dim R/\mathfrak p$, and for
every ideal $I\subseteq R$ with $R/I\ne0$ one has
$\operatorname{ht}I=D-\dim R/I$.

**(b) Concentration over a regular base.** Now assume in addition that $R$ is
regular, let $I\subseteq R$ be an ideal with $B:=R/I\ne0$, and assume that $B$
is Cohen--Macaulay of dimension $e$. Put $c:=D-e$. Then

$$\operatorname{Ext}^q_R(B,R)=0\qquad(q\ne c),$$

and $E:=\operatorname{Ext}^c_R(B,R)$ is a nonzero finite $B$-module which is
Cohen--Macaulay of dimension $e$ (over $B$, equivalently over $R$) and has
full support: $\operatorname{Supp}_B(E)=\operatorname{Supp}_B(B)=V(I)\subseteq
\operatorname{Spec}B$. No hypothesis is made on the number of generators of
$I$ or on the characteristic.

**(c) Localization.** The assertions localize: for every prime
$\mathfrak p\in\operatorname{Spec}R$ the ring $R_{\mathfrak p}$ is
Cohen--Macaulay of dimension $D-\dim R/\mathfrak p$; and if $R$ is regular and
$\mathfrak p\supseteq I$, then $B_{\mathfrak p}$ is a nonzero finite
Cohen--Macaulay $R_{\mathfrak p}$-module of dimension
$e_{\mathfrak p}:=\dim_{R_{\mathfrak p}}(B_{\mathfrak p})$, and
$\operatorname{Ext}^q_{R_{\mathfrak p}}(B_{\mathfrak p},R_{\mathfrak p})=0$
for every $q\ne\dim R_{\mathfrak p}-e_{\mathfrak p}$.

## Facts & Assumptions

**Given:** A Noetherian Cohen--Macaulay local ring $(R,\mathfrak m)$ of
dimension $D$, a prime $\mathfrak p\in\operatorname{Spec}R$, and in the
regular case an ideal $I\subseteq R$, the nonzero quotient $B=R/I$,
Cohen--Macaulay of dimension $e$, and $c=D-e$.

[F1] *Depth localization inequality.* If $M$ is a finite module over the
Noetherian local ring $R$ and $\mathfrak p\in\operatorname{Spec}R$, then
$\operatorname{depth}_{R_{\mathfrak p}}(M_{\mathfrak p})+\dim R/\mathfrak p
\ge\operatorname{depth}_R(M)$. ([[lem-depth-localisation-inequality]])

[F2] *Depth is bounded by dimension.* A nonzero finite module $M$ over a
Noetherian local ring satisfies
$\operatorname{depth}_R(M)\le\dim_R(M)$. ([[cor-depth-of-a-finite-local-module-at-most-its-dimension]])

[F3] *CM associated primes have full dimension.* Every associated prime
$\mathfrak q$ of a nonzero finite Cohen--Macaulay module $M$ of dimension $d$
over a Noetherian local ring satisfies $\dim R/\mathfrak q=d$.
([[lem-associated-primes-of-cohen-macaulay-module-have-full-dimension]])

[F4] *Prime avoidance for regular elements.* Let $R$ be Noetherian, $M\ne0$
finite, and $I$ an ideal with $IM\ne M$. Then $I$ contains an $M$-regular
element if and only if $I\nsubseteq\mathfrak q$ for every
$\mathfrak q\in\operatorname{Ass}_R(M)$.
([[lem-regular-element-exists-by-prime-avoidance]])

[F5] *Regular sequences cut down CM local rings.* If $(A,\mathfrak m)$ is a
nonzero Noetherian Cohen--Macaulay local ring of dimension $h$ and
$f_1,\dots,f_i\in\mathfrak m$ is an $A$-regular sequence, then
$A/(f_1,\dots,f_i)$ is nonzero and Cohen--Macaulay of dimension $h-i$; in
particular $i\le h$. ([[lem-cm-local-regular-sequence-dimension-drop]])

[F6] *Regular local rings and Auslander--Buchsbaum.* A regular local ring is
Cohen--Macaulay, its global dimension equals its dimension, and every finite
module over it has finite projective dimension; for a nonzero finite module
$M$ of finite projective dimension over a nonzero Noetherian local ring,
$\operatorname{pd}_RM+\operatorname{depth}_RM=\operatorname{depth}R$.
([[thm-regular-local-rings-are-domains-and-cohen-macaulay]],
[[thm-auslander-buchsbaum-serre-regularity-criterion]],
[[thm-auslander-buchsbaum-formula]])

[F7] *Derived adjunction for a finite quotient.* For a finite homomorphism
$A\to C$ of Noetherian rings, derived coinduction gives
$$\mathcal R\operatorname{Hom}_C(M,\mathcal R\operatorname{Hom}_A(C,G))\cong \mathcal R\operatorname{Hom}_A(M,G)$$
for $M\in D^b(C)$ and $G\in D^+(A)$
([[lem-finite-closed-immersion-derived-coinduction-adjunction]]). If $f$ is a
nonzerodivisor in $A$ and $\bar A=A/(f)$, the two-term free resolution
$0\to A\xrightarrow{f}A\to\bar A\to0$ gives
$$\mathcal R\operatorname{Hom}_A(\bar A,A)\simeq\bar A[-1].$$
Consequently, for an $\bar A$-module $M$, derived adjunction gives
$\mathcal R\operatorname{Hom}_A(M,A)\simeq
\mathcal R\operatorname{Hom}_{\bar A}(M,\bar A)[-1]$, equivalently
$\operatorname{Ext}^{q+1}_A(M,A)\cong\operatorname{Ext}^q_{\bar A}(M,\bar A)$
for $q\ge0$. This is Stacks Lemmas 47.13.1 (0A70) and 47.13.10 (0BZH); the displayed two-term resolution also proves the shift directly.

[F8] *Ambient biduality.* Let $A$ be a regular Noetherian ring of finite
dimension $n$, $L$ an invertible $A$-module and $0\ne A/J$ a quotient. Then
$D:=R\operatorname{Hom}_A(A/J,L[n])$ is a dualizing complex over $A/J$, and
for every $M\in D^b_{\mathrm{fin}}(A/J)$ the canonical evaluation
$M\to R\operatorname{Hom}_{A/J}(R\operatorname{Hom}_{A/J}(M,D),D)$ is an
isomorphism, and these assertions localize. ([[lem-regular-quotient-dualizing-complex-and-biduality]]) The cohomological normalization is consistent with Stacks Lemma 47.16.7 (0B5A): a CM module of dimension $e$ has its normalized dual concentrated in degree $-e$.

[F9] *Projective dimension controls Ext.* In an abelian category with enough
projectives and enough injectives, $\operatorname{pd}(M)\le n$ if and only if
$\operatorname{Ext}^k(M,N)=0$ for every object $N$ and every $k>n$; the
projective and injective resolution data is supplied once and for all.
([[thm-projective-dimension-at-most-n-iff-higher-ext-vanishes]])

[F10] *Localization of CM depth and dimension.* If $M$ is a nonzero finite
Cohen--Macaulay module over a Noetherian local ring $R$ and
$\mathfrak p\in\operatorname{Supp}_R(M)$, then
$\operatorname{depth}_{R_{\mathfrak p}}(M_{\mathfrak p})
=\dim_{R_{\mathfrak p}}(M_{\mathfrak p})$.
([[lem-localisation-of-cohen-macaulay-module-depth-dimension-equality]])

[F11] *Regularity localizes.* Every prime localization of a regular local ring
is regular. ([[cor-localisations-of-regular-local-rings-are-regular]])

[F12] *Localization of Hom.* If $M$ is a finitely presented $R$-module and $S$ is multiplicative, then $S^{-1}\operatorname{Hom}_R(M,N)\cong\operatorname{Hom}_{S^{-1}R}(S^{-1}M,S^{-1}N)$. This applies in particular to the finite free terms of a resolution. ([[thm-localisation-of-hom-for-finitely-presented-modules]])

## Proof


1.1 *Upper bound for the codimension formula.* Since $R$ is Cohen--Macaulay, $\operatorname{depth}_R(R)=D$. Applying [F1] to $M=R$ gives $\operatorname{depth}_{R_{\mathfrak p}}(R_{\mathfrak p})+\dim R/\mathfrak p \ge D$, and [F2] applied to the nonzero $R_{\mathfrak p}$-module $R_{\mathfrak p}$ gives $\operatorname{depth}_{R_{\mathfrak p}}(R_{\mathfrak p})\le\dim R_{\mathfrak p}$. Hence $D\le\dim R_{\mathfrak p}+\dim R/\mathfrak p$. [F1, F2, given]

1.2 *Lower bound for the codimension formula.* Take a saturated chain of primes $\mathfrak p_0\subsetneq\cdots\subsetneq\mathfrak p_s=\mathfrak p$ with $s=\dim R_{\mathfrak p}$ and a saturated chain $\mathfrak p=\mathfrak q_0\subsetneq\cdots\subsetneq\mathfrak q_t$ with $t=\dim R/\mathfrak p$. Concatenation gives a chain of primes of $R$ from $\mathfrak p_0$ to $\mathfrak q_t$ of length $s+t$, so $\dim R\ge\dim R_{\mathfrak p}+\dim R/\mathfrak p$; both chains are finite because $R$ is Noetherian. [given]

1.3 *Projective dimension of $B$ and vanishing above $c$.* Now $R$ is regular; by [F6] it is Cohen--Macaulay of depth $D$ and every finite $R$-module has finite projective dimension. Since $B$ is a nonzero finite $R$-module of depth $e$ (it is Cohen--Macaulay of dimension $e$), the Auslander--Buchsbaum formula [F6] gives $\operatorname{pd}_RB=D-e=c$. The forward vanishing implication in [F9] follows here directly: a projective resolution of length $c$ computes $\operatorname{Ext}^q_R(B,R)$ by its dual complex, which has no terms in degrees $q>c$; thus these groups vanish. [F6, F9, given]

2.1 *Codimension formula and heights.* Steps 1.1 and 1.2 give $D=\dim R_{\mathfrak p}+\dim R/\mathfrak p$, and $\operatorname{ht}\mathfrak p=\dim R_{\mathfrak p}$ by definition of height. For an ideal $I$ with $R/I\ne0$, the dimension $\dim R/I$ is the maximum of $\dim R/\mathfrak q$ over the minimal primes $\mathfrak q$ of $I$; applying the formula to those finitely many primes gives $\operatorname{ht}I=\min_{\mathfrak q}\operatorname{ht}\mathfrak q =D-\dim R/I$. [step 1.1, step 1.2, given]

3.1 *Inductive construction of a regular sequence in $I$.* Maintain, for $j=0,\dots,c$, a tuple $f_1,\dots,f_j\in I$ that is an $R$-regular sequence with $Q_j:=R/(f_1,\dots,f_j)$ Cohen--Macaulay of dimension $D-j$. For $j=0$ this is [F6] and the empty tuple. Let $j<c$ and assume the tuple constructed. For $\mathfrak q\in\operatorname{Ass}_R(Q_j)$, [F3] gives $\dim R/\mathfrak q=\dim Q_j=D-j$, hence $\operatorname{ht}\mathfrak q=j$ by step 2.1; since $\operatorname{ht}I=c>j$ and $I\subseteq\mathfrak q$ would force $\operatorname{ht}I\le\operatorname{ht}\mathfrak q=j$, we have $I\nsubseteq\mathfrak q$. Moreover $IQ_j\ne Q_j$, because $Q_j/IQ_j=R/((f_1,\dots,f_j)+I)=B\ne0$. Thus [F4] with $M=Q_j$ and the ideal $I$ produces $f_{j+1}\in I$ that is $Q_j$-regular. Then $f_1,\dots,f_{j+1}$ is an $R$-regular sequence with $Q_{j+1}=Q_j/f_{j+1}Q_j$, and [F5] applied to the nonzero Cohen--Macaulay local ring $Q_j$ of dimension $D-j$ shows that $Q_{j+1}$ is nonzero and Cohen--Macaulay of dimension $D-j-1$, completing the induction. In particular the case $j=c$ gives a regular sequence $f_1,\dots,f_c$ in $I$ with $Q_c=R/(f_1,\dots,f_c)$ Cohen--Macaulay of dimension $D-c=e$. [F6, F3, F4, F5, step 2.1]

4.1 *Derived adjunction along the regular sequence.* For $0\le j<c$, put $Q_{j+1}=Q_j/(f_{j+1})$, where $f_{j+1}$ is $Q_j$-regular by step 3.1; the quotient $Q_j\to Q_{j+1}$ is finite, and $B$ is a $Q_{j+1}$-module. The two-term resolution in [F7] gives $\mathcal R\operatorname{Hom}_{Q_j}(Q_{j+1},Q_j)\simeq Q_{j+1}[-1]$. Applying its finite-quotient derived adjunction to $M=B$ gives $$\mathcal R\operatorname{Hom}_{Q_j}(B,Q_j)\simeq \mathcal R\operatorname{Hom}_{Q_{j+1}}(B,Q_{j+1})[-1].$$ Iterating over $j=0,\dots,c-1$ yields $$\mathcal R\operatorname{Hom}_R(B,R)\simeq \mathcal R\operatorname{Hom}_{Q_c}(B,Q_c)[-c].$$ The unshifted complex $\mathcal R\operatorname{Hom}_{Q_c}(B,Q_c)$ has no negative cohomology, so $\operatorname{Ext}^q_R(B,R)=0$ for $q<c$, and for $q\ge c$ it identifies with $\operatorname{Ext}^{q-c}_{Q_c}(B,Q_c)$. With step 1.3 this proves the full concentration statement; when $c=0$ the iteration is the identity. [F7, step 1.3, step 3.1, algebra]

5.1 *The canonical module is nonzero.* Apply [F8] with $A=R$, $L=R$ and $n=D$: the complex $D_B=\mathcal R\operatorname{Hom}_R(B,R[D])$ is a dualizing complex over $B$, with $H^q(D_B)=\operatorname{Ext}^{q+D}_R(B,R)$, and biduality holds for $B\in D^b_{\mathrm{fin}}(B)$. By steps 1.3 and 4.1, $D_B$ has cohomology only in degree $c-D=-e$, where it is $E$; hence $D_B\simeq E[e]$. Biduality for $M=B$ gives $$B\simeq\mathcal R\operatorname{Hom}_B(E[e],E[e])\simeq\mathcal R\operatorname{Hom}_B(E,E).$$ Since $B\ne0$, this complex is nonzero, so $E\ne0$. [F8, step 1.3, step 4.1]

6.1 *A finite free resolution of $E$ and its dimension.* Choose a finite free resolution $F_c\to\cdots\to F_0\to B\to0$ of length $c$. Its dual complex $F_0^\vee\to\cdots\to F_c^\vee$ is a complex of finite free modules whose $q$-th cohomology is $\operatorname{Ext}^q_R(B,R)$; by step 4.1 the cohomology vanishes in degrees $q<c$, so the dual complex is exact except at its last term, and $0\to F_0^\vee\to\cdots\to F_c^\vee\to E\to0$ is a finite free resolution of $E$; hence $\operatorname{pd}_RE\le c$. Since $IE=0$, the support of $E$ over $R$ lies in $V(I)$, so $\dim_RE\le\dim V(I)=\dim R/I=e$, and $E$ is finite as the cokernel in this finite free resolution. [step 1.3, step 4.1, step 5.1]

6.2 *Full support.* Suppose that $E_{\mathfrak p}=0$ for some $\mathfrak p\in\operatorname{Spec}B$. By [F6], $B$ has a finite free resolution over the regular local ring $R$; [F12] identifies its termwise localized dual with the dual of the localized resolution, so localizing computes the derived Hom over $R_{\mathfrak p\cap R}$. Therefore the localization of $D_B\simeq E[e]$ is zero. Put $\mathfrak q=\mathfrak p\cap R$ and $d=\dim R_{\mathfrak q}$. By [F11], $R_{\mathfrak q}$ is regular, and its dualizing complex for the quotient $B_{\mathfrak p}$ is $$D_{B_{\mathfrak p}}:=\mathcal R\operatorname{Hom}_{R_{\mathfrak q}}(B_{\mathfrak p},R_{\mathfrak q}[d]).$$ The localized complex $(D_B)_{\mathfrak p}$ is $D_{B_{\mathfrak p}}[D-d]$, so $D_{B_{\mathfrak p}}=0$. Applying [F8] over $R_{\mathfrak q}$ to $M=B_{\mathfrak p}$, biduality would then give $B_{\mathfrak p}\simeq\mathcal R\operatorname{Hom}_{B_{\mathfrak p}}(0,0)=0$, contradicting $\mathfrak p\in\operatorname{Spec}B$. Thus $E_{\mathfrak p}\ne0$ for every prime of $B$, and $\operatorname{Supp}_B(E)=\operatorname{Spec}B=V(I)=\operatorname{Supp}_B(B)$. [F6, F12, F11, F8, step 5.1]

7.1 *$E$ is Cohen--Macaulay of dimension $e$.* The module $E$ is nonzero and finite with $\operatorname{pd}_RE\le c$, so Auslander--Buchsbaum [F6] gives $\operatorname{depth}_RE=D-\operatorname{pd}_RE\ge D-c=e$, while [F2] gives $\operatorname{depth}_RE\le\dim_RE\le e$ by step 6.1. Hence $\operatorname{depth}_RE=\dim_RE=e$, that is, $E$ is a Cohen--Macaulay $R$-module of dimension $e$; as $IE=0$ it is a $B$-module of dimension $e$ with the same depth. [F6, F2, step 5.1, step 6.1]

8.1 *Localization of the statement.* For a prime $\mathfrak p$, the ring $R_{\mathfrak p}$ is local Noetherian, and $\operatorname{depth}_{R_{\mathfrak p}}(R_{\mathfrak p}) =\dim R_{\mathfrak p}=D-\dim R/\mathfrak p$ by [F10] applied to $M=R$ and step 2.1, so $R_{\mathfrak p}$ is Cohen--Macaulay. If $R$ is regular and $\mathfrak p\supseteq I$, then $R_{\mathfrak p}$ is regular by [F11], the module $B_{\mathfrak p}$ is nonzero and finite, and [F10] applied to the Cohen--Macaulay $R$-module $B$ gives $\operatorname{depth}_{R_{\mathfrak p}}(B_{\mathfrak p}) =\dim_{R_{\mathfrak p}}(B_{\mathfrak p})=e_{\mathfrak p}$; so $B_{\mathfrak p}$ is Cohen--Macaulay over the regular local ring $R_{\mathfrak p}$ of dimension $\dim R_{\mathfrak p}$. Apply the projective-dimension calculation of step 1.3 and the regular-sequence/change-of-rings argument of steps 3.1 and 4.1 with $(R,I,B,e)$ replaced by $(R_{\mathfrak p},IR_{\mathfrak p},B_{\mathfrak p},e_{\mathfrak p})$. They give $\operatorname{Ext}^q_{R_{\mathfrak p}}(B_{\mathfrak p},R_{\mathfrak p})=0$ for $q\ne\dim R_{\mathfrak p}-e_{\mathfrak p}$. [F10, F11, step 1.3, step 2.1, step 3.1, step 4.1] ∎


## Remarks

- Part (b) is the reason a canonical module can be transported along a
  regular ambient ring: the module $E=\operatorname{Ext}^c_R(B,R)$ depends on
  the presentation $B=R/I$ of the Cohen--Macaulay quotient, but its
  Cohen--Macaulayness, dimension and support do not.
- The regular sequence constructed in step 3.1 lies inside $I$ but need not
  generate $I$; no complete-intersection hypothesis is imposed, and the
  localized biduality argument in step 6.2 handles non-radical $I$ without
  identifying minimal primes of $I$ with those of the regular-sequence ideal.
- The Axiom of Dependent Choice enters only through [F9], the general
  Ext-vanishing criterion for finite projective dimension, and the Axiom of
  Choice through the commutative-algebra suppliers; no other choice is made.
- The proof is choice-free apart from those inherited assumptions: the
  regular sequence is produced step by step by prime avoidance [F4] applied
  to concretely given associated primes, and no selection from an arbitrary
  family occurs.
