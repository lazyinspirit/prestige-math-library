---
id: "lem-cg-finite-rank-two-inversion-set-recognition"
kind: "lemma"
title: "Finite inversion sets are recognized by their rank-two initial or final segments"
status: published
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 17
deps:
  - lem-cg-finite-dihedral-subsystems-and-canonical-roots
  - thm-cg-finite-type-positive-definite-criterion
  - def-cg-real-coxeter-form-and-reflection
  - thm-cg-root-sign-and-simple-reflection-positivity
  - lem-cg-reflection-representation-descends-and-root-norms
  - thm-cg-root-inversion-formulas-and-strong-exchange
  - thm-cg-root-length-criterion-and-faithfulness
  - lem-cg-weak-order-is-a-graded-partial-order
proof_strategy: induction
aliases: []
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "N. Reading and D. E. Speyer, Sortable elements in infinite Coxeter groups, arXiv:0803.2722v3 (2010); Trans. Amer. Math. Soc. 363 (2011) 699-761"
      url: "https://arxiv.org/pdf/0803.2722v3"
      locator: "Section 2.4, Lemma 2.17 and its rank-two reflection indexing (printed p. 14; Lemma 2.17 cites Pilkington for its proof); Lemma 2.25 and its complete proof (printed pp. 15-16)"
verification:
  audited: "2026-10-08"
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Statement

Let $(W,S)$ be a Coxeter system of finite type with $S$ finite, canonical reflection representation $\rho$ on $V=\mathbb R^S$, positive definite Coxeter form $B$, root system $\Phi=\Phi_+\sqcup\Phi_-$, and reflection set $T$. For $w\in W$ put

$$N(w):=\{\alpha\in\Phi_+:\rho(w)\alpha\in\Phi_-\}.$$

For each two-dimensional subspace $P\subseteq V$ spanned by roots, put $\Phi_P^+:=\Phi\cap P\cap\Phi_+$ and

$$W_P:=\langle t_\alpha:\alpha\in\Phi\cap P\rangle.$$

By [[lem-cg-finite-dihedral-subsystems-and-canonical-roots]] (1)-(3), $W_P$ is a finite generalized rank-two parabolic subgroup, its reflections are precisely the $t_\alpha$ with $\alpha\in\Phi\cap P$, and its positive roots have angular order $\beta_{u_1},\dots,\beta_{u_m}$ from one extreme ray to the other. Write $m:=|\,\Phi_P^+\,|$. Call $W_P$ **noncommutative** when $m>2$.

A subset of $\Phi_P^+$ is an **initial segment** or a **final segment** when it is $\{\beta_{u_1},\dots,\beta_{u_j}\}$ or $\{\beta_{u_j},\dots,\beta_{u_m}\}$, respectively; the empty and full sets are included. For ordered reflection sequences, an **initial subsequence** is $u_1,\dots,u_j$ and a **final subsequence** is read inward from the other endpoint, $u_m,u_{m-1},\dots,u_{m-j+1}$; the empty subsequence is included.

Let $I\subseteq\Phi_+$ be finite.

**(1) Recognition.** The following are equivalent:

(i) $I=N(w)$ for some $w\in W$;

(ii) for every noncommutative generalized rank-two parabolic subgroup $W_P$, the intersection $I\cap\Phi_P^+$ is empty, an initial segment, or a final segment.

**(2) Reflection sequences.** A sequence of distinct reflections $t_1,\dots,t_k$ is the reflection sequence

$$t_i=r_1\cdots r_{i-1}r_ir_{i-1}\cdots r_1$$

of a reduced word $r_1\cdots r_k$ if and only if, for every generalized rank-two parabolic subgroup $W_P$, the subsequence of the $t_i$ lying in $W_P$ is an initial or final subsequence of $u_1,\dots,u_m$ in the endpoint-inward convention above.

**(3) Rank-two closure and the simple-root step.** If $I$ satisfies (ii), then:

(a) for every generalized rank-two parabolic subgroup $W_P$, both $I\cap\Phi_P^+$ and $(\Phi_+\setminus I)\cap\Phi_P^+$ are closed under positive rank-two combinations: if $\alpha,\beta$ lie in one of these sets and $a,b>0$ with $a\alpha+b\beta\in\Phi_P^+$, then $a\alpha+b\beta$ lies in that set;

(b) if $I$ is nonempty, then $I$ contains a simple root;

(c) if $e_s\in I$, then $s(I\setminus\{e_s\}):=\{\rho(s)\alpha:\alpha\in I\setminus\{e_s\}\}$ again satisfies (ii).

**(4) Bijection.** The map $w\mapsto N(w)$ is a bijection from $W$ onto the family of finite $I\subseteq\Phi_+$ satisfying (ii). The Axiom of Choice (AC) is not used.

## Facts & Assumptions

**Given:** a finite-type Coxeter system $(W,S)$, the standard basis $(e_s)_{s\in S}$ of $V=\mathbb R^S$, its canonical reflection representation $\rho$ with $\rho(W)\Phi=\Phi$, the positive and negative roots, the reflection dictionary, the length function, and the set $N(w)$ defined in the Statement.

[F1] For each root-spanned plane $P$, the subgroup $W_P=\langle t_\alpha:\alpha\in\Phi\cap P\rangle$ is a finite dihedral group with canonical extreme roots $r_1,r_2$; its reflections are $u_1,\dots,u_m$ and its positive roots are $\beta_{u_1},\dots,\beta_{u_m}$ in angular order, spanning a pointed sector ([[lem-cg-finite-dihedral-subsystems-and-canonical-roots]] (1)-(3)).

[F2] Every root is positive or negative, $\Phi_+=\Phi\cap V_+$ and $\Phi_-=\Phi\cap(-V_+)$, and $\rho(s)$ permutes $\Phi_+\setminus\{e_s\}$ for every $s\in S$ ([[thm-cg-root-sign-and-simple-reflection-positivity]] (2),(3)).

[F3] The representation $\rho$ preserves $B$, every root has $B$-norm $1$, and $\rho(s)=r_{e_s}$ with $B(e_s,e_s)=1$ ([[lem-cg-reflection-representation-descends-and-root-norms]] (2)-(4)).

[F4] The map $\Phi_+\to T$, $\alpha\mapsto t_\alpha$, is a bijection, and $t_{\rho(w)\alpha}=w\,t_\alpha\,w^{-1}$ for all $w\in W$ and $\alpha\in\Phi$ ([[thm-cg-root-inversion-formulas-and-strong-exchange]] (1)).

[F5] For every reduced word $w=s_1\cdots s_n$, $N(w^{-1})=\{\rho(s_1\cdots s_{i-1})e_{s_i}:1\le i\le n\}$ with distinct positive roots, and $|N(w)|=|N(w^{-1})|=\ell(w)$ ([[thm-cg-root-inversion-formulas-and-strong-exchange]] (2)).

[F6] For every $v\in W$ and $s\in S$, $\ell(vs)>\ell(v)$ exactly when $\rho(v)e_s\in\Phi_+$, and $\ell(vs)<\ell(v)$ exactly when $\rho(v)e_s\in\Phi_-$ ([[thm-cg-root-length-criterion-and-faithfulness]] (1)).

[F7] The right weak order is a partial order, and $u\le_R v$ exactly when $N(u^{-1})\subseteq N(v^{-1})$ ([[lem-cg-weak-order-is-a-graded-partial-order]] (1),(4)).

[F8] If $u\le_R v$ and $\ell(v)=\ell(u)+1$, then $u\lessdot_R v$ and $v=us$ for some $s\in S$ ([[lem-cg-weak-order-is-a-graded-partial-order]] (2)).

[F9] The reflection with normal $a$ is $r_a(v)=v-\frac{2B(v,a)}{B(a,a)}a$ when $B(a,a)\ne0$ ([[def-cg-real-coxeter-form-and-reflection]] (3)).

[F10] For a finite Coxeter system, $B$ is positive definite ([[thm-cg-finite-type-positive-definite-criterion]] (1)).

## Proof

**Proof technique:** prove closure and reflection stability inside each finite dihedral subsystem, use a minimal-height descent for the simple-root claim, and induct on $|I|$ for recognition. Apply recognition to every prefix of a reflection sequence, then use the weak-order cover criterion to reconstruct a reduced word.

1.1 Rank-two setup. By [F10], the finite-type hypothesis gives positive definiteness of $B$. For every root-spanned plane $P$, [F1] identifies the subgroup generated by its root reflections with a finite dihedral group $W_P$, and identifies its positive roots with the angular list $\beta_{u_1},\dots,\beta_{u_m}$. Since $\Phi_+\to T$ is bijective by [F4], for every positive root $\alpha$ one has $t_\alpha\in W_P$ exactly when $\alpha\in\Phi_P^+$. No choice of a family of points or subsystems is made. [F1, F4, F10, given]

1.2 Global closure of inversion sets. Suppose $\alpha,\beta\in\Phi_+$, $a,b>0$, and $\gamma:=a\alpha+b\beta\in\Phi_+$. If $\alpha,\beta\in N(w)$, then $\rho(w)\alpha,\rho(w)\beta\in\Phi_-\subseteq -V_+$, so $\rho(w)\gamma=a\rho(w)\alpha+b\rho(w)\beta$ is a nonzero vector in $-V_+$; since it is a root, [F2] gives $\rho(w)\gamma\in\Phi_-$ and $\gamma\in N(w)$. If instead $\alpha,\beta\notin N(w)$, their images are positive roots by [F2], so $\rho(w)\gamma$ is a nonzero vector in $V_+$ and the same sign criterion gives $\rho(w)\gamma\in\Phi_+$; hence $\gamma\notin N(w)$. [F2, algebra]

1.3 Reflection stability, clause (3)(c). Let $e_s\in I$ and put $I':=s(I\setminus\{e_s\})$. By [F2], $I'\subseteq\Phi_+$ and is finite. Fix a noncommutative root plane $P$. If $e_s\notin P$ and $P\subseteq e_s^\perp$, then [F9] shows $\rho(s)=r_{e_s}$ fixes $P$ pointwise, so $I'\cap\Phi_P^+=I\cap\Phi_P^+$ is a segment. If $e_s\notin P$ and $P\not\subseteq e_s^\perp$, put $P':=\rho(s)P$. Then $e_s\notin P'$ because $e_s\in P'$ would imply $\rho(s)e_s=-e_s\in P$ and hence $e_s\in P$. The map $\rho(s)$ bijects $\Phi_{P'}^+$ with $\Phi_P^+$ and preserves or reverses their angular order; therefore $I'\cap\Phi_P^+=\rho(s)(I\cap\Phi_{P'}^+)$ is a segment by (ii). If $e_s\in P$, it is an extreme positive root of this subsystem: the simple root $e_s$ spans an extreme ray of $V_+$, while [F1] puts all positive roots of $\Phi_P$ in the sector generated by the two extreme roots of $P$; if $e_s$ were strictly inside that sector, its unique nonnegative simple-root coordinates would force both extreme roots onto the same ray $\mathbb R_{>0}e_s$, impossible. Orient the angular list so $e_s=\beta_1$. The reflection $\rho(s)$ reverses the angular order and permutes the positive roots other than $e_s$, so its order-reversing bijection sends $\beta_j$ to $\beta_{m+2-j}$ for $2\le j\le m$. Since $I\cap\Phi_P^+$ is a segment containing $\beta_1$, it is $\{\beta_1,\dots,\beta_q\}$; deleting $\beta_1$ and reflecting gives the final segment $\{\beta_{m+2-q},\dots,\beta_m\}$, with the empty case when $q=1$. If $e_s=\beta_m$, reverse the angular order and obtain the initial-segment counterpart. Thus $I'$ satisfies (ii). [F1, F2, F3, F9, algebra]

2.1 Rank-two closure, clause (3)(a). Fix $P$ and write $\beta_i:=\beta_{u_i}$. If $m=2$, the subsystem has only its two orthogonal positive root rays; a positive combination of two distinct roots on these rays is not a root in the subsystem, and a root on either ray has unit norm, so closure is immediate. If $m>2$, condition (ii) makes $I\cap\Phi_P^+$ an initial or final segment or empty, and its complement within $\Phi_P^+$ is also a segment of one of these forms. The positive roots lie in a pointed sector of angle less than $\pi$ by step 1.1. If distinct roots $\beta_i,\beta_j$ with $i<j$ are given, every root direction strictly between their rays is a positive combination of them: in angular coordinates $\theta_i<\theta_k<\theta_j$, the unit vector on ray $\theta_k$ equals $\frac{\sin(\theta_j-\theta_k)}{\sin(\theta_j-\theta_i)}\beta_i+\frac{\sin(\theta_k-\theta_i)}{\sin(\theta_j-\theta_i)}\beta_j$, whose coefficients are positive. Thus a positive-root combination that is a root lies between its two distinct input rays, or is the same root when the inputs are proportional. Each initial or final segment contains every listed root between two of its members, so both the segment and its complement are closed as claimed. [F1, F3, given, step 1.1, algebra]

2.2 Inversion sets satisfy the rank-two condition, (1)(i)$\Rightarrow$(ii). Let $I=N(w)$ and fix a noncommutative $W_P$. If $\beta_i,\beta_j\in I\cap\Phi_P^+$ with $i<j$, every intermediate $\beta_k$ is a positive combination of these roots, so lies in $I$ by step 1.2. Thus the intersection is empty or a consecutive block $\{\beta_p,\dots,\beta_q\}$. If $p>1$ and $q<m$, then $\beta_{p-1},\beta_{q+1}\notin I$ and $\beta_p$ is a positive combination of them, contradicting the complement closure of step 1.2. Therefore $p=1$ or $q=m$, which proves (ii). [F1, step 1.2, algebra]

3.1 A nonempty set satisfying (ii) contains a simple root, clause (3)(b). Suppose to the contrary that $I\ne\emptyset$ has no simple root. Choose $\alpha=\sum_{t\in S}a_t e_t\in I$ of minimum height $\operatorname{ht}(\alpha):=\sum_t a_t$, where $a_t\ge0$ are the unique simple-root coordinates. Then $\alpha$ is not simple. Since $1=B(\alpha,\alpha)=\sum_t a_tB(\alpha,e_t)$ by [F3], there is $s$ with $a_s>0$ and $B(\alpha,e_s)>0$. Put $\beta:=\rho(s)\alpha=\alpha-2B(\alpha,e_s)e_s$ by [F9]. By [F2], $\beta\in\Phi_+\setminus\{e_s\}$, and its height is strictly less than that of $\alpha$, so $\beta\notin I$ by minimality; also $e_s\notin I$. The roots $\alpha,e_s$ are distinct and nonproportional, and $P_0:=\operatorname{span}(\alpha,e_s)$ is a root plane. Invariance of $B$ and $\rho(s)e_s=-e_s$ give $B(\beta,e_s)=-B(\alpha,e_s)<0$. Thus the two distinct reflections $t_\beta$ and $s=t_{e_s}$ do not commute: in the positive-definite plane by step 1.1 their normal lines are neither equal nor orthogonal, and distinct orthogonal reflections commute only when their normal lines are perpendicular. Hence $W_{P_0}$ is noncommutative. Since $\alpha=\beta+2B(\alpha,e_s)e_s$ is a positive combination of two roots in the complement of $I$ in $\Phi_{P_0}^+$, clause (3)(a) gives $\alpha\notin I$, a contradiction. Hence $I$ contains a simple root. [F1, F2, F3, F9, F10, step 1.1, step 2.1, algebra, choose]

3.2 Reflection sequences of reduced words, forward direction of (2). Let $r_1\cdots r_k$ be reduced, put $w_j:=r_1\cdots r_j$, and let $t_i$ be its reflection sequence. If $k=0$, the empty sequence is the reflection sequence of the empty reduced word. For $k>0$, [F5] gives the roots of $N(w_j^{-1})$ as the prefix roots; by [F4], the reflection for the root $\rho(r_1\cdots r_{i-1})e_{r_i}$ is $r_1\cdots r_{i-1}r_i r_{i-1}\cdots r_1=t_i$. Fix $W_P$. By (1), each prefix intersection with $\Phi_P^+$ is empty, an initial segment, or a final segment. These intersections are nested and each step adds at most one root. A nested chain of initial/final segments can change sides only at the full set; consequently its added roots are $u_1,u_2,\dots$ from the first endpoint or $u_m,u_{m-1},\dots$ from the other. The reflection subsequence in $W_P$ is therefore initial or final in the stated endpoint-inward convention. [F1, F4, F5, step 2.2]

4.1 Recognition in the reverse direction, base and induction. We prove (ii)$\Rightarrow$(i) by induction on $|I|$. If $I=\emptyset$, then $I=N(1)$. If $I\ne\emptyset$, step 3.1 gives a simple root $e_s\in I$. Define $I':=\rho(s)(I\setminus\{e_s\})$. By step 1.3, $I'$ satisfies (ii), and [F2] shows $\rho(s)$ bijects $\Phi_+\setminus\{e_s\}$ with itself, so $|I'|=|I|-1$. The induction hypothesis supplies $v\in W$ with $N(v)=I'$. [F2, step 1.3, step 3.1, ih, base]

5.1 Reconstructing the element. One has $e_s\notin I'$: if $e_s=\rho(s)\alpha$ for $\alpha\in I\setminus\{e_s\}$, then $\alpha=\rho(s)e_s=-e_s$, impossible for a positive root. Hence $e_s\notin N(v)$, so $\rho(v)e_s\in\Phi_+$ by [F2] and $\ell(vs)>\ell(v)$ by [F6]. For any positive root $\gamma\ne e_s$, $\rho(s)\gamma$ is positive by [F2], and $\gamma\in N(vs)$ exactly when $\rho(v)\rho(s)\gamma\in\Phi_-$, which holds exactly when $\rho(s)\gamma\in N(v)$. Since $e_s\notin N(v)$ and $\rho(s)$ permutes $\Phi_+\setminus\{e_s\}$, this gives $\rho(s)N(v)=N(vs)\setminus\{e_s\}$. Also $\rho(vs)e_s=-\rho(v)e_s\in\Phi_-$, so $e_s\in N(vs)$. Therefore $N(vs)=\{e_s\}\sqcup\rho(s)N(v)=\{e_s\}\sqcup(I\setminus\{e_s\})=I$. This proves (i) and discharges the induction. [F2, F6, step 4.1, algebra, discharge-induction]

6.1 Prefix recognition for a candidate sequence. Conversely suppose distinct reflections $t_1,\dots,t_k$ satisfy the rank-two subsequence condition, and let $\alpha_i\in\Phi_+$ be the unique root with $t_i=t_{\alpha_i}$ by [F4]. For $0\le j\le k$, put $A_j:=\{\alpha_1,\dots,\alpha_j\}$. For every $W_P$, the subsequence in $W_P$ among the first $j$ reflections is a prefix of the full subsequence; by the endpoint-inward convention, it is again initial or final, so $A_j$ satisfies (ii). By (1), each $A_j$ is the inversion set of some $v_j\in W$. These finitely many witnesses can be selected by finite induction on $j$, which is finite choice only and does not use AC. Take $v_0=1$; [F5] gives $\ell(v_j)=|A_j|=j$. [F1, F4, F5, step 4.1, step 5.1, choose]

7.1 Build the reduced word. Since $A_j\subseteq A_{j+1}$, the weak-order criterion [F7] gives $v_j^{-1}\le_R v_{j+1}^{-1}$; their lengths differ by one, so [F8] gives a simple generator $s_{j+1}$ with $v_{j+1}^{-1}=v_j^{-1}s_{j+1}$. Thus $v_k^{-1}=s_1\cdots s_k$ is reduced. By [F5], the reflection sequence of each prefix $s_1\cdots s_j$ corresponds to the roots in $N(v_j)=A_j$, and [F4] identifies those roots' reflections with the prefix reflections. Taking successive set differences shows its $j$th reflection is $t_j$, so the given sequence is the reflection sequence of this reduced word. This proves (2). [F4, F5, F7, F8, step 6.1]

8.1 Bijection and Choice. Surjectivity follows from steps 2.2, 4.1 and 5.1. If $N(u)=N(v)$, then the inversion-set criterion in [F7] gives $u^{-1}\le_R v^{-1}$ and $v^{-1}\le_R u^{-1}$; antisymmetry gives $u=v$. Thus $w\mapsto N(w)$ is injective, and [F5] ensures every $N(w)$ is finite. No Axiom of Choice is used: the inductions are on finite sets or words, and every witness is a single existential instantiation for the fixed object under consideration; the finite sequence of representatives in step 6.1 uses only finite choice, provable by induction, and no arbitrary family of choices is formed. [F5, F7, step 2.2, step 4.1, step 5.1, step 6.1, step 7.1, discharge-induction] ∎
