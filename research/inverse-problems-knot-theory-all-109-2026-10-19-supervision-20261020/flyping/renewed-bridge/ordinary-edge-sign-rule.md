# Literal ordinary-edge half-tube sign rule

Renewed development, `/root/flyping_bridge`, 2026-10-20. This computes the edge germ needed in deriving the new typeIII table. It does not identify the named global endpoints by inspection of a picture.

Orient the coordinate s along an ordinary diagram edge so that its adjacent B region lies to the right viewed from the upper reference ball. Let h increase rightward in the projection plane and let z increase upward. Thus (s,h,z) has negative ambient orientation. In a small edge tube use

$$
(h,z)=r(\cos\theta,\sin\theta).
$$

The B section is theta=0, the W section theta=pi, and the upper semicircle is 0<theta<pi. The orientation of the tube torus induced as boundary of the solid tube is ds wedge dtheta: at theta=0 the frame (outward radial, s, theta)=(h,s,z) is positively oriented. Orient both spanning-surface boundary sections in increasing s. A local F section theta=phi(s) and the B section then have signed intersection

$$
i(\partial F,\partial B)=-\operatorname{sign}\phi'(s).
$$

The same formula holds for W. This orientation is consistent with the source convention i(partial F,partial F')=s(F)-s(F') on PDF5: in these coordinates the positive meridian about the s-oriented core has decreasing theta, so increasing phi gives negative slope. The formula is invariant when the local link orientation is reversed, because both boundary curves reverse together. Consequently:

| Endpoint type | As s increases through the endpoint |
| --- | --- |
| B+ | F passes from the upper semicircle to the lower semicircle |
| B- | F passes from the lower semicircle to the upper semicircle |
| W+ | F passes from the lower semicircle to the upper semicircle |
| W- | F passes from the upper semicircle to the lower semicircle |

For example, a positive W crossing followed along increasing s through an upper section is followed by a B+ endpoint of that upper section, provided no other relevant section endpoint intervenes. This is an explicit determinant and semicircle calculation, not a choice of a desired drawing. It uses the ordinary edge chart only; crossing-ball collar charts must transport this chart's actual B/W sections and orientation.

To turn this rule into the proposed typeIII table, the input must identify each signed endpoint with its named physical channel end and state whether increasing s points toward the inner or outer prism wall there. A bare pair of signs (B+,B-) without this incidence identification is insufficient. In particular, one must not silently identify the source's unlabelled delta endpoints with the two active book ends. The full lower common-band chain and all its wall subdivisions remain part of that incidence identification.

Source extent for this calculation: the typeIII endpoint convention and table in Kindred v2 PDF31–32 were read directly, together with PDF29–30 for the setup and PDF5–8 for its intersection and checkerboard labeling conventions. No accepted repository supplier was reread or recertified.
