# Closed N=2 evaluation comparison: bounded diagnostic only

No mathematical item, metadata, contract, or consumer has been edited. This is a research receipt, not an accepted supplier. All calculations below concern closed embedded foams whose only facets have labels 1 and 2, whose bindings are disjoint circles, and which have no singular vertices. Extension to an arbitrary RW representative after removing zero facets is NOT proved here.

## Actual sources

Robert–Wagner, https://arxiv.org/pdf/1702.04140, v3 (20 April2018),51pp, SHA25668b7a56958257fdf75f6769d6ca97a7dec3cb5295a7622e7d9a4981c823d0bd0. Actual read: pp3–4,6–11,14; first p1 and final p51 verified. Formula p11 visually inspected. The paper uses LEFT-hand cyclic order at embedded bindings (p7). Its N=2 relation to Blanchet is discussed p14, but that remark is not an explicit proof of identical normalizations.

BHPW published final, §2.5 printed1322–1323, §2.2 printed1315–1318. Formula1322 visually inspected. This uses RIGHT-hand cyclic order, and calls the blue facet succeeding the red facet positive. Blue counit epsilon(X)=+1; red counit=-1; conjugation Xbar=h-X.

ETW arXiv1703.06691v2 pp11–12 explicitly uses RW evaluation and defines closed-web modules by universal pairing, followed by morphism quotient and bending. This is the actual universal-construction route. Its Example2.26(p15) identifies the N=2 distinct-root deformation with Blanchet, but does not compute the normalization under discussion.

MWW arXiv1907.12194 pp6–8: RW/ETW foams; Example2.1 has positive one-dot blue sphere and ordinary neck-cutting. Equation2.3 is warned to differ from KR by quantum shift magnitude(N-1)w, and KR from ETW by mirror. This convention information must be included in any later bridge.

## Finite localization calculation

Work over K=Q(x1,x2), with d=x1-x2, h=x1+x2 and t=-x1*x2. BHPW blue algebra has primitive idempotents e1=(X-x2)/d and e2=(x1-X)/d. Their trace weights are beta1=1/d and beta2=-1/d. Conjugation swaps them. A connected oriented blue facet of genus g with b outgoing seam circles contributes beta_i^(1-g-b) e_i^tensor(b); this follows directly by inserting eta=sum e_i, using Delta(e_i)=beta_i^-1 e_i tensor e_i and H(e_i)=beta_i^-1 e_i. The same formula covers b=0 by applying epsilon, giving beta_i^(1-g). Dots contribute x_i. A red facet contributes (-1)^(1-g-b).

At each binding the BHPW contraction is epsilon(e_i conjugate(e_j)); it is zero unless i!=j, and equals beta_i when i is the color of the positive blue facet. Thus nonzero terms are exactly RW colorings: red facets have both pigments and the two blue facets at each binding have different pigments.

Write B_i for the disjoint union of blue facets with pigment i, R for all red facets, M for the number of circular bindings, and t_i for the number of bindings where the BHPW-positive blue facet has pigment i. Then t1+t2=M. Every binding contributes one boundary circle to each B_i and one to R. Consequently the BHPW exponent of d is
  sum_blue(chi(f)-b(f))/2 + M = chi(B)/2,
and its sign exponent is
  (chi(B_2)-M)/2 + t2 + (chi(R)-M)/2
  = chi(F_2)/2 - M + t2
  = chi(F_2)/2 + t1 (mod2).
Here F_i=B_i glued to R along seam circles, so chi(F_i)=chi(B_i)+chi(R).

RW Def2.12 gives the same numerator P and denominator d^(chi(B)/2), with sign
  chi(F_1)/2 + chi(F_2) + theta_plus
  = chi(F_1)/2 + theta_plus (mod2).
The LEFT/RIGHT cyclic-order change is essential. BHPW RIGHT order is(red,positive,negative), so RW LEFT order is(red,negative,positive). The RW positive order(color1,color2,red) therefore occurs precisely when the BHPW-positive blue facet has color2. Hence theta_plus=t2. The difference of the two sign exponents is
  (chi(F_1)+chi(F_2))/2 + t1+t2
  = chi(B)/2 + chi(R)+M
  = chi(B)/2 (mod2),
because an orientable red facet satisfies chi(f)=b(f)(mod2).

For this stated vertex-free class the calculation therefore gives
  RW(F)=(-1)^(chi(B)/2) Z_BHPW(F).
The identity is rational over K; both evaluations are polynomials in the elementary symmetric functions, so injectivity into K makes the identity polynomial, and it can subsequently specialize to h=t=0. Arbitrary red decorations can be treated as scalar symmetric polynomials; the BHPW red algebra has no additional dot variable.

## Elementary checks and candidate correction

A one-dot blue sphere has RW value(-x1+x2)/d=-1, but BHPW value+1. A red sphere has RW sign(-1)^(1+2)=-1, agreeing with BHPW. An undotted blue torus has value2 in both. These checks rule out literal equality of raw conventions.

For a cobordism between closed webs with a incoming and b outgoing underlying blue circles, the candidate normalization
  kappa(S)=(chi(S_b)+a-b)/2
is integral since chi(S_b)=a+b(mod2), and additive under vertical composition and disjoint union. It is zero for cylinders, and equals chi(S_b)/2 for closed foams. The twist S -> (-1)^kappa(S) S therefore reconciles these CLOSED evaluations on the restricted class. On plain blue generators it preserves cup and merge, negates cap and split, and leaves dots unchanged. This describes the precise correction suggested by the formula; it does not establish that MWW made this correction, nor identify its chosen Reidemeister maps.

## Remaining obligations

1. Prove that every relevant RW/ETW N=2 foam can be represented in the above vertex-free class, compatibly with identities/composition, or extend the finite calculation to the actual singular/zero-facet models. RW Remark2.13 says evaluation is unchanged by zero-facet removal, but that alone does not prove the needed geometric identification after removal.
2. Use perfect BHPW cup-basis pairing plus equality of all closures to identify the closed-web universal modules and their foam actions. This should avoid rechecking every open local relation, but has not been authored as a source proof.
3. Identify MWW's actual sign normalization (its Example2.1 is not raw RW with the same dots), then match crossing complexes with the indicated mirror, quantum and writhe changes. No conclusion about equality of chosen movie maps follows from evaluation matching alone.
4. Relate resulting projective movie maps to parent's fixed ordinary maps. Existing local simplicity can plausibly control signs, but it is not consumed or checked here.
5. Only after these steps transport the MWW sweep equality. No sweep, y=0 lift, or native acceptance is claimed by this receipt.


## Additional test requested by parent

At h=t=0, raw RW blue Frobenius data have epsilon_RW(X)=-1, Delta_RW(1)=-1 tensor X-X tensor1, Delta_RW(X)=-X tensor X. The map phi(1)=1, phi(X_RW)=-X_B is a unital algebra isomorphism preserving counit. On1, (phi tensor phi)Delta_RW(1)=1 tensor X+X tensor1=Delta_B phi(1); onX_RW both sides equal -X tensor X. Thus it is a Frobenius isomorphism, not just an identification of groups.

For the restricted closed foam class above, degree is -chi(B)+2D at h=t=0 (circular bindings have no interval contribution; label2facets have weight0). All evaluations are integer scalars of degree0, so a homogeneous foam can be nonzero only if D=chi(B)/2. Replacing each RW dot by its negative multiplies the evaluation by(-1)^D; this cancels the already calculated factor(-1)^(chi(B)/2). Hence, at this specialization the restricted CLOSED evaluation agrees with BHPW after globally negating blue dots. If degree is nonzero, both scalar evaluations vanish, so equality holds there too. Red positive-degree decorations vanish on specialization. This is a concrete restricted formula match, not yet a comparison of all universal modules or MWW movie maps.

MWW pp6–8 contains no explicit statement found in this bounded read of a dot/sign renormalization relative to raw RW; it refers to ETW Section2 for the definition. Its positive dotted sphere therefore remains an exact normalization discrepancy to resolve. No inference that MWW already uses phi is made.
