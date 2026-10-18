---
id: lem-real-clifford-block-rotation-index-lower-bound
kind: lemma
title: "Real Clifford block-rotation index bounds"
status: draft
origin: session
deps: ["def-axiom-of-choice", "lem-clifford-centrioles-and-geodesic-tangent-condition", "thm-real-complex-clifford-algebra-classification", "thm-second-variation-formula-for-energy", "prop-killing-fields-restrict-to-jacobi-fields-along-geodesics"]
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Eschenburg–Hanke, Bott–Thom isomorphism, Hopf bundles and Morse theory (2021), expanded local argument"
      url: "https://arxiv.org/pdf/2011.14368v3"
---

## Statement

Assume AC. Let $\gamma$ be a nonminimizing endpoint-fixed geodesic from $J_l$ to $-J_l$ in a Clifford centriole $P_l$, with the normalized trace metric. Let $s_j$ be the real dimension of an irreducible negative-square Clifford module. If $l\not\equiv2\pmod4$, then $\operatorname{ind}\gamma\ge p/s_{l+1}-1$. If $l=4m-2$, let $w$ be determinant winding under $J\mapsto JJ_l^{-1}$ into $\mathrm U(p/2)$. For $d>0$, the inequality $p-4|w|\ge4d s_l$ implies $\operatorname{ind}\gamma>d$. The first estimate is non-strict; its use for connectivity requires additional strict slack.

## Facts & Assumptions

[A1] The Axiom of Choice is assumed; it implies the countable-choice assumptions in the differential-geometric suppliers. No stronger choice principle is introduced. ([[def-axiom-of-choice]]).

[F1] The tangent conditions and totally geodesic trace-metric embedding hold; ambient parallel translation is $\exp(-t\operatorname{ad}_X/2)$ and its curvature operator is $-\operatorname{ad}_X^2/4$. ([[lem-clifford-centrioles-and-geodesic-tangent-condition]]).

[F2] The negative-square real Clifford classification determines the irreducible dimensions; there is one irreducible type except at indices congruent to $3$ modulo $4$. ([[thm-real-complex-clifford-algebra-classification]]).

[F3] The fixed-endpoint energy Hessian is twice the index form, and Killing variations are Jacobi fields. ([[thm-second-variation-formula-for-energy]], [[prop-killing-fields-restrict-to-jacobi-fields-along-geodesics]]).

## Proof

**Given:** The data and hypotheses in the Statement.

1.1 Write $\gamma(t)=\exp(\pi tA)J_l$. By [F1], $A$ commutes with $J_i$ for $i<l$ and anticommutes with $J_l$. Split $\mathbb R^p$ orthogonally into minimal subspaces $M_h$ invariant under these operators. The symmetric operator $-A^2$ commutes with the family; hence on a minimal block it is $k_h^2I$. The endpoint equation $\exp(\pi A)=-I$ makes $k_h$ an odd positive integer. On that block $J'=A/k_h$ is a complex structure and $J_lJ'$ extends the Clifford family. The extended module is irreducible, since any proper invariant subspace would be invariant under $A$ and the original family. If all $k_h=1$, the geodesic has length $\pi$ and is minimal; otherwise some $k_h\ge3$. [F1, F2, algebra]

2.1 Suppose $l\not\equiv2\pmod4$. The unique irreducible $C_{l+1}$ type is equivalent to its last-generator sign reversal. Thus a pair $M_j,M_h$ may be isometrically identified preserving the first $l$ generators and reversing the extra generator. Orthogonalize an intertwiner $T$ by $T(T^*T)^{-1/2}$, which still intertwines. On the pair the generator becomes $\operatorname{diag}(k_jJ',-k_hJ')$. Put $B=\left(\begin{smallmatrix}0&-I\\ I&0\end{smallmatrix}\right)$ there and zero elsewhere. It commutes with the original family, so conjugation by $\exp(uB)$ gives endpoint-fixed geodesics in $P_l$. [F1, F2, step 1.1, construct]

3.1 The Jacobi field of this variation is $[B,\gamma(t)]$. Put $b=(k_j+k_h)/2$. Substituting the two diagonal exponentials and transporting back by $\exp(-t\operatorname{ad}_{\pi A}/2)$ gives $2\sin(\pi bt)$ times a fixed nonzero off-diagonal matrix, up to a constant sign. Thus the field is $\sin(\pi bt)V_{jh}(t)$ for a nonzero parallel tangent field. Its curvature eigenvalue is $(\pi b)^2$, consistent with the ambient factor $1/4$. It is tangent intrinsically because it arises from the variation in step 2.1, and total geodesy preserves its tangent parallel translation. [F1, F3, step 2.1, algebra]

4.1 For $a=1,\ldots,b-1$ set $W_{jh,a}(t)=\sin(\pi at)V_{jh}(t)$. These fields vanish at both endpoints and satisfy $I(W_{jh,a},W_{jh,a})=((\pi a)^2-(\pi b)^2)|V_{jh}|^2/2<0$. Sine orthogonality makes different modes orthogonal for $I$. Different unordered block pairs have disjoint off-diagonal support, preserved by parallel translation and curvature; hence their derivative and curvature pairings are zero in the trace metric. Their full span is therefore negative definite, not merely linearly independent. Fix one nonminimal block $h$. Each other block gives $b\ge2$ and at least one negative direction. There are $r-1$ such blocks, with $r=p/s_{l+1}$, proving the weak bound. [F1, F3, step 1.1, step 3.1, algebra]

5.1 For the initial group stage $l=0$, split the skew generator into orthogonal real two-planes. On a pair of planes, the two commuting quaternionic $S^3$ factors of $\mathrm{SO}(4)$ have speeds $(k_j+k_h)/2$ and $(k_j-k_h)/2$ in units of $\pi$. A nonminimal plane paired with any other plane has a factor of absolute speed at least two. Its two perpendicular sine fields yield at least two negative directions. Their pair supports are orthogonal as in step 4.1, giving index at least $p-2$, and therefore at least $p/s_1-1$. The factorization can be checked directly by left and right multiplication by unit quaternions on $\mathbb H$; the tangent vectors with equal and opposite planar angles give its two orthogonal factors. [F1, F3, step 4.1, construct]

6.1 Now let $l=4m-2$ and put $i=J_1\cdots J_{l-1}$. Then $i^2=-I$; it commutes with $A$ and its predecessors and anticommutes with $J_l$. The complex eigenspaces of $A$ relative to $i$ are invariant under the whole family, because $J_l$ reverses both $A$ and $i$. Minimality gives $A=k_hi$ on each block, now with signed odd $k_h$, and the blocks are irreducible $C_l$ modules of size $s_l$. On two identified blocks $A=\operatorname{diag}(k_ji,k_hi)$. The same rotation computation gives $b=|k_j-k_h|/2$, and hence $b-1$ independent negative sine fields when $b\ge2$. Therefore
$$\operatorname{ind}\gamma\ge\sum_{k_j>k_h}\left(\frac{k_j-k_h}{2}-1\right).$$
All terms are nonnegative integers. [F1, F2, step 3.1, step 4.1, algebra]

7.1 The map $J\mapsto JJ_l^{-1}$ is complex linear relative to $i$. The determinant of the endpoint $-I$ equals one since $p$ is divisible by four, so its path determinant is a loop. The winding formula is $w=(s_l/4)\sum_h k_h$. Let $k_+$ be the sum of the positive $k_h$ and $k_-$ minus the sum of the negative ones. Then $k_++k_-\ge p/s_l$ and $k_+-k_-=4w/s_l$. The stated inequality implies $k_+,k_-\ge2d$. If some $k_j\ge3$, its pair contributions against the negative blocks sum to at least $(N_-+k_-)/2>d$, where $N_-\ge1$ is their number. If some $k_h\le-3$, reverse signs and use the positive blocks. Otherwise all entries are $\pm1$, making the path minimal. This proves the winding estimate with strictness exactly as stated. [step 1.1, step 6.1, algebra] ∎

## Integration note

The Clifford classification carrier was read, but its separate native-batch readiness is not asserted. This proof uses its exact algebraic interface and never replaces the weak bound by the stricter printed assertion in EH Proposition 5.4.
