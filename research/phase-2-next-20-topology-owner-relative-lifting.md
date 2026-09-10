# Owner topology support: relative Hurewicz lifting

Separate research repair for the closed-cofibration clause of
`prop-a-fibration-has-path-lifting-and-homotopy-lifting-relative-to-a-subspace`.
Original author e remains active and owns all item/manifest/contract/coverage
files. No decision, source clearance, scope change or independent review is
made here. This explicit construction uses existing suppliers, with no new pair.

## Exact local interfaces read

Read the complete batch-8 construction note, the exact relative-lifting
manifest, `def-cofibration-and-homotopy-extension-property`,
`prop-cofibrations-are-characterized-by-a-retraction-of-the-mapping-cylinder-strip`,
`lem-pushouts-and-products-preserve-the-cofibrations-used-here`, and
`lem-tube-lemma-for-a-compact-factor` in full. The product-cofibration lemma's
steps 1.2–2.1 construct the following NDR data from the strip retraction:

u:X->I, u^-1(0)=A; h:X×I->X, h(x,0)=x, h(a,s)=a,
and h(x,1) in A whenever u(x)<1.

All products below are CGWH products; products with I have their ordinary
topology by the local conventions. The finite closed union W below has its
subspace/pushout topology. No global choice is needed for this clause: one
existential strip retraction and one HLP lift are used, not a family of them.

## 1. Explicit strong deformation of the cylinder onto its partial domain

Put Y=X×I and W=X×{0} union A×I. For u(x)>0 define

T_s(x,t) = (h(x, s min(t/u(x),1)), t-s min(t,u(x))).

When u(x)=0, set T_s(x,t)=(x,t). These formulas are continuous. Away from
u=0 this follows from continuity of arithmetic, min and h. At (a,t0,s0) with
a in A, every neighbourhood O of a contains h(V×I) for a neighbourhood V
of a, by the compact-time tube lemma and h(a,v)=a for every v. Thus the first
coordinate tends to a uniformly over the bounded parameter s min(t/u,1).
The second coordinate differs from t by at most u(x), which tends to zero.
This proves continuity also across u=0, including t=0. CGWH continuity follows
from the same ordinary cylinder calculation.

T_0=id_Y. It fixes W for every s: at t=0 its first homotopy parameter and
second coordinate are zero, and at a in A the special clause fixes the point.
At s=1, if t<=u(x), the second coordinate is zero. If t>u(x), then u(x)<1
(because t<=1), and the first coordinate is h(x,1) in A. Hence T_1(Y)⊂W.
Let r=T_1:Y->W. It is continuous into W by its subspace topology and r|W=id.
Thus T is an explicit strong deformation retraction; it is more than just
an unverified assertion that W->Y is a homotopy equivalence.

Define w:Y->I by w(x,t)=min(u(x),t). Its zero set is exactly W.

## 2. Reduce the relative lifting problem to one ordinary HLP problem

The following elementary construction is useful for any strong deformation
retract W⊂Y with zero-set function w. Write T_s for its deformation from id
to inclusion∘r, fixed on W. Define K:Y×I->Y by

K(y,v) = T_(1-min(v/w(y),1))(y), if w(y)>0,
K(y,v) = y, if w(y)=0.

At w>0 this is continuous. At y in W all T_s(y)=y, so the same compact-time
tube argument as above proves continuity for every v, including v=0. It has

K(y,0)=r(y),  K(y,w(y))=y,  and K(z,v)=z for z in W.

Here r(y) is regarded as a point of Y. These identities also show directly
that W->Y is a retract, in the category of arrows, of the bottom inclusion
Y->Y×I: the maps towards that inclusion are W->Y (the inclusion) and
Y->Y×I, y|->(y,w(y)); the maps back are r:Y->W and K:Y×I->Y.
Both squares commute, and both composites are the relevant identities.
No general model-category or cofibration-lifting theorem is used.

Now suppose p:E->B is a Hurewicz fibration, f:W->E is the prescribed partial
lift, and g:Y->B is the prescribed base homotopy, with p f=g|W. The initial
map f r:Y->E and base homotopy g K:Y×I->B satisfy p(f r)=g K(-,0).
One ordinary HLP application supplies L:Y×I->E with

L(y,0)=f(r(y)),  p L(y,v)=g(K(y,v)).

Set ell(y)=L(y,w(y)). It is continuous. Since K(y,w(y))=y, p ell=g. If z∈W,
w(z)=0 and r(z)=z, so ell(z)=L(z,0)=f(z). Hence ell extends the ENTIRE given
partial lift exactly. In particular the construction does not assume that a
chosen path-lifting function lifts constant paths constantly; ordinary HLP
suffices.

Applied to Y=X×I and W=X×{0} union A×I, this proves relative homotopy lifting
for every closed cofibration pair (X,A) with the local CGWH convention. Paths
with prescribed initial point follow from HLP with a one-point parameter
space. This closes the substantial general-cofibration gap in the manifest.
The independent Serre/CW cell-extension clause still requires the actual
cell/weak-topology argument in its item; this note does not certify it merely
from the Hurewicz proof.

## Source and reading boundary

A primary-source check opened Barthel–Riehl, *On the construction of functorial
factorizations for model categories* (2012),
https://math.jhu.edu/~eriehl/hmodel.pdf. Read the extracted introduction and
section 2 opening through the warning that closed cofibrations are needed for
the appropriate lifting classes. No full-paper reading is claimed, and none
of its general model-structure theorems is used as an unproved supplier here.
The explicit formulas above derive the required relative lifting directly
from the already read local NDR and compact-time-control arguments.

No requests were made against either exhausted original May/Hatcher PDF URL,
and their existing source histories remain untouched. Before integration,
read the authored Hurewicz/Serre definition when e creates it, add the actually
used compact-time and strip interfaces to the item dependencies/contracts,
and run its explicit checks. Owner scope refresh and current decision remain
root's responsibility after completed authoring.
