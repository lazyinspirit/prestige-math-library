---
id: lem-a-nonzero-pi-class-on-a-torus-has-a-primitive-embedded-pi-root
kind: lemma
title: A nonzero pi class on a torus has a primitive embedded pi root
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps:
- lem-finite-c2-surface-carriers-have-smooth-normal-forms-and-relative-cap-approximations
- def-countable-choice-principle-for-foliation-pair
- lem-a-no-transversal-leaf-is-a-torus-via-the-finite-accessibility-boundary-sum
- lem-finite-chart-surface-normal-forms-supply-jordan-disks-and-torsion-free-groups
- lem-fixed-transverse-fences-have-a-finite-crossing-word
- lem-limitwise-nullhomotopy-predicate-descends-to-a-normal-subgroup
- def-holonomy-representation-and-holonomy-group-of-a-leaf
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
dependency_level: 13
verification:
  precheck: pass
sources:
  scraped: []
  references:
  - title: S. P. Novikov, The Topology of Foliations (complete English translation)
    url: https://homepage.mi-ras.ru/~snovikov/23.pdf
    locator: §7, Lemmas 7.5-7.6, printed pp. 22-24 (primitive root and embedded annulus); finite adapters supplied
      locally
---

## Statement

On the original compact torus leaf, a nonzero Π^j class has a primitive embedded representative with the same Π^j property; its sufficiently short fixed-flow fence is an embedded annulus and each positive boundary bounds an actual embedded disk in its leaf.

## Facts & Assumptions

**Given:** A nonzero limitwise-nullhomotopy class $\alpha$ on the chosen side of the original compact torus leaf $L$ of the present foliation, represented by a fixed-flow fence, and the short fixed-flow fence loops of a representative.

[F1] The in-pair item [[lem-a-no-transversal-leaf-is-a-torus-via-the-finite-accessibility-boundary-sum]] identifies the no-transversal leaf $L$ as a torus, and the sibling-pair item `lem-finite-chart-surface-normal-forms-supply-jordan-disks-and-torsion-free-groups` supplies the torus normal form identifying $\pi_1(L)=\mathbb Z^2$, the torsion-freeness of surface groups and the surface-Jordan disk in the leaf; the sibling-pair item `lem-fixed-transverse-fences-have-a-finite-crossing-word` supplies the finite crossing word and the fixed-flow fence data.

[F2] The limitwise-nullhomotopy predicate defines a well-defined normal subgroup $\Pi^j$ of the based fundamental group. A nonzero class is a nonidentity element of this subgroup, hence an essential loop in the ordinary leaf fundamental group; the class $\alpha$ and its powers are well defined on the chosen side ([[lem-limitwise-nullhomotopy-predicate-descends-to-a-normal-subgroup]]).

[F3] The holonomy of a leaf is represented on germs of transverse sections by increasing maps defined near the origin, and an increasing map has no nontrivial finite orbit ([[def-holonomy-representation-and-holonomy-group-of-a-leaf]]).

[F4] The standing assumption is Countable Choice $\mathrm{AC}_\omega$ as recorded for this pair ([[def-countable-choice-principle-for-foliation-pair]]).

[F5] An oriented compact $C^2$ surface homeomorphic to the torus admits a $C^2$ diffeomorphism to the standard smooth torus by a finite smooth-carrier and disk-band construction ([[lem-finite-c2-surface-carriers-have-smooth-normal-forms-and-relative-cap-approximations]]).

## Proof

**Proof technique:** direct.

1.1 Choose a $C^2$ diffeomorphism of $L$ with the standard torus by [F5], and use its induced identification $\pi_1(L)=\mathbb Z^2$. Write the nonzero class as $\alpha=m\beta$ with $m\ge1$ and $\beta=(p,q)$ primitive, $\gcd(|p|,|q|)=1$. The smooth straight loop $t\mapsto t(p,q)$ modulo $\mathbb Z^2$ is embedded: if two parameter values in $[0,1)$ had the same projection, their difference times $(p,q)$ would be integral, and Bezout's identity would make that difference integral, hence zero. Transfer this loop through the inverse $C^2$ diffeomorphism to obtain an actual embedded regular $C^2$ loop $g$ on $L$. A path to the basepoint supplies the based primitive class. The given $\alpha$ class equals $m\beta$, so a compact based homotopy and fixed-flow fence transport in [F1] identify the original $\alpha$-fence loops with the $m$-fold loops of the $g$-fence. No smoothness of a topological cell map is used. [F1, F5, given, construct]

2.1 Let $h$ be the increasing one-sided holonomy of $g$. Since $\alpha$ has identity one-sided holonomy (its loops are null on the chosen side by the $\Pi$ property), $h^m(t)=t$ for every sufficiently small positive $t$. An increasing map has no nontrivial finite orbit: if $h(t)>t$ its successive iterates strictly increase and if $h(t)<t$ they strictly decrease, so $h(t)=t$ and the short displaced loops $g_t$ close. Their $m$-fold loops are null by the transported compact homotopy and the $\Pi$ property of $\alpha$; oriented surface fundamental groups are torsion-free, so $[g_t]^m=1$ implies $[g_t]=1$. Hence $\beta$ is a genuine nonzero embedded $\Pi$ cycle on the same original leaf and the chosen side. [F1, F3, step 1.1]

3.1 Use the one fixed transverse flow to construct the fence $F(u,t)=\Phi_{\tau(u,t)}g(u)$ with $\tau_t>0$. Short compact-leafwise separation for the compact loop $g(S^1)$ gives injectivity of the full annulus: if $F(u,t)=F(v,s)$, flow uniqueness gives $\Phi_{\tau(u,t)-\tau(v,s)}g(u)=g(v)$, so the separation forces equality of the times and of $g(u),g(v)$; embeddedness of $g$ gives $u=v$ and strict positivity of $\tau_t$ gives $t=s$. Compact-to-Hausdorff then makes the fence an embedding, every $g_t$ is an embedded null curve in its actual leaf, and the surface-Jordan disk lemma of [F1] applied in the leaf, rather than only in its universal cover, gives an actual embedded disk bounded by $g_t$; the spherical-leaf alternative is excluded by the in-pair spherical stability item, ensuring the selected disk is unique. This supplies the embedded Reeb construction input, not a deduction of ambient cap embedding from universal-cover caps, and only finitely many fences and homotopies are used, hence only the standing countable choice from [F4]. [F1, F2, F4, step 2.1] ∎
