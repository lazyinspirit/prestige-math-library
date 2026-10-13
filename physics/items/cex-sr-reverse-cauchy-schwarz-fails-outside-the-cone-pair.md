---
id: cex-sr-reverse-cauchy-schwarz-fails-outside-the-cone-pair
kind: counterexample
title: "Counterexample: the reversed Cauchy-Schwarz inequality fails outside same-orientation timelike pairs"
status: published
origin: pipeline
domain: mathematics
proof_strategy: direct
deps: [lem-sr-reverse-cauchy-schwarz-for-future-timelike-vectors, def-inertial-frame-and-inertial-chart, def-causal-classification-of-lorentz-vectors, def-time-orientation-and-future-causal-sets, lem-timelike-cone-has-two-convex-components, def-lorentz-form-and-inertia, thm-of-square-roots, lem-of-square-monotone, def-ordered-field]
dependency_roles:
  lem-sr-reverse-cauchy-schwarz-for-future-timelike-vectors: mathematical-premise
  def-inertial-frame-and-inertial-chart: mathematical-premise
  def-causal-classification-of-lorentz-vectors: mathematical-premise
  def-time-orientation-and-future-causal-sets: mathematical-premise
  lem-timelike-cone-has-two-convex-components: mathematical-premise
  def-lorentz-form-and-inertia: mathematical-premise
  thm-of-square-roots: mathematical-premise
  lem-of-square-monotone: mathematical-premise
  def-ordered-field: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
verification:
  precheck: pass
sources:
  references:
    - title: "B. Crowell, Special Relativity, revision 2020-12-10 (author-published undergraduate textbook): section 1.5 'Triangle and Cauchy-Schwarz inequalities' pp. 36-37 (two timelike vectors and the reversed Cauchy-Schwarz inequality, the note on future-directedness, and the spacelike cases); signature (+---) converted to (-+++) and c = 1 formulas converted to x^0 = c t"
      url: "https://archive.org/download/sr_20220102/sr.pdf"
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Chapter 1 pp. 2-7 (causal classification of vectors)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "H. S. Reall, Mathematical Tripos Part III General Relativity (Cambridge, October 12, 2022 revision), sections 2.1-2.2 pp. 25-28 (the light cone and its two causal sets); Internet Archive copy of the original https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
dependency_level: 7
aliases: []
---

## Statement refuted

The following universal claim is false. Let $(A,V,\eta,C^+)$ be the oriented
time-oriented affine Minkowski space.

**(U1)** The reversed Cauchy-Schwarz inequality
$-\eta(v,w)\ge\sqrt{-\eta(v,v)}\,\sqrt{-\eta(w,w)}$ holds for every pair of
vectors $v,w\in V$ that are individually timelike, regardless of their time
orientations.

**(U2)** The analogous reversed form
$|\eta(v,w)|\ge\sqrt{\eta(v,v)}\,\sqrt{\eta(w,w)}$ holds for every pair of
spacelike vectors $v,w\in V$.

First witness, refuting (U1): in the inertial chart with diagonal metric
$\operatorname{diag}(-1,1,1,1)$ take $v:=(5,3,0,0)$, which is future timelike,
and $w:=(-5,3,0,0)$, which is past timelike. Then $\eta(v,w)=34>0$, so
$-\eta(v,w)=-34$, while
$\sqrt{-\eta(v,v)}\,\sqrt{-\eta(w,w)}=4\cdot4=16$, and the asserted inequality
$-34\ge16$ is false; the sum $v+w=(0,6,0,0)$ is spacelike. Second witness,
refuting (U2): $v:=(0,1,0,0)$ and $w:=(0,1,1,0)$ are spacelike with
$\eta(v,v)=1$, $\eta(w,w)=2$, $\eta(v,w)=1$, so
$|\eta(v,w)|=1<1\cdot\sqrt2=\sqrt{\eta(v,v)}\,\sqrt{\eta(w,w)}$. Hence the
same-orientation hypothesis of
[[lem-sr-reverse-cauchy-schwarz-for-future-timelike-vectors]] cannot be dropped,
and the spacelike reversed inequality is not universal.

## Facts & Assumptions

**Given:** The oriented time-oriented affine Minkowski space $(A,V,\eta,C^+)$ and an inertial frame $(o;e_0,e_1,e_2,e_3)$ with chart $x$ and coordinates $(u^0,u^1,u^2,u^3)$ of a vector $u=u^0e_0+u^1e_1+u^2e_2+u^3e_3$ ([[def-inertial-frame-and-inertial-chart]]).

[L1] Coordinates and pairing: in the frame's ordered basis $\eta(e_a,e_b)=\operatorname{diag}(-1,1,1,1)_{ab}$, and by bilinearity $\eta(u,u')=-u^0u'^0+u^1u'^1+u^2u'^2+u^3u'^3$ for all $u,u'\in V$ ([[def-inertial-frame-and-inertial-chart]], [[def-lorentz-form-and-inertia]]).

[L2] Cone coordinates: $T_+=\{u:u^0>|u_s|\}$ and $T_-=\{u:u^0<-|u_s|\}$ are exactly the two components of the timelike set, and in a frame with $e_0\in C^+$ one has $C^+=T_+$, $C^-=T_-$; hence $u$ is future timelike exactly when $u^0>|u_s|$ and past timelike exactly when $u^0<-|u_s|$, where $|u_s|=\sqrt{(u^1)^2+(u^2)^2+(u^3)^2}$ ([[lem-timelike-cone-has-two-convex-components]], [[def-time-orientation-and-future-causal-sets]]).

[L3] Causal classification: $u$ is timelike when $\eta(u,u)<0$, spacelike when $\eta(u,u)>0$ ([[def-causal-classification-of-lorentz-vectors]]).

[L4] The reversed Cauchy-Schwarz inequality and its equality case: for future timelike $v,w$ with $a:=\sqrt{-\eta(v,v)}$, $b:=\sqrt{-\eta(w,w)}$ one has $-\eta(v,w)\ge ab$, with equality exactly for positive proportional pairs; the same inequality holds for past timelike pairs ([[lem-sr-reverse-cauchy-schwarz-for-future-timelike-vectors]]).

[L5] Square roots and monotonicity of squaring: every real $c\ge0$ has a unique $\sqrt c\ge0$ with $(\sqrt c)^2=c$, in particular $\sqrt1=1$; for $x,y\ge0$ one has $x<y\iff x^2<y^2$ ([[thm-of-square-roots]], [[lem-of-square-monotone]]).

[L6] Order of $\mathbb{R}$: the order is transitive, so $x<y<z$ implies $x<z$ ([[def-ordered-field]]).

## Counterexample

**Proof technique:** direct.

1.1 In the given inertial frame evaluate the four vectors of the two witnesses: $\eta(v,v)=-25+9=-16<0$ and $\eta(w,w)=-25+9=-16<0$ for $v=(5,3,0,0)$ and $w=(-5,3,0,0)$; and $\eta(v,w)=25+9=34$ for this pair; for the second pair $v'=(0,1,0,0)$, $w'=(0,1,1,0)$ one has $\eta(v',v')=1>0$, $\eta(w',w')=1+1=2>0$ and $\eta(v',w')=1$. [given, L1, algebra]

2.1 Both $v$ and $w$ are timelike by [L3]; since $v^0=5>3=|v_s|$ and $w^0=-5<-3=-|w_s|$, [L2] identifies $v$ as future timelike and $w$ as past timelike, so the pair $(v,w)$ is individually timelike with opposite time orientations. [step 1.1, L2, L3]

2.2 For the second pair, [L3] makes $v'$ and $w'$ spacelike, and $\sqrt{\eta(v',v')}\,\sqrt{\eta(w',w')}=\sqrt1\cdot\sqrt2=1\cdot\sqrt2=\sqrt2$ by [L5]; since $1<2$ and $1,\sqrt2\ge0$, strict monotonicity of squaring gives $\sqrt2>1$; hence $|\eta(v',w')|=1<\sqrt2=\sqrt{\eta(v',v')}\,\sqrt{\eta(w',w')}$, so (U2) is refuted. [step 1.1, L3, L5, algebra]

2.3 The span of the second pair is $\{(0,s,t,0):s,t\in\mathbb{R}\}$, on which $\eta((0,s,t,0),(0,s,t,0))=s^2+t^2$ vanishes only for $s=t=0$: the subspace spanned by the two spacelike witnesses contains no null direction, so the failure of (U2) is not an artifact of a null direction in the span. [step 1.1, L1, algebra]

3.1 The sum $v+w=(0,6,0,0)$ has $\eta(v+w,v+w)=36>0$, so it is spacelike by [L3]. This is an additional property of this witness, not a criterion for failure of (U1): the pairing in (U1) and the causal character of the sum are distinct claims. Closure of the future timelike cone under addition does not apply here because $w$ is past timelike. [step 1.1, step 2.1, L1, L2, L3, algebra]

3.2 For this pair $\sqrt{-\eta(v,v)}=\sqrt{16}=4=\sqrt{-\eta(w,w)}$, so the right-hand side of (U1) is $16$, while the left-hand side is $-\eta(v,w)=-34<0$; since $0<16$, transitivity gives $-34<16$, so $-34\ge16$ is false and (U1) is refuted. [step 1.1, step 2.1, L5, L6, algebra]

4.1 The two witnesses therefore refute the claimed universality: the reversed Cauchy-Schwarz inequality requires the same (future) time orientation of the pair, and the spacelike reversed form fails even on a spacelike plane with no null direction; neither witness contradicts the positive results [L4], which are stated for same-orientation timelike pairs. [step 3.1, step 2.2, step 2.3, step 3.2, L4] ∎
