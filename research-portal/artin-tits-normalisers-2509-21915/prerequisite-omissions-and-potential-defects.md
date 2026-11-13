---
title: Prerequisite omissions and potential defects
research_report: defects
description: Original-article findings for Normalisers of parabolic subgroups of
  Artin–Tits groups and Tits cone intersections.
status: draft
generated_at: 2026-11-13T15:53:28.782Z
---

8 confirmed findings in the original article.

## pdf-lemma35-boundary-inferences · confirmed

**Tags:** over strong conclusions; missing proof steps

https://arxiv.org/abs/2509.21915; PDF p. 8, Lemma 3.5 proof, sign equivalence and induction (PDF p. 8).

> In particular, the following set

The closed-chamber induction does not justify nonemptiness of its set $I$. A nontrivial $w$ with $g\in w\overline C$ need not place $g$ outside $\overline C$. The displayed set $I$ can therefore be empty. Separation finiteness itself is not refuted.

The rendered induction allows arbitrary closed-chamber representatives. The earlier $f=g$ example misses the $f\ne g$ branch; distinct endpoints repair that test. Its separate sign objection does not apply to already selected crossing roots.

**Correction:** Use only $g(\alpha)<0\Rightarrow w^{-1}\alpha\in\Phi^-$. Every separating hyperplane then contributes an inversion of $w^{-1}$, directly giving the finite bound without induction.

**Counterexample:** Rank one, $W=\{1,s\}$, $w=s$, $\alpha=\alpha_s$, $f(\alpha_s)=1$, $g=0$.

Both endpoints belong to the Tits cone, $f\in\overline C$, $g\in s\overline C$, $f\ne g$, and $w\ne1$, so the nontrivial induction branch is admissible. Nevertheless $g\in\overline C$ and $I=\{i:g(\alpha_i)<0\}=\varnothing$, contradicting its asserted nonemptiness. The example does not involve a hyperplane crossing the open segment, and does not refute the preceding sign equivalence restricted to already selected crossing roots. It refutes only the nonemptiness inference, not separation finiteness.

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

## pdf-unrestricted-finite-cw · confirmed

**Tags:** over strong conclusions

https://arxiv.org/abs/2509.21915; PDF p. 13, Remark 3.27; general scope fixed in §2.2, p.4 (PDF p. 13).

> has a finite CW-model

Local finiteness does not imply the finite-CW assertion in Remark 3.27. Section 3 is not restricted to spherical type. The infinite-dihedral example has infinitely many independent first-homology classes.

Rendered p.13 says finite without a new standing hypothesis. The preceding spherical conditional only identifies a special-case space; §2.2 restricts spherical type to Sections 5–6.

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

The rendered formula and arrows were read directly, including Figure 4 and both paths in (7.2); no AI-generated expression supplies the attribution.

**Correction:** Replace $s\cdot tv\cdot st=tv\cdot ts\cdot v$ by $s\cdot tv\cdot st=tv\cdot st\cdot v$.

**Counterexample:** Use exactly the article’s $D_4$ numbering, $J=\{2\}$, and left-to-right groupoid composition.

Figure 4 has $tv:4\to2$ and $ts:1\to2$, so their printed composite does not exist. The standard root action gives $stvst(\alpha_1)=\alpha_4$, whereas $tvtsv(\alpha_1)=-\alpha_1-\alpha_2-\alpha_4$, so even the group labels differ. The corrected factors compose as $4\to2\to1\to1$, and $stvst=stsvt=tstvt=tsvtv=tvstv$ by the D₄ braid and leaf-commutation relations. Independent integer-matrix enumeration reproduced both evaluations and the corrected equality.

## pdf-adjacency-uniqueness-wording · confirmed

**Tags:** typos

https://arxiv.org/abs/2509.21915; PDF p. 11, Proposition 3.17, first sentence (PDF p. 11).

> Then there exists a unique

Enlarged-subset equality alone does not uniquely specify the wall indices. The first sentence asserts uniqueness from the subset equality; the following common-wall condition supplies the intended unique indices.

The equality-only first sentence is present in the PDF; the example establishes a wording ambiguity, not failure of the intended common-wall theorem.

**Correction:** State uniqueness for the indices describing the specified common wall, then list the subset equality among their properties.

**Counterexample:** Type $A_2$, $J=I=K=\varnothing$, adjacent chambers labelled $(1,\varnothing)$ and $(s_1,\varnothing)$.

The chamber-label conditions hold because both parabolics are trivial, and these fundamental chambers are adjacent across $H_{\alpha_1}$. Both pairs $(a,a')=(1,1)$ and $(2,2)$ lie in $I^c\times K^c$ and satisfy $I+a=K+a'$. Thus equality-only uniqueness fails. Only the first pair describes the specified common wall. The complete wall-crossing conclusion, interpreted with that wall condition, is not refuted.

## pdf-normaliser-surjectivity-proof · confirmed

**Tags:** missing proof steps

https://arxiv.org/abs/2509.21915; PDF p. 6, Lemma 2.8 proof, omitted surjectivity argument (PDF p. 6).

> The other inclusion is clear.

Lemma 2.8 proves the induced map and kernel but omits its surjectivity argument. Surjectivity of $A\to W$ does not by itself imply surjectivity on normalisers. The printed proof stops after the kernel equality.

Both original proof paragraphs were read. Neither lifts an arbitrary Coxeter-normaliser class. Corollary 4.8 supplies the independent complement; positive-lift multiplication then fills the omission. The current authored item already contains this argument.

**Correction:** For a quotient class choose its minimal Coxeter representative $d$, which permutes $J$. From $sd=dt$ with both products length-additive obtain $\sigma_s\sigma_d=\sigma_d\sigma_t$; thus $\sigma_d$ normalises $A_J$ and lifts the class.
