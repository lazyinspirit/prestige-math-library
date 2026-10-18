# Explicit normalized AZ realification and finite extension spaces

Isolated mathematical construction. It supplies the finite symmetry-to-Clifford algebra and homogeneous-space calculations below. The final natural comparison of mass **difference objects with their fixed base identification** to the previously proved ABS/KO groups is separately identified at the end; a coefficient table alone does not establish that comparison.

## Exact normalization needed before a tenfold statement

Let W be a finite-dimensional complex Hilbert space, write I for multiplication by i on its underlying real inner-product space, and let H=H*=H^-1 be flattened. Thus I²=-1, I*=−I and IH=HI. For antiunitaries T,C, the real-linear operators are orthogonal and TI=-IT, CI=-IC. Impose THT^-1=H, CHC^-1=-H, T²=t and C²=c, with t,c in{+1,-1}. In the simultaneous case specify the normalized AZ symmetry algebra **TC=CT**. Then the conventional chiral involution can be chosen as TC if tc=1 and iTC if tc=-1; it is unitary, self-adjoint, squares1, and anticommutesH. With chiral symmetry alone, its square1 and self-adjointness must be part of the model. Individual squares and ±H relations without mutual normalization do not by themselves declare a unique tenfold symmetry algebra; extra unitary symmetries must be decomposed or retained as extra model data, not silently discarded.

If an operator S is real orthogonal and S²=epsilon, then S*=S^-1=epsilon S. Thus positive-square generators below are symmetric and negative-square generators skew-symmetric in the same fixed real inner product.

## Particle-hole classes D and C

Use mass M=H (positive square). The fixed generators e1=C and e2=IC satisfy e1²=e2²=c. Indeed (IC)²=I(CI)C=-I²C²=c, and C(IC)+(IC)C=-Ic+Ic=0. Both anticommuteH. The complex structure is recovered as I=c e2e1, so this construction forgets no input complex structure. Conversely two orthogonal anticommuting generators of common square c define that complex structure, and a positive symmetric mass anticommuting with both commutes with I and anticommutes with C=e1. Thus this is an exact correspondence with an extension of the fixed real Clifford algebra having two positive generators if c=1 (D), or two negative generators if c=-1 (C), by one positive mass.

## Time-reversal classes AI and AII

Use mass M=IH (negative square). The fixed generators e1=T and e2=IT have squares t,t and anticommute each other. Since T anticommutesI and commutesH, T(IH)=−(IH)T; the same holds for IT. Recover I=t e2e1 and H=−IM. Conversely these formulas turn an orthogonal negative mass anticommuting with the two fixed generators into a self-adjoint involution commutingI andT. Thus AI is extension from two positive generators by a negative one, and AII from two negative generators by a negative one.

## Both antiunitaries

Use mass M=H. Set e1=C,e2=IC,e3=ITC. Since I commutesTC, e3²=−tc. Also e3 C=Itc while C e3=−Itc, and because e3 commutesI it also anticommutesIC. Each anticommutesH. The three fixed squares are therefore (c,c,-tc).

Conversely, from such e1,e2,e3 and a positive anticommuting mass, set C=e1, I=c e2e1, T=−c I e3 C. Then I²=-1, CI=-IC, TI=-IT, C²=c, T²=t and TC=CT. For example T² follows by moving the second I across e3C and then using e3C e3C=−e3²c; the result is t. The mass commutesI, anticommutesC ande3, and hence commutesT. Thus the relation algebra is recovered exactly. The fixed signatures (number positive,number negative) are:

BDI(t=+,c=+):(2,1); DIII(-,+):(3,0); CII(-,-):(0,3); CI(+,-):(1,2).

## Sign conversion and index, proved on generators

Write Cl_(a,b) with a positive and b negative squares. In Cl_(2,0)=M2(R), take r=diag(1,-1), s=[[0,1],[1,0]], and J=rs=[[0,1],[-1,0]]. Then r²=s²=1, J²=-1 and J anticommutesr,s. For any old orthogonal Clifford generator x in Cl_(a,b), assign a sign-reversed generator to x⊗J and two new positive generators to1⊗r,1⊗s. The anticommutation relations hold term by term. The images generate the target because1⊗J is present and invertible and recovers x⊗1. PBW equal dimensions give

Cl_(b+2,a) ≅ Cl_(a,b)⊗M2(R).

This map takes a negative added mass to a positive mass. Fixed signatures(a,b) therefore give effective positive-extension index q=b+2-a for a negative mass, and q=a-b for a positive mass. Cancelling a positive/negative fixed pair uses Cl_(a+1,b+1)=Cl_(a,b)⊗M2(R), with the equally explicit r,s mixed-sign model already required by PA04. Matrix-module Morita evaluation preserves continuous families, base-module identifications and block-sum stabilization, because E_11 extracts the multiplicity space and matrix units reconstruct it; no rank or topological information is thrown away.

Hence the eight ordered indices are AI0,BDI1,D2,DIII3,AII4,CII5,C6,CI7. With d fixed additional negative Dirac generators anticommuting with all symmetries and mass, the effective index decreases by d, giving q-d. This is the finite mass problem. It is not the ordinary suspension of parameter-space maps into R_q, whose index shifts in the other direction.

For A, no fixed complex Clifford generator is imposed and the positive Hermitian mass gives complex index0. For AIII, the fixed complex chiral involution anticommutes with the mass and gives index1. Complex Clifford twofold matrix periodicity is proved by the same Pauli-generator maps over C.

## Finite positive-extension homogeneous spaces

After real Morita/sign normalization, fix q positive symmetric Clifford generators and ask for one more positive symmetric anticommuting mass. Use fixed orthonormal bases of the simple algebra multiplicity spaces. Orthogonal changes commuting with the fixed algebra act on the space of masses. The following are actual orbit/stabilizer calculations, not a quoted classification table.

q0: diagonalize the symmetric involution. Its positive and negative eigenspaces are orthogonal complements, so at real dimensions(k,m) the orbit is O(k+m)/(O(k)×O(m)). The stabilizer consists exactly of independent orthogonal maps of those eigenspaces.

q1: the fixed involution splits W=W+⊕W-. A mass is an off-diagonal isometry W+→W-, so existence requires equal dimensionn and, relative to a fixed reference isometry, the space is O(n).

q2: normalize the first two involutions to Pauli r,s on R²⊗R^N by the matrix-unit Morita argument. An operator anticommuting with both is J⊗A. Symmetry and square1 are exactly A*=-A and A²=-1. Thus A is an orthogonal complex structure. Choose a unit vectorv and the pair(v,Av), then continue on their orthogonal complement to obtain an adapted orthonormal basis. The orbit is O(2n), with stabilizer the complex-linear orthogonal groupU(n), giving O(2n)/U(n).

q3: the third fixed generator selects one such complex structure A0 on its multiplicity space. A further mass requires an orthogonal complex structure A1 anticommutingA0. Regarding A0 as i, A1 is antiunitary with square-1. Repeatedly choose a complex unit vectorv; v andA1v are complex-orthogonal because skew-adjointness forces their inner product to be its own negative. Their span is a quaternionic line and its perpendicular is invariant. This gives one orbit of quaternionic structures underU(2n), whose stabilizer isSp(n), giving U(2n)/Sp(n).

q4: the fixed algebra is M2(H). Its volume involution omega4 anticommutes with every odd generator. A mass is omega4 times an operator on the quaternionic multiplicity space commuting with the fixed algebra, and its symmetric/square1 requirements are a quaternionic Hermitian involution. Orthogonal positive/negative quaternionic eigenspaces give Sp(k+m)/(Sp(k)×Sp(m)).

q5: the fixed fifth generator splits the quaternionic multiplicity space into positive/negative eigenspaces. A further mass interchanges them by a quaternionic isometry, hence its space isSp(n).

q6: after normalizing the fifth/sixth involutions as the Pauli pair on the quaternionic multiplicity space, another mass is J⊗A for a quaternionic-linear orthogonal complex structureA. Regard the space as a complex space using right multiplication by i. The +i and-i eigenspaces ofA have equal complex dimension, since right multiplication byj interchanges them. Choose a complex orthonormal basis of the+i eigenspace; its j-multiples give the-i basis. This is a quaternionic orthonormal basis adapted toA. The conjugating group isSp(n) and the stabilizerU(n), so the orbit isSp(n)/U(n).

q7: the fixed seventh generator selects that A. A further complex structureB anticommutesA. On A's+i eigenspace, composition B with right multiplication byj is an antiunitary involution: B²=-1, R_j²=-1 and they commute. Such an involution is a real structure. Its fixed real subspace has an orthonormal real basis: write z=(z+Kz)/2+i(z-Kz)/(2i), whose two terms have fixed real coefficients, and apply real Gram–Schmidt. Thus real structures form oneU(n)-orbit with stabilizerO(n), giving U(n)/O(n).

The exceptional small multiplicities are handled by the displayed parity/equal-rank existence conditions and stabilization by a fixed admissible reference extension. The q0/q4 stabilized difference groups record real/quaternionic negative-rank differences in Z. For q1 the determinant distinguishes two components ofO(n); for q2 the two components ofO(2n) survive quotient by connectedU(n). For q3,q5,q6,q7 the acting groupsU orSp are connected (plane-rotation or quaternionic-frame induction), hence the quotient is connected. This proves the finite stable component list Z,Z/2,Z/2,0,Z,0,0,0. It does not derive a KO interpretation merely by matching group names.

## Remaining exact comparison obligation

To identify these finite extension DIFFERENCE classes with KO^(-q)(pt) naturally and compatibly with dimension cancellation, retain the fixed base-representation identification w and construct the iterated semicircle/clutching map. It must send the q1 determinant-reflection loop to the Möbius line, q2 to the real complex-Hopf generator, q4 to the quaternionic Hopf generator, and the eightfold matrix stabilization to the earlier actual beta. The family/Hopf and ABS constructions provide the required exact proof route, but that comparison must actually be written; one cannot send a single mass merely to its abstract graded module and forget w. For example q1 masses ±off-diagonal identity are isomorphic as abstract graded modules while their paths with fixed base generators have different relative determinant class. This warns against an invalid shortcut.

Actual source read: retained Kitaev2009 full-text finite classification-principles and symmetries/Clifford sections, Tables1–2 and equations14–23. The source treats four physical symmetry combinations in detail and announces the tenfold relation; it does not prove the normalized T,C dictionary above for all ten classes. The explicit real-linear calculations here supply that algebraic content under the stated normalized mutual relation. No arbitrary-disorder or interacting classification is claimed.
