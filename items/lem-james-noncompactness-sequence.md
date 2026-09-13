---
id: lem-james-noncompactness-sequence
kind: lemma
title: James nonreflexivity sequence separated from an annihilator
status: draft
origin: pipeline
deps: [def-reflexive-banach-space, thm-reflexive-iff-unit-ball-weakly-compact, thm-eberlein-smulian, cor-relative-hahn-banach-bidual-isometry, thm-relative-hahn-banach-dominated-extension, thm-compact-hausdorff-tychonoff-from-the-ultrafilter-lemma, def-dependent-choice, def-countable-choice, def-hahn-banach-extension-principle-relative, lem-eberlein-smulian-separable-reduction, cor-reflexive-iff-every-bounded-sequence-has-a-weakly-convergent-subsequence, lem-complete-subspace-is-closed, thm-relative-hahn-banach-norm-preserving-extension, def-separable-space, lem-countable-iff-surjection-from-n, def-annihilator-and-preannihilator, def-dual-space-of-a-normed-space]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: "Reduce nonreflexivity to a separable closed nonreflexive span, separate its closed canonical image in the bidual, realize finite quotient norms by Hahn–Banach, and use DC-derived Countable Choice to select compatible dual-ball witnesses and their ambient extensions."
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: "Robert E. Megginson, An Introduction to Banach Space Theory (1998)"
      url: "https://ebooks.karbust.me/Mathematics/Robert%20E.%20Megginson%20-%20An%20Introduction%20to%20Banach%20Space%20Theory%20%281998%29%20%5B978-1-4612-0603-3%5D.pdf"
      locator: "§1.13, Theorem 1.13.11(a)→(b), printed pp. 125–126, and Theorem 1.13.14(a)→(b), printed p. 132"
---

## Statement

Assume the ultrafilter lemma, the Axiom of Dependent Choice (DC), and the
relative Hahn–Banach principle HB.  If a real Banach space $X$ is not
reflexive, then for every $\theta\in(0,1)$ there are a separable closed linear
subspace $M\subseteq X$ and a sequence $(x_n^*)_{n\in\mathbb N}$ in
$B_{X^*}$ such that

$$x_n^*(m)\longrightarrow0\quad(m\in M)$$

and

$$\operatorname{dist}\!\left(M^\perp,\operatorname{co}\{x_n^*:n\in\mathbb N\}\right)\ge\theta,$$

where $M^\perp=\{w^*\in X^*:w^*(m)=0\text{ for every }m\in M\}$ and
$\operatorname{co}$ means finite convex hull.

## Facts & Assumptions

**Given:** the ultrafilter lemma, DC, HB, a nonreflexive real Banach space
$X$, and $\theta\in(0,1)$.

[F1] Under the ultrafilter lemma, DC and HB, a Banach space is reflexive if
and only if every norm-bounded sequence has a weakly convergent subsequence
([[cor-reflexive-iff-every-bounded-sequence-has-a-weakly-convergent-subsequence]]).
Its proof combines the weak compact unit-ball criterion
([[thm-reflexive-iff-unit-ball-weakly-compact]]) with Eberlein–Šmulian
([[thm-eberlein-smulian]]), whose compactness branch uses compact-Hausdorff
Tychonoff under the ultrafilter lemma
([[thm-compact-hausdorff-tychonoff-from-the-ultrafilter-lemma]]).

[F2] Under HB, the norm-closed scalar span of a sequence in a Banach space is
a separable Banach subspace, is weakly closed, and has intrinsic weak topology
equal to its relative ambient weak topology
([[lem-eberlein-smulian-separable-reduction]]).

[F3] Reflexivity is surjectivity of the canonical map, and under HB that map
is a scalar-linear isometry
([[def-reflexive-banach-space]],
[[cor-relative-hahn-banach-bidual-isometry]]).

[F4] DC is the entire-relation chain principle.  Countable Choice
$\mathrm{AC}_\omega$ selects from a supplied sequence of nonempty sets
([[def-dependent-choice]], [[def-countable-choice]]).

[F5] Under $\mathrm{AC}_\omega$, a complete normed subspace of a normed space
is closed ([[lem-complete-subspace-is-closed]]).

[F6] A nonempty at most countable set admits a surjection from $\mathbb N$;
separability means having an at most countable dense subset
([[lem-countable-iff-surjection-from-n]], [[def-separable-space]]).

[F7] Under HB, a bounded linear functional on any real linear subspace has an
ambient extension of the same norm
([[thm-relative-hahn-banach-norm-preserving-extension]]), derived from the
relative dominated-extension principle
([[thm-relative-hahn-banach-dominated-extension]],
[[def-hahn-banach-extension-principle-relative]]).

[F8] The dual norm is the supremum over the closed unit ball, and annihilators
use the notation $M^\perp=\{f:f(M)=0\}$
([[def-dual-space-of-a-normed-space]],
[[def-annihilator-and-preannihilator]]).

## Proof

**Proof technique:** separable reduction followed by finite annihilator
duality and countable Hahn–Banach selection.

1.1 We first derive the exact Countable Choice instance used below.  For a sequence $(E_n)$ of nonempty sets, let $S$ consist of all finite histories $s$ with $s(j)\in E_j$ for $j<\operatorname{dom}s$, starting with the empty history, and relate $s$ to every one-term extension by a member of $E_{\operatorname{dom}s}$.  This relation is entire.  DC gives a chain of successively extended histories, whose union chooses one element of every $E_n$.  Thus the assumed DC supplies every application of $\mathrm{AC}_\omega$ below; we do not use the unproved bibliographic remark “DC implies $\mathrm{AC}_\omega$” as a theorem. [F4, construct]

1.2 By the contrapositive of [F1], choose a norm-bounded sequence $(z_n)$ in $X$ with no weakly convergent subsequence.  If $R$ bounds all $\|z_n\|$, then $R>0$, since an $R=0$ sequence is constantly zero.  Replacing $z_n$ by $z_n/R$, which preserves and reflects weak convergence of subsequences, we may assume $z_n\in B_X$.  Put $M=\overline{\operatorname{span}_{\mathbb R}\{z_n:n\in\mathbb N\}}$.  By [F2], $M$ is a separable closed Banach subspace, and its intrinsic weak topology is the relative weak topology inherited from $X$. [F1, F2, algebra]

2.1 The space $M$ is not reflexive.  Otherwise [F1], applied to the bounded sequence $(z_n)$ in the Banach space $M$, would give a subsequence converging weakly in $M$.  Equality of the two weak topologies in [F2] would make the same subsequence weakly convergent in $X$, contrary to step 1.2.  In particular $M\ne\{0\}$. [step 1.2, F1, F2]

3.1 Let $J_M:M\to M^{**}$ be the canonical map and $Y=J_M(M)$.  By [F3], $J_M$ is an isometry, so $Y$ is isometric to the complete space $M$.  Step 1.1 and [F5] therefore make $Y$ norm closed in $M^{**}$.  It is proper because $M$ is not reflexive. [step 1.1, step 2.1, F3, F5]

4.1 Choose $q\in M^{**}\setminus Y$ and put $d=\operatorname{dist}(q,Y)$.  Closedness of $Y$ gives $d>0$.  Since $d/\theta>d$ and $d$ is the infimum of the nonempty set $\{\|q-y\|:y\in Y\}$, choose $y\in Y$ with $\|q-y\|<d/\theta$.  Define $F=(q-y)/\|q-y\|$.  Then $\|F\|=1$, translation by $y\in Y$ does not change distance to the linear subspace $Y$, and hence $$\operatorname{dist}(F,Y)=\frac{d}{\|q-y\|}>\theta.$$ No simultaneous family is chosen here. [step 3.1, given, algebra, choose]

5.1 Since $M$ is nonzero and separable, take a nonempty at most countable norm-dense subset $D\subseteq M$ and, by [F6], one surjection $j\mapsto m_j$ from $\mathbb N$ onto $D$.  Repetitions are harmless. [step 2.1, step 4.1, F6, choose]

6.1 For $n\in\mathbb N$ set $$K_n=\{u\in M^*:u(m_j)=0\text{ for }0\le j\le n\},\qquad E_n=\operatorname{span}\{J_Mm_j:0\le j\le n\}.$$ Then $E_n=K_n^\perp$ inside $M^{**}$.  The inclusion $E_n\subseteq K_n^\perp$ follows by evaluation.  Conversely, if $H\in M^{**}$ vanishes on $K_n$, define $T:M^*\to\mathbb R^{n+1}$ by $T(u)=(u(m_0),\ldots,u(m_n))$.  Since $\ker T=K_n$, the rule $\lambda(Tu)=H(u)$ is a well-defined linear functional on $\operatorname{im}T$.  Finite-dimensional linear algebra extends $\lambda$ to a functional $(t_0,\ldots,t_n)\mapsto\sum_{j=0}^n a_jt_j$ on $\mathbb R^{n+1}$, using only finitely many choices.  Thus $H=\sum_{j=0}^na_jJ_Mm_j\in E_n$. [step 3.1, step 5.1, F3, construct, algebra]

7.1 The quotient-norm identity $$\|F|_{K_n}\|=\operatorname{dist}(F,E_n)$$ holds.  For $H\in E_n=K_n^\perp$, restriction gives $\|F-H\|\ge\|F|_{K_n}\|$.  Conversely [F7] extends $F|_{K_n}$ to some $G\in M^{**}$ with $\|G\|=\|F|_{K_n}\|$; then $F-G$ vanishes on $K_n$, so step 6.1 puts $F-G$ in $E_n$ and yields the reverse inequality.  Since $E_n\subseteq Y$, step 4.1 now gives $$\|F|_{K_n}\|=\operatorname{dist}(F,E_n)\ge\operatorname{dist}(F,Y)>\theta.$$ [step 4.1, step 6.1, F7, F8]

8.1 For each $n$, the last strict inequality and the dual-norm definition supply $v\in K_n$ with $\|v\|\le1$ and $|F(v)|>\theta$.  Replacing $v$ by $-v$ if necessary and then setting $u=\theta v/F(v)$ gives $u\in K_n$, $\|u\|<1$, and $F(u)=\theta$.  By [F7], $u$ has an extension $x^*\in X^*$ with $\|x^*\|=\|u\|<1$.  Therefore the set $P_n$ of all such pairs $(u,x^*)$ is nonempty. [step 7.1, F7, F8, algebra]

9.1 Apply the $\mathrm{AC}_\omega$ instance from step 1.1 to $(P_n)$, writing the selected pair as $(u_n,x_n^*)$.  Then $x_n^*\in B_{X^*}$, $x_n^*|_M=u_n$, $F(u_n)=\theta$, and $u_n(m_j)=0$ whenever $j\le n$.  For fixed $m\in M$ and $\varepsilon>0$, density supplies $m_j$ with $\|m-m_j\|<\varepsilon$; for $n\ge j$, $$|x_n^*(m)|=|u_n(m-m_j)|\le\|u_n\|\,\|m-m_j\|<\varepsilon.$$ Hence $x_n^*(m)\to0$ for every $m\in M$. [step 1.1, step 5.1, step 8.1, F6]

10.1 Let $x^*=\sum_{k=1}^ra_kx_{n_k}^*$ be any finite convex combination, where $r\ge1$, $a_k\ge0$, and $\sum_ka_k=1$, and let $w^*\in M^\perp$.  Restriction to $M$ and step 9.1 give $$F\!\left((x^*-w^*)|_M\right)=\sum_{k=1}^ra_kF(u_{n_k})=\theta.$$ Since $\|F\|=1$, restriction cannot increase norm, and therefore $$\|x^*-w^*\|\ge\|(x^*-w^*)|_M\|\ge\theta.$$ Taking the infimum over both nonempty sets proves $\operatorname{dist}(M^\perp,\operatorname{co}\{x_n^*:n\in\mathbb N\})\ge\theta$. [step 4.1, step 9.1, F8, algebra]

11.1 Steps 1.2 and 2.1 provide the required separable closed $M$, step 9.1 gives the pointwise-null dual-ball sequence, and step 10.1 gives the asserted annihilator separation.  The endpoints $\theta=0,1$ are excluded exactly as stated; $X=\{0\}$ cannot satisfy the nonreflexivity hypothesis.  The argument is real: the sign change and the order comparison in step 8.1 are not offered as a complex proof.  The ultrafilter lemma and HB enter through [F1], HB also enters through [F2], [F3] and [F7], and DC enters exactly through the finite-history derivation in step 1.1. [step 1.1, step 1.2, step 2.1, step 9.1, step 10.1, F1, F2, F3, F7] ∎

## Source notes

Megginson's Theorem 1.13.11(a)→(b), printed pp. 125–126, supplies the
separable finite-test bidual construction.  Theorem 1.13.14(a)→(b), printed
p. 132, first reduces an arbitrary nonreflexive real Banach space to a
separable closed nonreflexive subspace and then extends the resulting
functionals to the ambient space.  The proof above expands the finite
annihilator identity and records every choice principle used.
