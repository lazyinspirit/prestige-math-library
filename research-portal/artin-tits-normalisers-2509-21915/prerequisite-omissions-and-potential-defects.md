---
title: Prerequisite omissions and potential defects
research_report: defects
description: Original-article findings for Normalisers of parabolic subgroups of
  Artin–Tits groups and Tits cone intersections.
status: published
generated_at: "2026-11-13T16:48:12.730Z"
---

10 confirmed findings in the original article.

## pdf-lemma35-boundary-inferences · confirmed

**Tags:** over strong conclusions; missing proof steps

https://arxiv.org/abs/2509.21915; PDF p. 8, Lemma 3.5 proof, sign equivalence and induction (PDF p. 8).

> In particular, the following set

The closed-chamber induction does not justify nonemptiness of its set $I$. A nontrivial $w$ with $g\in w\overline C$ need not place $g$ outside $\overline C$. The displayed set $I$ can therefore be empty. Separation finiteness itself is not refuted.

The PDF induction uses an arbitrary closed-chamber representative w. Its asserted nonempty I fails for the distinct endpoints below. The earlier $f=g$=0 test misses this branch; the sign equivalence is valid for the roots already selected to cross the open segment.

**Correction:** Use only $g(\alpha)<0\Rightarrow w^{-1}\alpha\in\Phi^-$. Every separating hyperplane then contributes an inversion of $w^{-1}$, directly giving the finite bound without induction.

**Counterexample:** Rank one, $W=\{1,s\}$, $w=s$, $\alpha=\alpha_s$, $f(\alpha_s)=1$, $g=0$.

Both endpoints belong to the Tits cone, $f\in\overline C$, $g\in s\overline C$, $f\ne g$, and $w\ne1$, so the nontrivial induction branch is admissible. Nevertheless $g\in\overline C$ and $I=\{i:g(\alpha_i)<0\}=\varnothing$, contradicting its asserted nonemptiness. The example does not involve a hyperplane crossing the open segment, and does not refute the preceding sign equivalence restricted to already selected crossing roots. It refutes only the nonemptiness inference, not separation finiteness.

## pdf-prop36-ambient-ball-inference · confirmed

**Tags:** over strong conclusions; missing proof steps

https://arxiv.org/abs/2509.21915; PDF p.9, Proposition 3.6 proof, second paragraph, ambient neighbourhood and ball assertion (PDF p. 9).

> We can thus consider a small enough open ball B centred at u

The claimed ambient ball excluding root hyperplanes not through u need not exist. An interior point of the relative cone can be an ambient boundary point with other root hyperplanes accumulating nearby. This invalidates the chosen ambient neighbourhood, not the proposition’s relative local-finiteness conclusion.

The rendered proof explicitly requires B∩Cone, rather than B∩Θ_J. The admissible sequence below contradicts precisely that stronger inference.

**Correction:** Prove a relative-ball statement instead: choose finitely many opposite coordinate vertices near u inside the relative cone. Any proper restricted hyperplane meeting a smaller ball separates one vertex pair, giving finiteness by the inversion-set separation bound. Shrink past those not through u.

**Counterexample:** Rank three with m₁₂=∞, m₁₃=m₂₃=3; J={1,2}, E=Θ_J and u=(0,0,1) in dual simple-root coordinates.

The canonical form has B₁₂=−1 and B₁₃=B₂₃=−1/2. E is the third coordinate line; its positive ray lies in the fundamental closed chamber, so u∈Cone(J)° as required. On the dual, s₁=[[-1,0,0],[2,1,0],[1,0,1]], s₂=[[1,2,0],[0,−1,0],[0,1,1]] both fix u. Put $w_n=(s₁s₂)^n$ and $p=(1,1,0)∈C̄∩H_{α₃}$. Multiplication and induction give $w_np=(1−4n,1+4n,4n²)$. For n≥1, $x_n=w_np/(4n²)$ belongs to Cone and to $H_{w_nα₃}$. Equivariance gives $u(w_nα₃)=(w_n⁻¹u)(α₃)=1$, so this hyperplane misses u. But $x_n→u$. Thus every ambient B∩Cone meets such a hyperplane. The $x_n$ are outside E; they do not contradict relative local finiteness. In fact on E every proper linear hyperplane is {0}, absent near u. The polynomial identity was checked coefficientwise, not inferred from a finite numerical sample.

## pdf-wall-root-characterisation · confirmed

**Tags:** typos; over strong conclusions

https://arxiv.org/abs/2509.21915; PDF p. 10, paragraph immediately after (3.15) (PDF p. 10).

> Note that va,I can be alternatively characterised

The printed first root inclusion fails even in rank one. The target is $\Phi_K^-$ as printed, which is empty in the admissible example below.

The subscript K is visible in the rendered PDF. This is the authors’ actual auxiliary inclusion, not a generated dependency reconstruction.

**Correction:** Remove this auxiliary characterization pending a proved corrected formula; retain the longest-element definition (3.14).

**Counterexample:** $S=\{a\}$, $J=I=\varnothing$, $x=1$.

$W_Jx=xW_I=\{1\}$ and $x$ is minimal; $a\notin I$ and $W_{[I,a]}=\{1,s_a\}$ is finite. Opposition fixes $a$, so $K=\varnothing$ and $v_{a,I}=s_a$. The source $\Phi^+_{I+a}\setminus\Phi_K^+$ contains $\alpha_a$, whose image is $-\alpha_a$, but the claimed target $\Phi_K^-$ is empty.

## pdf-ribbon-distinct-indices · confirmed

**Tags:** insufficient assumptions

https://arxiv.org/abs/2509.21915; PDF p. 22, Remark 5.7, (5.8), and Lemma 5.9 (PDF p. 22).

> precisely two expressions

The two-expression assertion and Lemma 5.9 need $a\ne b$. Remark 5.7 and Lemma 5.9 allow $a=b$; their invoked Lemma 4.15 explicitly requires distinct indices.

The original quantifiers do not exclude equal indices; rendered p.19 supplies the contrasting distinctness hypothesis of Lemma 4.15.

**Correction:** Impose $a\ne b$ for the two-expression comparison; on the diagonal the lcm is just $\mu_{a,I}$.

**Counterexample:** Spherical rank one, $S=\{a\}$, $J=I=\varnothing$, $b=a$.

$I$ is an associate of $J$ and $a,b\in I^c$, as required. Here $A^+=\langle\sigma_a\rangle^+$, the sole elementary ribbon is $\sigma_a$, and $\sigma_a\vee\sigma_a=\sigma_a$. A product of elementary ribbons equals it only when its factor count is one. Hence there is exactly one expression, not precisely two; $v_{a,b,I}$ from Lemma 4.15 is not defined for these equal indices.

## pdf-prop46-left-descent-typo · confirmed

**Tags:** typos

https://arxiv.org/abs/2509.21915; PDF p.16, Proposition 4.6(1) proof, paragraph beginning “We claim that for any j” (PDF p. 16).

> contradicting length-minimality.

The displayed descent uses $ys_j$ where $s_jy$ is required. Negativity of $y⁻¹α_j$ detects left descent of $y$. The proof has minimality in $W_Jy$, so the corrected left product gives its intended contradiction.

The formula was checked on the rendered page against the surrounding $W_Jy$ minimality and the root-length criterion. This is an indexing-side typo, not a counterexample to Proposition 4.6.

**Correction:** Replace $ℓ(ys_j)<ℓ(y)$ by $ℓ(s_jy)<ℓ(y)$.

## pdf-unrestricted-finite-cw · confirmed

**Tags:** over strong conclusions

https://arxiv.org/abs/2509.21915; PDF p. 13, Remark 3.27; general scope fixed in §2.2, p.4 (PDF p. 13).

> has a finite CW-model

Local finiteness does not imply the finite-CW assertion in Remark 3.27. Section 3 is not restricted to spherical type. The infinite-dihedral example has infinitely many independent first-homology classes.

The original Remark 3.27 asserts finite CW type. Its preceding spherical sentence is conditional, while p.4 limits the spherical standing assumption to Sections 5–6. The example uses precisely the product complement (3.26).

**Correction:** Keep the Salvetti homotopy model in general; assert its finiteness for a finite relative arrangement, in particular in spherical type.

**Counterexample:** $W=\langle s,t\mid s^2=t^2=1\rangle$, $m(s,t)=\infty$, $J=\varnothing$, in the standard rank-two realization.

Write $x=f(\alpha_s)$, $y=f(\alpha_t)$, $a=x+y$, $b=x$. The dual generators fix $a$ and send $b$ to $-b$ and $2a-b$. Fundamental chambers therefore tile $a>0$ with intervals $k<b/a<k+1$; the Tits cone is $\{a>0\}\cup\{0\}$ and its interior is $I=\{a>0\}$. The root hyperplanes are $b=ka$ for $k\in\mathbb Z$. They all meet $I$, locally finitely: on compact subsets $a$ is bounded below positively while $b$ is bounded. In the article’s product complement, complex $a$ lies in $Q=\{\Re a>0,\Im a>0\}$. The map $(a,b)\mapsto(a,b/a)$ identifies that complement with $Q\times(\mathbb C\setminus\mathbb Z)$. For each integer k a small circle around k has winding 1 under z↦z−k and 0 under every z↦z−j with j≠k. These maps prove infinite independent classes in H₁. A finite CW complex has finitely generated H₁, so no finite CW homotopy model exists.

## pdf-d4-normaliser-freeness · confirmed

**Tags:** typos; over strong conclusions

https://arxiv.org/abs/2509.21915; PDF p. 29, §7.2.1, paragraph beginning “By Theorem 4.7” (PDF p. 29).

> the action of each g

The normaliser itself does not act freely on the relative chambers. The paragraph writes $\operatorname{Norm}_W(W_J)$, whereas Lemma 3.24 proves freeness for its quotient $N(W,J)$.

The rendered normaliser symbol has no quotient here. The immediately preceding sentence and the cited lemma make the intended quotient correction explicit.

**Correction:** Replace the acting normaliser by $N(W,J)=\operatorname{Norm}_W(W_J)/W_J$.

**Counterexample:** The actual $D_4$ example with $J=\{2\}$ and $g=t=s_2$.

$t\ne1$ and $t\in W_J\subseteq\operatorname{Norm}_W(W_J)$. For $f\in\Theta_J$, $f(\alpha_2)=0$. Since $t\alpha_i=\alpha_i+\alpha_2$ for i≠2 and $t\alpha_2=-\alpha_2$, the dual action fixes every such f. Thus t fixes every relative chamber, violating freeness of the named normaliser action. Its class in N(W,J) is the identity, so this does not refute Lemma 3.24.

## pdf-d4-second-braid · confirmed

**Tags:** typos

https://arxiv.org/abs/2509.21915; PDF p. 30, §7.2.1, second displayed braid immediately before (7.2) (PDF p. 30).

> atomic braid relations in BH

The second displayed braid has $tv\cdot ts\cdot v$ instead of $tv\cdot st\cdot v$. Its middle arrow is not composable, and the printed labels are unequal in $W$. The lower path in (7.2) already gives the corrected word.

Read the printed second equality, Figure 4 directions and both paths in (7.2). Their labels independently establish the source typo; exact integer root matrices verify the unequal printed words and corrected equality.

**Correction:** Replace $s\cdot tv\cdot st=tv\cdot ts\cdot v$ by $s\cdot tv\cdot st=tv\cdot st\cdot v$.

**Counterexample:** Use exactly the article’s $D_4$ numbering, $J=\{2\}$, and left-to-right groupoid composition.

Figure 4 has $tv:4\to2$ and $ts:1\to2$, so their printed composite does not exist. The standard root action gives $stvst(\alpha_1)=\alpha_4$, whereas $tvtsv(\alpha_1)=-\alpha_1-\alpha_2-\alpha_4$, so even the group labels differ. The corrected factors compose as $4\to2\to1\to1$, and $stvst=stsvt=tstvt=tsvtv=tvstv$ by the D₄ braid and leaf-commutation relations. Independent integer-matrix enumeration reproduced both evaluations and the corrected equality.

## pdf-adjacency-uniqueness-wording · confirmed

**Tags:** typos

https://arxiv.org/abs/2509.21915; PDF p. 11, Proposition 3.17, first sentence (PDF p. 11).

> Then there exists a unique

The first sentence gives an equality-only uniqueness formulation that needs the common-wall qualification. Read together, the subsequent clauses describe the intended unique wall indices. The subset equality by itself does not characterize them.

The literal first sentence and following common-wall clause were both checked. This is a wording defect only; the example does not refute the proposition interpreted with all its wall conditions.

**Correction:** State uniqueness for the indices describing the specified common wall, then list the subset equality among their properties.

**Counterexample:** Type $A_2$, $J=I=K=\varnothing$, adjacent chambers labelled $(1,\varnothing)$ and $(s_1,\varnothing)$.

The chamber-label conditions hold because both parabolics are trivial, and these fundamental chambers are adjacent across $H_{\alpha_1}$. Both pairs $(a,a')=(1,1)$ and $(2,2)$ lie in $I^c\times K^c$ and satisfy $I+a=K+a'$. Thus equality-only uniqueness fails. Only the first pair describes the specified common wall. The complete wall-crossing conclusion, interpreted with that wall condition, is not refuted.

## pdf-normaliser-surjectivity-proof · confirmed

**Tags:** missing proof steps

https://arxiv.org/abs/2509.21915; PDF p. 6, Lemma 2.8 proof, omitted surjectivity argument (PDF p. 6).

> The other inclusion is clear.

Lemma 2.8 proves the induced map and kernel but omits its surjectivity argument. Surjectivity of $A\to W$ does not by itself imply surjectivity on normalisers. The printed proof stops after the kernel equality.

Read both original proof paragraphs: they construct the induced map and identify its kernel, but do not lift an arbitrary normaliser class. Minimal representatives and positive lifts supply the omitted step; the current authored item includes it.

**Correction:** For a quotient class choose its minimal Coxeter representative $d$, which permutes $J$. From $sd=dt$ with both products length-additive obtain $σ_sσ_d=σ_dσ_t$; thus $σ_d$ normalises $A_J$ and lifts the class.
