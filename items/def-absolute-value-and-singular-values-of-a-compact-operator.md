---
id: def-absolute-value-and-singular-values-of-a-compact-operator
kind: definition
title: Absolute value and singular values of a compact operator
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-spectral-theorem-for-compact-self-adjoint-operators, lem-positive-square-root-of-a-compact-positive-operator, thm-hilbert-adjoint-properties, def-hilbert-space-adjoint, def-self-adjoint-positive-unitary-and-normal-operator, lem-compositions-with-a-compact-operator-are-compact, def-compact-linear-operator, def-eigenvalue-eigenvector-eigenspace-and-spectrum, def-dimension, def-orthogonality-and-orthogonal-complement, def-hilbert-space, def-operator-norm, def-bounded-linear-operator, def-real-and-complex-inner-product-space, def-countable, def-countable-choice]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Gerald Teschl, Topics in Real and Functional Analysis, version November 17, 2017 — §3.5, singular values of a compact operator (printed pp. 89–93)"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
    - title: "Anthony W. Knapp, Advanced Real Analysis — Chapter II, §5"
      url: "https://www.math.stonybrook.edu/~aknapp/download/a2-realanal-inside.pdf"
---

## Definition

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let $H$ and
$K$ be real or complex Hilbert spaces ([[def-hilbert-space]]) and let
$T\in\mathcal B(H,K)$ be a compact operator ([[def-compact-linear-operator]],
[[def-bounded-linear-operator]]), with Hilbert adjoint $T^*\in\mathcal B(K,H)$
([[def-hilbert-space-adjoint]], [[thm-hilbert-adjoint-properties]]).

**The absolute value.** The operator $T^*T\in\mathcal B(H)$ is compact, since it
is the composite of the compact $T$ with the bounded $T^*$
([[lem-compositions-with-a-compact-operator-are-compact]]); it is self-adjoint,
because $(T^*T)^*=T^*T^{**}=T^*T$ ([[thm-hilbert-adjoint-properties]]); and it
is positive, because
$$\langle T^*Tx,x\rangle=\langle Tx,Tx\rangle=\|Tx\|^{2}\ge0$$
for every $x\in H$ ([[def-self-adjoint-positive-unitary-and-normal-operator]]).
The **absolute value** of $T$ is the unique compact self-adjoint positive
operator
$$|T|:=(T^*T)^{1/2}$$
with $|T|^{2}=T^*T$, whose existence and uniqueness are the preceding square-root
lemma ([[lem-positive-square-root-of-a-compact-positive-operator]]). It satisfies
$$\||T|x\|^{2}=\langle|T|^{2}x,x\rangle=\langle T^*Tx,x\rangle=\|Tx\|^{2}\qquad(x\in H),$$
so in particular $\bigl\||T|\bigr\|=\|T\|$ ([[def-operator-norm]]) and
$\ker|T|=\ker T$, since $\||T|x\|=\|Tx\|$ for every $x$.

**The singular values.** By the spectral theorem for $|T|$
([[thm-spectral-theorem-for-compact-self-adjoint-operators]]) the nonzero
eigenvalues of $|T|$ form a finite or countably infinite set of positive reals,
each with finite multiplicity, and for every real $\varepsilon>0$ only finitely
many of them exceed $\varepsilon$; positivity rules out negative eigenvalues and
$0$ already corresponds to the kernel. The **multiset of positive singular
values of $T$** is the multiset of positive eigenvalues of $|T|$, counted with
multiplicity ([[def-eigenvalue-eigenvector-eigenspace-and-spectrum]]).

**The ordered singular-value sequence.** The **distinct** positive singular
values are arranged in *nonincreasing* order $\mu_1>\mu_2>\cdots$ as follows:
if the multiset of positive eigenvalues is empty (equivalently $|T|=0$,
equivalently $T=0$), the list is empty; otherwise $\mu_1:=\max\{\lambda>0:\lambda$
is an eigenvalue of $|T|\}$, a maximum and not merely a supremum, because a
supremum value not attained would be an accumulation point different from $0$;
having chosen $\mu_1,\dots,\mu_k$, put $\mu_{k+1}:=\max\{\lambda>0:\lambda$ is an
eigenvalue of $|T|$ and $\lambda<\mu_k\}$ whenever that set is nonempty, and stop
otherwise. Each step is legitimate by the finiteness-above-thresholds property
above, and an infinite list satisfies $\mu_k\to0$ (otherwise its decreasing
limit would be a nonzero accumulation point). Writing $d_k$ for the multiplicity
of $\mu_k$ (a positive integer), the **zero-padded singular-value sequence** is
$$s_1\ge s_2\ge s_3\ge\cdots$$
where $s_1=\cdots=s_{d_1}=\mu_1$, $s_{d_1+1}=\cdots=s_{d_1+d_2}=\mu_2$, and so
on; if the multiset is finite with total multiplicity $r=d_1+\cdots+d_m$, one
sets $s_n:=0$ for every $n>r$, and if $T=0$ one sets $s_n:=0$ for every
$n\ge1$. The number $s_n$ is written $s_n(T)$ and called the $n$-th **singular
value** of $T$.

**Rank and the finiteness of the list.** The map $\Phi:\operatorname{ran}|T|\to\operatorname{ran}T$
given by $\Phi(|T|x):=Tx$ is well defined and linear, because $|T|x=|T|x'$ forces
$x-x'\in\ker|T|=\ker T$ and hence $Tx=Tx'$; it is injective, because $Tx=0$ gives
$x\in\ker T=\ker|T|$ and $|T|x=0$; it is surjective onto $\operatorname{ran}T$
because $T=\Phi\circ|T|$; and it is isometric, $\|Tx\|=\||T|x\|$. Hence
$\dim\operatorname{ran}T=\dim\operatorname{ran}|T|$ ([[def-dimension]]), and the
positive singular values with multiplicity number exactly $\dim\operatorname{ran}T$:
whenever $T$ has finite rank, their number with multiplicity is $\dim\operatorname{ran}T$,
the rank of $T$, and then all later $s_n$ vanish and the sequence is
**zero-padded**. When the multiset is infinite it is countably infinite
([[def-countable]]) and $s_n>0$ for every $n$, with $s_n\downarrow0$; in
particular finite rank of $T$ is characterised by the eventual vanishing $s_n=0$ for all sufficiently large
$n$, and conversely such eventual vanishing forces finite rank. The sequence $(s_n)$ is numerical data only: no orthonormal system is
selected here, and the zero padding is *not* an indexing of any family of
vectors. The unordered multiset determines $(s_n)$ uniquely, so $(s_n)$ is well
defined, and $s_1(T)=\||T|\|=\|T\|$.
