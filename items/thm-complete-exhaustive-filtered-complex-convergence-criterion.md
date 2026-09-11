---
id: thm-complete-exhaustive-filtered-complex-convergence-criterion
kind: theorem
title: Complete exhaustive filtered complex convergence criterion
status: draft
origin: pipeline
pipeline_run: phase-2-next-20
deps: ["def-weak-convergence-of-a-spectral-sequence", "def-strong-convergence-of-a-spectral-sequence", "def-lim-one-obstruction-to-completeness", "lem-countable-tower-completion-obstruction-exact-sequence", "def-filtered-chain-complex", "def-axiom-of-choice", "lem-boardman-approximate-cycle-obstruction-sequence", "lem-countable-tower-six-term-limit-sequence", "def-r-page-of-the-spectral-sequence-of-a-filtered-complex", "def-r-cycles-and-r-boundaries-of-an-increasingly-filtered-complex", "lem-the-filtered-differential-induces-d-r-on-the-r-page", "thm-the-next-page-is-the-homology-of-the-current-page", "def-limiting-cycles-boundaries-and-e-infinity", "def-induced-filtration-on-homology"]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: "Weibel, An Introduction to Homological Algebra, Chapter 5"
      url: "https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf"
    - title: "The Stacks Project, Homological Algebra"
      url: "https://stacks.math.columbia.edu/download/homology.pdf"
---

## Statement

Assume AC. Let $(C,d,F)$ be an increasing filtered complex of modules over a fixed ring, exhaustive and complete in every degree:
$$\bigcup_pF_pC_n=C_n,\qquad C_n\xrightarrow{\sim}\varprojlim_{m\ge0}C_n/F_{-m}C_n.$$
Suppose that at every bidegree $(p,q)$ all outgoing differentials $d^r_{p,q}$ vanish for sufficiently large $r$, with a bound depending on $(p,q)$. Then its spectral sequence converges weakly to actual homology with the induced image filtration and actual-cycle identifications.

If additionally it is bounded above on each total-degree diagonal, then convergence is strong: the homology filtration is exhaustive, separated and complete, and incoming differentials also eventually vanish at each bidegree. Precisely, the sufficient diagonal condition used here is that for every integer $k$ there are finite integers $a_k\ge0$ and $P_k$ such that $E^{a_k}_{s,k-s}=0$ for all $s>P_k$. In particular the condition holds if a single fixed starting page is bounded above on each diagonal. Completeness without outgoing regularity is not asserted to suffice.

## Facts & Assumptions

[F1] [[lem-boardman-approximate-cycle-obstruction-sequence]] supplies, in each chain degree, the exact sequence for $A(p,t)$, $Z_p$, $S(p,t)$, $Q_p=R_tA(p,t)$, together with $L_pQ_p=0$ and $R_pZ_p=0$, under AC.

[F2] [[lem-countable-tower-six-term-limit-sequence]] supplies the six-term sequence, cofinal-tail invariance, and surjectivity of limit projections for towers with surjective transitions, under AC.

[F3] [[def-r-page-of-the-spectral-sequence-of-a-filtered-complex]] and [[def-r-cycles-and-r-boundaries-of-an-increasingly-filtered-complex]] give $A^r_{p,n}=F_pC_n\cap d^{-1}F_{p-r}C_{n-1}$, $E^r=A^r/(A^{r-1}_{p-1}+dA^{r-1}_{p+r-1})$ for $r\ge1$, and its projected model $\bar Z^r/\bar B^r$ in $E^0$.

[F4] [[lem-the-filtered-differential-induces-d-r-on-the-r-page]] gives $d^r[x]=[dx]$; [[thm-the-next-page-is-the-homology-of-the-current-page]] identifies each next page with the homology of this differential.

[F5] [[def-limiting-cycles-boundaries-and-e-infinity]] defines $E^\infty=(\bigcap_r\bar Z^r)/(\bigcup_r\bar B^r)$ for modules. [[def-induced-filtration-on-homology]] defines $F_pH_n$ by images of actual filtered cycles.

[F6] [[lem-countable-tower-completion-obstruction-exact-sequence]] identifies the kernel and cokernel of homology completion with the intersection and Delta cokernel of its subgroup tower, under AC.

[F7] [[def-weak-convergence-of-a-spectral-sequence]] requires the actual-cycle graded identifications. [[def-strong-convergence-of-a-spectral-sequence]] additionally requires two-sided regularity and exhaustive, separated, complete target filtration.

[F8] [[def-axiom-of-choice]] is assumed for the cited tower lemmas, simultaneous approximate primitives and recursive compatible lifts. No splitting of the homology filtration is selected.

## Proof

**Given:** The complete exhaustive [[def-filtered-chain-complex|filtered complex]] in the statement. In each degree use the notation of [F1] and put $B_n=d(C_{n+1})$. All towers tend toward minus infinity with fixed finite upper endpoints; [F2] identifies different endpoints.

1.1 Fix $n,p$ and $r\ge1$. In the projected model, $S(p,p-r)=\bar Z^r_{p,n-p}$. We claim the outgoing kernel in $E^r$ is $S(p,p-r-1)/\bar B^r$. Indeed if $d^r[x]=0$, [F3]–[F4] give $dx=a+db$ with $a\in A^{r-1}_{p-r-1,n-1}$ and $b\in A^{r-1}_{p-1,n}$. Then $x-b\in A^{r+1}_{p,n}$ and has the same image as $x$ modulo $F_{p-1}C_n$. Conversely an $(r+1)$-cycle has differential in $F_{p-r-1}$, hence in the first summand of the target denominator because its next differential is zero; it is therefore killed by $d^r$. Every projected boundary is represented by an actual differential and lies in every later projected cycle group. The claimed kernel follows in both directions. [F3, F4]

1.2 For the second clause only, assume the additional diagonal hypothesis in this step and fix $n$. Take $a\ge1$ and $P$ such that $E^a_{s,n+1-s}=0$ for $s>P$; increasing $a_{n+1}$ to $1$ if necessary preserves vanishing by [F4]. There is a uniform primitive bound: if $t\le P-a$ and $b\in F_tC_n\cap d(C_{n+1})$, then $b=dy$ for some $y\in F_PC_{n+1}$. Start with any primitive in some $F_s$ by exhaustiveness. If $s>P$, then $dy=b\in F_t\subseteq F_{s-a}$, so $y\in A^a_{s,n+1}$. Since the corresponding $E^a$ is zero, [F3] writes $y=z+dw$ with $z\in A^{a-1}_{s-1,n+1}\subseteq F_{s-1}C_{n+1}$. Replacing $y$ by $z$ preserves its differential. Repeat this finite process $s-P$ times to obtain the bound. If initially $s\le P$, no reduction is needed. No infinite family of primitive choices is involved in this finite descent. [F3, F4]

1.3 For each $n$ the sequence of subgroup towers
$$0\to B_n\cap F_{-m}C_n\to Z_{-m}\to F_{-m}H_n(C)\to0$$
is exact: boundaries are cycles and the last map is onto by the image-filtration definition. The right end of [F2] and $R_mZ_{-m}=0$ from [F1] imply $R_mF_{-m}H_n(C)=0$. Thus [F6] makes the canonical completion map on homology onto. This surjectivity in fact used only the first-clause hypotheses. [F1, F2, F5, F6, F8]

2.1 By step 1.1, outgoing $d^r=0$ exactly when $S(p,p-r)=S(p,p-r-1)$: these nested groups have the same quotient by the common subgroup $\bar B^r$ precisely when they are equal. Thus outgoing regularity makes the inclusion tower $S(p,t)$ eventually constant. Its $R_t$ is zero by [F2]. The sequence of [F1] then makes every $Q_{p-1}\to Q_p$ surjective. By [F2], $L_pQ_p$ projects onto every term of this tower, whereas [F1] makes that limit zero. Hence $Q_p=0$ for every $p$, in every chain degree. The same exact sequence now identifies $Z_p/Z_{p-1}$ with $S(p,\infty)$ by the actual-cycle map. [F1, F2, F8, step 1.1]

3.1 Exhaustiveness identifies $\bigcup_r\bar B^r$ with the image of $F_pC_n\cap d(C_{n+1})$ in $F_pC_n/F_{p-1}C_n$. For if $b=dy\in F_pC_n$, put $y\in F_sC_{n+1}$ by exhaustiveness and choose $r\ge1$ with $p+r-1\ge s$. Then $y\in A^{r-1}_{p+r-1,n+1}$ because its differential lies in $F_p$, so $b$ is a page boundary. The converse holds since every such representative is a differential. Combining [F5] with step 2.1 gives
$$E^\infty_{p,n-p}\cong Z_p/\bigl(Z_{p-1}+(F_pC_n\cap d(C_{n+1}))\bigr).$$
The right quotient is $F_pH_n/F_{p-1}H_n$: a cycle $z\in Z_p$ has class in the previous image exactly when $z=z'+b$ for a cycle $z'\in Z_{p-1}$ and an actual boundary $b$, necessarily in $F_pC_n$. Thus the map is onto and has exactly the displayed kernel. It sends an actual cycle to its own homology class, proving weak convergence as defined in [F7]. All maps commute with filtered chain maps because they are inclusions and quotient maps. [F3, F5, F7, step 2.1]

3.2 For any fixed $P$, the submodule $d(F_PC_{n+1})$ is closed in $C_n$. Explicitly suppose $x\in\bigcap_t(d(F_PC_{n+1})+F_tC_n)$. Choose $y_t\in F_PC_{n+1}$ with $x-dy_t\in F_tC_n$ for countably many cofinal $t$, using [F8]. Their classes modulo $A(P,t)$, now formed in degree $n+1$, are compatible: for $t'\le t$, $d(y_{t'}-y_t)\in F_tC_n$. Apply [F2] to $0\to A(P,t)\to F_PC_{n+1}\to F_PC_{n+1}/A(P,t)\to0$ with constant middle tower. Its $R_tA(P,t)=Q_P$ is zero by step 2.1, so one $y\in F_PC_{n+1}$ realizes all the classes. Then $x-dy$ lies in every $F_tC_n$ and vanishes by completeness's injectivity. This proves the asserted closedness. [F1, F2, F8, step 2.1]

4.1 Under the additional diagonal hypothesis, the full boundary submodule $B_n=d(C_{n+1})$ is closed. Suppose $x\in\bigcap_t(B_n+F_tC_n)$. Fix $t_0\le P-a$ and $b_0\in B_n$ with $x-b_0\in F_{t_0}$. For every $t\le t_0$ there is $b_t\in B_n$ with $x-b_t\in F_t$. Then $b_t-b_0\in B_n\cap F_{t_0}$, so step 1.2 puts it in $d(F_PC_{n+1})$. Hence $x-b_0$ lies in the closure of this fixed-bound image and belongs to it by step 3.2. Thus $x\in B_n$. This argument does not assume that $x$ or the individual approximating boundaries already have small filtration. [step 3.2, step 1.2]

5.1 Under the second-clause hypotheses the homology filtration is separated. If a class lies in every $F_tH_n$, represent it by a cycle $z$. For every $t$ it has a representative $z_t\in F_tC_n$ with $z-z_t\in B_n$. Hence $z\in\bigcap_t(B_n+F_tC_n)=B_n$ by step 4.1, so the class is zero. Exhaustiveness follows by putting any single cycle in some $F_pC_n$. The completion map is injective by this separatedness and [F6], and is surjective by step 1.3, hence is an isomorphism. [F5, F6, step 4.1, step 1.3]

6.1 At $(p,n-p)$ the incoming differential on page $r$ has source of degree $n+1$ and filtration $p+r$. For $r\ge a$ and $p+r>P$, that source is zero because it is a successive subquotient of the zero $E^a_{p+r,n+1-p-r}$ term by [F4]. Thus incoming differentials vanish eventually at every fixed bidegree. Together with outgoing regularity this gives two-sided stationarity. Step 3.1 supplies the actual-cycle comparison and step 5.1 supplies the exhaustive, separated and complete homology filtration. These are exactly all requirements of strong convergence in [F7]. [F4, F7, step 3.1, step 1.2, step 5.1]

7.1 The two clauses follow from steps 3.1 and 6.1. Zero complexes and zero modules satisfy the residue, quotient and primitive calculations; repeated filtration pieces cause no exception. For a one-piece finite filtration, the arguments reduce to the ordinary homology page, with zero sufficiently small filtration and constant completion tail. There is no first-quadrant or nonnegative-degree assumption. The endpoint $a=0$ is handled by its replacement with $1$ in step 1.2, and $s=P$ needs no descent. Countable tower sections and simultaneous representatives use AC through [F1], [F2], [F6] and step 3.2; no assertion is made without that assumption. Weak convergence alone has not been used to assert separatedness. [F1, F2, F6, F8, step 3.1, step 3.2, step 1.2, step 6.1] ∎

## Source notes

Weibel, Chapter 5, Corollary 5.5.8, Proposition 5.5.9 and Theorem 5.5.10, printed pp.138–140, motivate the two clauses. The actual proof here uses the fully supplied elementary Delta lemmas and bounded primitive descent, developed in the owner research argument `research/phase-2-next-20-topology-owner-delta-alternatives.md`, sections 1,4–6. No later Grothendieck theorem, Milnor sequence or unproved Mittag–Leffler implication is consumed. Earlier incomplete source extraction is not retrospectively certified. The Step 3 escalation was resolved by the owner repair recorded on 2026-09-10 (research/phase-2-next-20-step3b-owner-thm-complete-exhaustive-filtered-complex-convergence-criterion.json); this authored proof is the reviewed object.
