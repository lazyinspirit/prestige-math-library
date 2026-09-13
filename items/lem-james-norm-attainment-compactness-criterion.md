---
id: lem-james-norm-attainment-compactness-criterion
kind: lemma
title: James convex-block norm-attainment criterion
status: draft
origin: pipeline
deps: [lem-james-noncompactness-sequence, thm-relative-hahn-banach-dominated-extension, def-dependent-choice, def-hahn-banach-extension-principle-relative, thm-compact-hausdorff-tychonoff-from-the-ultrafilter-lemma, def-dual-space-of-a-normed-space, def-limsup-liminf, lem-limsup-exists, thm-limsup-subadditive, lem-limsup-reflection, cor-liminf-is-least-subsequential-limit, thm-infimum-property, thm-monotone-convergence, thm-bounded-operator-space-is-banach, thm-banach-series-criterion, def-series-and-absolute-convergence-in-a-normed-space, thm-geometric-series, lem-index-map-grows]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: "James's nested convex-block induction, followed by the exact tail-weight telescoping estimate and a geometric-weight nonattainment argument."
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: "Robert E. Megginson, An Introduction to Banach Space Theory (1998)"
      url: "https://ebooks.karbust.me/Mathematics/Robert%20E.%20Megginson%20-%20An%20Introduction%20to%20Banach%20Space%20Theory%20%281998%29%20%5B978-1-4612-0603-3%5D.pdf"
      locator: "§1.13, Lemmas 1.13.10, 1.13.12 and 1.13.13 and Theorem 1.13.14(b)→(d), printed pp. 122–133"
---

## Statement

Assume the Axiom of Dependent Choice (DC) and the relative Hahn–Banach
principle HB.  Let $X$ be a real Banach space, let $0<\theta<1$, and let
$(x_n^*)_{n\in\mathbb N}$ be a sequence in $B_{X^*}$.  For every bounded
sequence $s=(s_n^*)$ in $X^*$ put

$$L(s)=\{w^*\in X^*:w^*(x)\le\limsup_n s_n^*(x)\text{ for every }x\in X\}.$$

Suppose

$$\operatorname{dist}\!\left(L(x),\operatorname{co}\{x_n^*:n\in\mathbb N\}\right)\ge\theta,$$

where $\operatorname{co}$ is the finite convex hull.  If
$(\beta_n)_{n\in\mathbb N}$ is any sequence of positive reals with
$\sum_{n=0}^\infty\beta_n=1$, then there are
$\alpha\in[\theta,2]$ and a sequence $(y_n^*)$ in $B_{X^*}$ such that, for
every $w^*\in L(y)$,

$$\left\|\sum_{j=0}^\infty\beta_j(y_j^*-w^*)\right\|=\alpha$$

and, for every $n\in\mathbb N$,

$$\left\|\sum_{j=0}^{n}\beta_j(y_j^*-w^*)\right\|<\alpha\left(1-\theta\sum_{j>n}\beta_j\right).$$

In addition, assume the ultrafilter lemma.  If $X$ is nonreflexive, then
some $z^*\in X^*$ does not attain its norm on $B_X$.

## Facts & Assumptions

**Given:** DC, HB, a real Banach space $X$, $0<\theta<1$, a dual-ball sequence $(x_n^*)$ satisfying the displayed separation, and positive weights $(\beta_n)$ of sum one.  The ultrafilter lemma is assumed only for the final nonreflexive consequence.

[F1] For a bounded real sequence, limsup and liminf are finite real numbers; limsup is subadditive, reflection exchanges limsup and liminf, and liminf is realized by a subsequence ([[def-limsup-liminf]], [[lem-limsup-exists]], [[thm-limsup-subadditive]], [[lem-limsup-reflection]], [[cor-liminf-is-least-subsequential-limit]]).

[F2] Under HB, a real linear functional dominated by a sublinear functional extends to the whole real vector space ([[thm-relative-hahn-banach-dominated-extension]], [[def-hahn-banach-extension-principle-relative]]).

[F3] Nonempty real sets bounded below have infima, and bounded monotone real sequences converge to the corresponding supremum or infimum ([[thm-infimum-property]], [[thm-monotone-convergence]]).

[F4] The dual norm is the supremum of absolute values on the closed unit ball.  Since the scalar field is complete, $X^*=\mathcal B(X,\mathbb R)$ is Banach, and every absolutely convergent series in it converges ([[def-dual-space-of-a-normed-space]], [[thm-bounded-operator-space-is-banach]], [[thm-banach-series-criterion]], [[def-series-and-absolute-convergence-in-a-normed-space]]).

[F5] DC supplies an infinite chain through any entire relation on a nonempty set ([[def-dependent-choice]]).

[F6] A strictly increasing subsequence index map satisfies $k_n\ge n$, and the real geometric-series formula holds for every ratio of absolute value less than one ([[lem-index-map-grows]], [[thm-geometric-series]]).

[F7] Under the ultrafilter lemma, DC and HB, every nonreflexive real Banach space has the annihilator-separated pointwise-null dual-ball sequence of [[lem-james-noncompactness-sequence]].  Its ultrafilter-lemma input is the compact-Hausdorff Tychonoff theorem ([[thm-compact-hausdorff-tychonoff-from-the-ultrafilter-lemma]]).

## Proof

**Proof technique:** nested convex-block induction and a geometric series argument.

1.1 We first record two elementary properties of $L$.  For a bounded sequence $s=(s_n^*)$, say $\|s_n^*\|\le C$, the function $p(u)=\limsup_n s_n^*(u)$ is finite, positively homogeneous, and subadditive: homogeneity follows directly from tail suprema and subadditivity from [F1]. Apply [F2] to the zero functional on $\{0\}$ dominated by $p$.  The extension $w^*$ satisfies $w^*(u)\le p(u)$, while applying this inequality at $-u$ and using [F1] gives $w^*(u)\ge\liminf_n s_n^*(u)$.  Hence $|w^*(u)|\le C\|u\|$, so $w^*\in L(s)$ and $\|w^*\|\le C$.  Thus $L(s)$ is nonempty and, when $s\subseteq B_{X^*}$, lies in $B_{X^*}$. [F1, F2, F4]

1.2 Let $V(s)$ be the set of sequences $v=(v_n^*)$ for which $v_n^*\in\operatorname{co}\{s_j^*:j\ge n\}$ at every $n$.  It is nonempty because $s\in V(s)$.  For each $u$, every such convex combination satisfies $v_n^*(u)\le\sup_{j\ge n}s_j^*(u)$, so the receding-tail definition gives $\limsup_n v_n^*(u)\le\limsup_n s_n^*(u)$ and therefore $L(v)\subseteq L(s)$.  Flattening two finite convex combinations proves $V(v)\subseteq V(s)$ when $v\in V(s)$.  A subsequence of $s$ also belongs to $V(s)$: its $n$th index is at least $n$ by [F6]. [F1, F6, construct]

1.3 Reindex the weights by positive integers, $b_m=\beta_{m-1}$ for $m\ge1$.  Extend the corresponding reindexing of the dual sequence to a genuine zero-based library sequence by setting $\widehat x_0^*=x_0^*$ and $\widehat x_m^*=x_{m-1}^*$ for $m\ge1$.  The duplicate initial term does not change any scalar limsup, so $L(\widehat x)=L(x)$, and $\{\widehat x_m^*:m\ge1\}=\{x_n^*:n\in\mathbb N\}$.  Put $T_m=\sum_{j=m}^\infty b_j$, so $T_1=1$, $T_m=b_m+T_{m+1}$, every $T_m>0$, and $T_m\to0$.  Choose explicitly $\varepsilon_m=\min\{1/(m+1),(1-\theta)2^{-m-1}T_mT_{m+1}/b_m\}>0$.  Then $\varepsilon_m\to0$ and [F6] gives $$\sum_{m=1}^\infty\frac{b_m\varepsilon_m}{T_mT_{m+1}}\le(1-\theta)\sum_{m=1}^\infty2^{-m-1}=\frac{1-\theta}{2}<1-\theta.\tag{1}$$ [given, F6, algebra]

1.4 Now additionally assume the ultrafilter lemma and that $X$ is nonreflexive.  Apply [F7] with the same $\theta$ to obtain $M$ and $(x_n^*)\subseteq B_{X^*}$, pointwise null on $M$, with its convex hull at distance at least $\theta$ from $M^\perp$.  If $w^*\in L(x)$, then for $m\in M$ the defining inequality at $m$ and $-m$ gives $w^*(m)\le0$ and $-w^*(m)\le0$.  Hence $L(x)\subseteq M^\perp$, and the separation hypothesis of the technical criterion holds. [F1, F7]

2.1 Set $x^{(0)}=\widehat x$.  Suppose that $y_1^*,\ldots,y_{m-1}^*$ and the sequences $x^{(0)},\ldots,x^{(m-1)}$ have been constructed.  For $y^*\in\operatorname{co}\{x_j^{(m-1)}:j\ge m\}$ and $v\in V(x^{(m-1)})$, define $$S_m(y^*,v)=\{\|\sum_{j<m}b_jy_j^*+T_my^*-w^*\|:w^*\in L(v)\},$$ and let $\alpha_m$ be the infimum, over all such $(y^*,v)$, of $\sup S_m(y^*,v)$.  Step 1.1 makes every $S_m$ nonempty.  All displayed functionals have norm at most two, because all the convex blocks and all members of $L(v)$ lie in the dual unit ball; hence $0\le\alpha_m\le2$ and [F3] makes the infimum legitimate. [step 1.1, step 1.2, F3, F4]

3.1 For $m=1$, any admissible $y^*$ is in the convex hull of the original sequence and $L(v)\subseteq L(\widehat x)=L(x)$ by steps 1.2–1.3.  The separation hypothesis therefore gives $\|y^*-w^*\|\ge\theta$ for every admissible $w^*$, so $\alpha_1\ge\theta$. [step 1.2, step 1.3, step 2.1, given]

4.1 Suppose $m\ge2$.  The induction will arrange that $x^{(m-1)}$ is a subsequence of some $z^{(m-1)}\in V(x^{(m-2)})$.  Consequently $x^{(m-1)}\in V(x^{(m-2)})$ by step 1.2.  For an admissible $y^*$ at stage $m$, both $y_{m-1}^*$ and $y^*$ lie in $\operatorname{co}\{x_k^{(m-2)}:k\ge m-1\}$, and so does $$u^*=\frac{b_{m-1}y_{m-1}^*+T_my^*}{T_{m-1}}.$$ Also $v\in V(x^{(m-2)})$ by flattening.  Since $$\sum_{j<m-1}b_jy_j^*+T_{m-1}u^*-w^*=\sum_{j<m}b_jy_j^*+T_my^*-w^*,$$ every stage-$m$ candidate supplies a stage-$(m-1)$ candidate of the same supremum.  Hence $\alpha_{m-1}\le\alpha_m$.  Together with step 3.1, $\theta\le\alpha_m\le2$ for all $m$. [step 1.2, step 2.1, step 3.1, algebra]

5.1 The definition of the positive number $\alpha_m$ supplies $y_m^*\in\operatorname{co}\{x_j^{(m-1)}:j\ge m\}$ and $z^{(m)}\in V(x^{(m-1)})$ such that $$\alpha_m\le\sup S_m(y_m^*,z^{(m)})<\alpha_m(1+\varepsilon_m).\tag{2}$$ Because $0<\varepsilon_m<1$, choose $w_m^*\in L(z^{(m)})$ for which the norm inside (2) is greater than $\alpha_m(1-\varepsilon_m)$.  By [F4] and the balance of $B_X$, there is $u_m\in B_X$ on which the same functional, without absolute-value signs, has value greater than that number.  The bounded scalar sequence $z_j^{(m)}(u_m)$ has a subsequence converging to its liminf by [F1]; denote the corresponding dual sequence by $x^{(m)}$. [step 1.3, step 2.1, step 4.1, F1, F3, F4]

6.1 These choices depend on the whole finite history.  Let the state set consist of all finite histories satisfying step 5.1, beginning with the empty history and $x^{(0)}=\widehat x$, and relate a history to each valid one-stage extension.  Step 5.1 proves that every state has a successor. Applying DC once produces all $y_m^*,z^{(m)},w_m^*,u_m,x^{(m)}$ with (2) and the strict lower inequality.  No simultaneous selection outside this DC application is being hidden. [step 5.1, F5]

7.1 The induction has produced the positive-indexed family $(y_m^*)_{m\ge1}$.  Make it a genuine sequence by putting $\widetilde y_0^*=y_1^*$ and $\widetilde y_m^*=y_m^*$ for $m\ge1$.  For fixed $n\ge0$ and every $j>n$, repeated flattening of the relations in steps 4.1–5.1 gives $y_j^*\in\operatorname{co}\{x_k^{(n)}:k\ge j\}$.  Ignoring the single duplicated initial term in $\widetilde y$, the tail argument of step 1.2 therefore yields $$L(\widetilde y)\subseteq\bigcap_{n\ge0}L(x^{(n)})\subseteq\bigcap_{n\ge1}L(z^{(n)}).\tag{3}$$ For the second inclusion, $x^{(n)}$ is a subsequence of $z^{(n)}$. [step 1.2, step 4.1, step 5.1, step 6.1]

8.1 Fix $w^*\in L(\widetilde y)$.  Since $w^*\in L(x^{(m)})$ by (3) and the $u_m$-evaluations of $x^{(m)}$ converge to the liminf of those of $z^{(m)}$, $$w^*(u_m)\le\liminf_jz_j^{(m)}(u_m)\le w_m^*(u_m).$$ The last inequality follows by applying the definition $w_m^*\in L(z^{(m)})$ at $-u_m$ and using limsup reflection.  Replacing $w_m^*$ by $w^*$ therefore preserves the strict lower evaluation chosen in step 5.1.  The upper estimate follows from $w^*\in L(z^{(m)})$ and (2). Thus $$\alpha_m(1-\varepsilon_m)<\|\sum_{j<m}b_jy_j^*+T_my_m^*-w^*\|<\alpha_m(1+\varepsilon_m).\tag{4}$$ [step 5.1, step 7.1, F1, F4]

9.1 By steps 2.1 and 4.1, $(\alpha_m)$ is nondecreasing and bounded above by $2$, so [F3] gives a limit $\alpha\in[\theta,2]$.  The series $\sum_{j\ge1}b_jy_j^*$ is absolutely convergent and hence convergent in the Banach space $X^*$ by [F4].  If $q=\sum_{j\ge1}b_jy_j^*-w^*$ and the functional inside (4) is $q_m$, then $\|q-q_m\|\le\sum_{j\ge m}b_j\|y_j^*-y_m^*\|\le2T_m\to0$.  Since $\varepsilon_m\to0$, (4) gives $\|q\|=\alpha$.  Because $\sum b_j=1$, this is $\|\sum_{j\ge1}b_j(y_j^*-w^*)\|=\alpha$. [step 1.3, step 4.1, step 8.1, F3, F4]

10.1 It remains to prove the strict prefix estimate.  Put $P_n=\sum_{j=1}^nb_j(y_j^*-w^*)$, $P_0=0$, and $Q_n=P_{n-1}+T_n(y_n^*-w^*)$.  The upper half of (4) and $\alpha_n\le\alpha$ give $\|Q_n\|<\alpha(1+\varepsilon_n)$.  The exact identity $$P_n=\frac{b_n}{T_n}Q_n+\frac{T_{n+1}}{T_n}P_{n-1}$$ and induction yield $$\|P_n\|<\alpha T_{n+1}\sum_{k=1}^n\frac{b_k(1+\varepsilon_k)}{T_kT_{k+1}}.$$ Since $b_k=T_k-T_{k+1}$, $\sum_{k=1}^n b_k/(T_kT_{k+1})=1/T_{n+1}-1/T_1$. Using $T_1=1$ and (1) therefore gives $$\|P_n\|<\alpha(1-T_{n+1})+\alpha(1-\theta)T_{n+1}=\alpha(1-\theta T_{n+1}).\tag{5}$$ The calculation includes $n=1$, where $P_0=0$. [step 1.3, step 8.1, step 9.1, algebra, induction]

11.1 Define the asserted zero-based sequence by $y_n^{\mathrm{out}*}=y_{n+1}^*$.  It and $\widetilde y$ differ only by a one-place shift and a duplicated first term, so their scalar limsups agree and $L(y^{\mathrm{out}})=L(\widetilde y)$.  Step 9.1 is therefore the asserted infinite-series equality for every $w^*\in L(y^{\mathrm{out}})$, while (5) with $n$ replaced by $n+1$ is exactly $$\|\sum_{j=0}^n\beta_j(y_j^{\mathrm{out}*}-w^*)\|<\alpha(1-\theta\sum_{j>n}\beta_j).$$ Relabeling $y^{\mathrm{out}}$ as $y$ proves the technical criterion, including the first term $n=0$ and every positive weight sequence. [step 1.3, step 7.1, step 9.1, step 10.1]

12.1 Put $\Delta=\theta^2/4$ and $r=\Delta/2$, and take the positive zero-based weights $\beta_j=(1-r)r^j$.  By [F6] they sum to one; their tails $R_k=\sum_{j\ge k}\beta_j$ satisfy $R_{k+1}=rR_k<\Delta R_k$.  Apply the technical criterion to obtain $\alpha$, $y$, and choose one $w^*\in L(y)$, which is possible by step 1.1.  The absolutely convergent series $z^*=\sum_{j=0}^\infty\beta_j(y_j^*-w^*)$ has $\|z^*\|=\alpha\ge\theta>0$. [step 1.1, step 11.1, step 1.4, F4, F6]

13.1 Fix $u\in B_X$.  Step 1.1 gives $\|w^*\|\le1$ and $\liminf_jy_j^*(u)\le w^*(u)$.  Since $\theta^2-2\Delta=\theta^2/2>0$, there is an arbitrarily late $k$, and in particular one with $k\ge1$, such that $(y_k^*-w^*)(u)<\theta^2-2\Delta\le\alpha\theta-2\Delta$.  Split $z^*(u)$ before $k$, at $k$, and after $k$.  The prefix estimate at $k-1$, the displayed scalar inequality, and $\|y_j^*-w^*\|\le2$ give $$z^*(u)<\alpha(1-\theta R_k)+(\alpha\theta-2\Delta)\beta_k+2R_{k+1}<\alpha(1-\theta R_k)+(\alpha\theta-2\Delta)\beta_k+2\Delta R_k=\alpha-(\alpha\theta-2\Delta)R_{k+1}<\alpha,$$ because $\alpha\theta-2\Delta\ge\theta^2-2\Delta>0$.  Applying the same argument to $-u$ gives $-z^*(u)<\alpha$.  Therefore $|z^*(u)|<\alpha=\|z^*\|$ for every $u\in B_X$: $z^*$ is nonzero but attains its norm nowhere on the closed unit ball. [step 1.1, step 11.1, step 12.1, F1, F4]

14.1 The first part uses DC only in step 6.1 and HB only in step 1.1.  The ultrafilter lemma is absent there and enters solely through [F7] in the final nonreflexive consequence.  The empty space cannot meet either separation or nonreflexivity; singleton convex combinations and the first prefix occur in steps 3.1 and 11.1; all tail denominators are positive because every weight is positive; and both strict endpoints $0<\theta<1$ are used in (1) and step 13.1. [step 1.1, step 1.3, step 3.1, step 6.1, step 11.1, step 1.4, step 13.1] ∎

## Source notes

Megginson's Lemma 1.13.12 proves nonemptiness of $L(s)$.  Lemma 1.13.13, printed pp. 128–132, supplies the eight-claim nested convex-block induction; its final reference to Lemma 1.13.10 step 6 is expanded here into the exact $P_n,Q_n,T_n$ identity and telescoping calculation.  Theorem 1.13.14(b)→(d), printed pp. 132–133, supplies the annihilator inclusion and geometric-weight norm-nonattainment argument.  The proof here reindexes all public data from the source's positive integers to the repository's zero-based $\mathbb N$.
