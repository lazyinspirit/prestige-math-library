---
id: rem-hopf-algebra-structure-on-the-enveloping-algebra
kind: remark
title: Hopf-algebra structure on U(g)
status: published
origin: pipeline
pipeline_run: phase-2-next-21
deps: [thm-universal-property-of-the-universal-enveloping-algebra, thm-tensor-product-of-algebras-over-a-commutative-ring]
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: "Etingof, MIT 18.745 notes, §12.3, printed pp. 71–72"
      url: https://ocw.mit.edu/courses/18-745-lie-groups-and-lie-algebras-i-fall-2020/mit18_745_f20_lec_full.pdf
---

## Remark

The assignments on $x\in\mathfrak g$

$$\Delta(x)=\iota_{\mathfrak g}(x)\otimes1+1\otimes\iota_{\mathfrak g}(x),\qquad \varepsilon(x)=0,\qquad S(x)=-\iota_{\mathfrak g}(x)$$

extend to the standard cocommutative Hopf-algebra structure on
$U(\mathfrak g)$. The first two assignments are Lie maps into the commutator
algebras of $U(\mathfrak g)\otimes U(\mathfrak g)$ and $k$, so enveloping
universality extends them to algebra maps. Interpreting the last assignment as
a Lie map into $U(\mathfrak g)^{\mathrm{op}}$ extends it to an algebra map into
the opposite algebra, equivalently an anti-algebra map $S$.

Coassociativity, cocommutativity, and the counit identities follow because the
corresponding algebra maps agree on every generator. For the antipode, write
$\Delta(a)=\sum a_{(1)}\otimes a_{(2)}$. Both convolution identities hold on
$1$ and on every generator, since multiplying
$-x\otimes1+1\otimes x$ gives zero. If they hold for $a$ and $b$, then

$$\sum S(a_{(1)}b_{(1)})a_{(2)}b_{(2)}=\sum S(b_{(1)})S(a_{(1)})a_{(2)}b_{(2)}=\varepsilon(a)\varepsilon(b)1,$$

and similarly

$$\sum a_{(1)}b_{(1)}S(a_{(2)}b_{(2)})=\sum a_{(1)}b_{(1)}S(b_{(2)})S(a_{(2)})=\varepsilon(a)\varepsilon(b)1.$$

Induction on word length and linearity therefore prove both antipode
identities on all of $U(\mathfrak g)$.

This remark is non-load-bearing: no later item on this page depends on these
Hopf formulas.
