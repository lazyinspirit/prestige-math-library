---
id: ex-the-pure-three-strand-group-as-a-split-free-by-cyclic-extension
kind: example
title: "PB_3 as F_2 by Z, with its section action"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps: [lem-path-conjugation-isomorphism-of-fundamental-groups,
       prop-higher-homotopy-basepoint-transport-and-moving-homotopies,
       cor-the-pure-braid-extension-splits,
       def-standard-pure-braid-generators,
       lem-standard-pure-braids-generate-each-free-kernel,
       lem-geometric-three-strand-braid-relation,
       def-axiom-of-choice,
       thm-choice-implies-dependent-implies-countable-choice,
       ex-the-pure-two-strand-braid-group-is-infinite-cyclic,
       lem-the-planar-forgetful-map-has-a-continuous-section,
       def-elementary-geometric-half-twist,
       thm-geometric-braids-form-a-group,
       prop-the-artin-presentation-surjects-onto-geometric-braids,
       cor-pure-geometric-braids-are-the-fundamental-group-of-ordered-configurations,
       thm-splitting-lemma-for-group-extensions,
       thm-pure-braid-forgetting-a-strand-short-exact-sequence,
       lem-interior-and-closed-disk-configuration-spaces-are-homotopy-equivalent]
justified_by: []
aliases: []
landmark: false
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Juan Gonzalez-Meneses, Basic results on braid groups, section 2.1, printed pp. 11-14 (the split pure braid tower and the explicit cross-section)"
      url: "https://arxiv.org/pdf/1010.0321"
    - title: "Joan S. Birman and Tara E. Brendle, Braids: A Survey, section 1.3, author manuscript pp. 5-7 (the free kernel and the splitting of the pure braid sequence)"
      url: "https://www.math.columbia.edu/~jb/Handbook-21.pdf"
---

## Example

Assume the Axiom of Choice and let, with the standard pure braid generators
of [[def-standard-pure-braid-generators]] for $n=3$,

$$a:=A_{12},\qquad b:=A_{13},\qquad c:=A_{23}\in PB_3 .$$

Then $\langle b,c\rangle$ is the kernel of the forgetting homomorphism
$\varphi:PB_3\to PB_2$, it is free on $b,c$, and $PB_2=\langle a\rangle$ is
infinite cyclic. With the far-right section of
[[lem-the-planar-forgetful-map-has-a-continuous-section]] — adjusted at the
basepoint along a path in the fibre, so that on a small representative of $a$
it fixes the third point — the extension splits and

$$PB_3\cong\langle b,c\rangle\rtimes\langle a\rangle\cong F_2\rtimes\mathbb Z .$$

Writing $w:=bc$, the action of the positive generator $a$ on the free kernel
is

$$x\longmapsto w^{-1}xw\qquad(x\in F_2),$$

for this section and the first-under-second convention. This does not assert a
direct-product decomposition.

## Facts & Assumptions

**Given:** the Axiom of Choice, the canonical base configuration $Q=(q_1,q_2,q_3)$ of [[def-elementary-geometric-half-twist]], so that $h=\frac{1}{16}$, $q_1=-\frac18$, $q_2=0$ and $q_3=\frac18$; the half twists $\sigma_1,\sigma_2$ and the geometric braid group $G_3$ of [[thm-geometric-braids-form-a-group]]; the open and closed ordered configuration spaces $F_3(\operatorname{int}D^2)\subseteq F_3(D^2)$ and $F_2(\operatorname{int}D^2)\subseteq F_2(D^2)$ at the base configurations $Q$ and $Q':=(q_1,q_2)$; the pure braid groups $PB_3$, $PB_2$ and the forgetting homomorphism $\varphi:PB_3\to PB_2$ of [[thm-pure-braid-forgetting-a-strand-short-exact-sequence]].

[A1] The Axiom of Choice holds ([[def-axiom-of-choice]]).

[F1] In ZF, AC implies DC ([[thm-choice-implies-dependent-implies-countable-choice]]).

[F2] The standard generators are $A_{ij}=[W_{ij}]$ with $W_{ij}=\sigma_{j-1}\cdots\sigma_{i+1}\sigma_i^2\sigma_{i+1}^{-1}\cdots\sigma_{j-1}^{-1}$ under first-under-second stacking, and the same letters denote their images under the isomorphism $\Psi$ in $PB_n$; for $n=3$ this gives $A_{12}=[\sigma_1^2]$, $A_{13}=[\sigma_2\sigma_1^2\sigma_2^{-1}]$ and $A_{23}=[\sigma_2^2]$ ([[def-standard-pure-braid-generators]]).

[F3] The geometric three strand relation holds: $[\sigma_1][\sigma_2][\sigma_1]=[\sigma_2][\sigma_1][\sigma_2]$ in $G_3$ ([[lem-geometric-three-strand-braid-relation]]).

[F4] $G_3$ is a group with product induced by stacking, $[\gamma][\beta]=[\gamma\star\beta]$, and the classes $[\sigma_1],[\sigma_2]$ generate $G_3$; the endpoint permutation $\pi_{\mathrm{geo}}:G_3\to S_3$ is a homomorphism with $\pi_{\mathrm{geo}}([\sigma_i])$ the transposition of $i$ and $i+1$, and $G_3^{\mathrm{pure}}=\ker\pi_{\mathrm{geo}}$ ([[thm-geometric-braids-form-a-group]], [[prop-the-artin-presentation-surjects-onto-geometric-braids]], [[def-elementary-geometric-half-twist]]).

[F5] The map $\Psi:G_n^{\mathrm{pure}}\to PB_n$, $\Psi([\beta])=(\iota^F_*[z_\beta])^{-1}$, is a group isomorphism, where $z_\beta$ is the coordinate path of $\beta$ and $\iota^F_*$ is the open-to-closed isomorphism on fundamental groups of configuration spaces ([[cor-pure-geometric-braids-are-the-fundamental-group-of-ordered-configurations]], [[lem-interior-and-closed-disk-configuration-spaces-are-homotopy-equivalent]]).

[F6] Under AC the sequence $1\to F_2\xrightarrow{\kappa}PB_3\xrightarrow{\varphi}PB_2\to1$ is short exact with $\operatorname{im}\kappa=\ker\varphi$, and under the identification of $\kappa$ the elements $A_{13},A_{23}$ are a free basis of $\ker\varphi$, each represented by the clockwise meridian of the corresponding puncture ([[thm-pure-braid-forgetting-a-strand-short-exact-sequence]], [[lem-standard-pure-braids-generate-each-free-kernel]]).

[F7] At the canonical two-point configuration $Q^{(2)}=(-1/12,1/12)$, $PB_2$ is infinite cyclic generated by $A_{12}^{(2)}$ ([[ex-the-pure-two-strand-braid-group-is-infinite-cyclic]]). Here the quotient is instead $PB_2=\pi_1(F_2(D^2),Q')$, with $Q'=(-1/8,0)$. The path $\eta(r)=((1+r/3)q_1+r/12,(1+r/3)q_2+r/12)$ runs from $Q'$ to $Q^{(2)}$. Basepoint transport gives an isomorphism $\tau:\pi_1(F_2(D^2),Q^{(2)})\to\pi_1(F_2(D^2),Q')$, $\tau([\ell])=[\eta*\ell*\bar\eta]$ ([[lem-path-conjugation-isomorphism-of-fundamental-groups]], [[prop-higher-homotopy-basepoint-transport-and-moving-homotopies]]). Write $a':=\tau(A_{12}^{(2)})$ for the quotient generator; occurrences of $a$ in the cyclic quotient factor of the Example mean $a'$. Step 1.3 checks that forgetting sends $a\in PB_3$ to $a'$, using the actual coordinate-forgetting map of [[thm-pure-braid-forgetting-a-strand-short-exact-sequence]].

[F8] The extension of [F6] splits: there is a homomorphic section $s:PB_2\to PB_3$ of $\varphi$, and then $PB_3\cong F_2\rtimes PB_2$ compatibly with $\kappa$ and $\varphi$, the action of $h\in PB_2$ on the free kernel being $h\cdot x=s(h)xs(h)^{-1}$; the section is the based version of the far-right explicit section, and for a section the action depends on that section ([[cor-the-pure-braid-extension-splits]], [[thm-splitting-lemma-for-group-extensions]]).

[F9] The far-right section of the planar forgetful map is $s(z_1,\dots,z_{n-1})=(z_1,\dots,z_{n-1},1+|z_1|+\dots+|z_{n-1}|)$ for $F_n(\mathbb C)\to F_{n-1}(\mathbb C)$, transported to the disc by the radial homeomorphism $h(w)=w/(1+|w|)$ with inverse $h^{-1}(z)=z/(1-|z|)$; fixing a base configuration $q$ and a path $\alpha$ in the fibre from $q$ to $s'(q')$, the formula $\sigma([\beta])=[(\alpha*(s'\circ\beta))*\bar\alpha]$ defines a homomorphism $\sigma:\pi_1(F_{n-1}(\operatorname{int}D^2),q')\to \pi_1(F_n(\operatorname{int}D^2),q)$ with $\widetilde p_*\circ\sigma=\operatorname{id}$, and the section $s$ of [F8] is $\iota^F_*\circ\sigma\circ(\iota^F_*)^{-1}$ ([[lem-the-planar-forgetful-map-has-a-continuous-section]]).

[F10] For $i=1,2$ the support disc of $\sigma_i$ is $U_i=B(m_i,\frac32h)$ with $m_1=-\frac{1}{16}$ and $m_2=\frac{1}{16}$; the two strands of the braid $\sigma_1^2$ stay in $U_1$ at every time, and $U_1\subseteq B(0,\frac52h)=B(0,\frac{5}{32})$, while $q_3=\frac18\notin U_1\cup\{q_1,q_2\}$ and the real interval $[\frac18,\frac{37}{64}]$ is disjoint from $U_1\cup\{q_1,q_2\}$ ([[def-elementary-geometric-half-twist]]).

## Verification

**Proof technique:** direct.

1.1 **Choice bookkeeping and the standing identifications.** By [F1] the Axiom of Choice [A1] yields DC, so the short exact sequence and the splitting of [F6] and [F8] are available. Throughout, $a,b,c$ denote the elements of $PB_3$ named in the statement, that is $a=\Psi([\sigma_1^2])$, $b=\Psi([\sigma_2\sigma_1^2\sigma_2^{-1}])$ and $c=\Psi([\sigma_2^2])$, The quotient generator is $a'=\tau(A_{12}^{(2)})$ of [F7]; only the letter $a$ is reused for that cyclic factor, and $b,c$ remain kernel elements in $PB_3$. [A1, F1, F2, F6, F8]

1.2 **The product $abc$ is central.** Put $s:=[\sigma_1]$ and $t:=[\sigma_2]$ in $G_3$. By [F2] the geometric classes of the three words are $s^2$, $ts^2t^{-1}$ and $t^2$, so in the group $G_3$ of [F4] the bracketing is immaterial and $$s^2\cdot ts^2t^{-1}\cdot t^2=s^2ts^2t=s(sts)st=s(tst)st=(st)^3 ,$$ where the middle step uses the relation $tst=sts$ of [F3]; put $\Delta:=sts$. The same relation gives $\Delta=tst$, hence $\Delta s=t\Delta$ and $\Delta t=s\Delta$, and therefore $$\Delta^2s=\Delta(t\Delta)=(\Delta t)\Delta=(s\Delta)\Delta=s\Delta^2,\qquad \Delta^2t=\Delta(s\Delta)=(\Delta s)\Delta=(t\Delta)\Delta=t\Delta^2 .$$ So $\Delta^2$ commutes with $s$ and $t$; since $s$ and $t$ generate $G_3$ by [F4], $\Delta^2$ is central in $G_3$. Also $\pi_{\mathrm{geo}}(\Delta^2)=\pi_{\mathrm{geo}}(st)^3=\mathrm{id}$ because $\pi_{\mathrm{geo}}(st)$ is a product of the two distinct transpositions $(1\,2)$ and $(2\,3)$, a three-cycle whose cube is the identity; hence $\Delta^2\in G_3^{\mathrm{pure}}$ and $z:=\Psi([\Delta^2])$ is defined. By [F5] the map $\Psi$ is a homomorphism, so with the identification of [F2] $$abc=\Psi([\sigma_1^2])\Psi([\sigma_2\sigma_1^2\sigma_2^{-1}])\Psi([\sigma_2^2]) =\Psi\bigl([\sigma_1^2\sigma_2\sigma_1^2\sigma_2^{-1}\cdot\sigma_2^2]\bigr)=\Psi([\Delta^2])=z .$$ Since $\Psi$ is an isomorphism onto $PB_3$ and $\Delta^2$ is central in $G_3$, the element $z=abc$ is central in $PB_3$. [F2, F3, F4, F5]

1.3 **Forgetting and the transported quotient generator.** Let $z=(z_1,z_2)$ be the two moving coordinates of the rank-three word $\sigma_1^2$, a loop at $Q'$. Then $\varphi(a)=(\iota^F_*[z])^{-1}$ by [F5] and the naturality of coordinate forgetting in [F6]. Define $g_r(v)=(1+r/3)v+r/12$ and $H(t,r)=(g_r(z_1(t)),g_r(z_2(t)))$. The map $g_r$ is injective, so these coordinates stay distinct. By [F10], $|z_i(t)|\le5/32$, whence $|g_r(z_i(t))|\le(4/3)(5/32)+1/12=7/24<1$. Thus $H$ is a homotopy through ordered configurations with basepoint track $\eta$ from [F7]. At $r=1$ the midpoint $-1/16$ is sent to $0$, while the relative diamond displacement $\rho$ is multiplied by $4/3$, changing its scale from $1/16$ to $1/12$. Therefore $H(-,1)$ is exactly the raw coordinate loop of the canonical rank-two full twist. The moving-basepoint identity of [F7], and its compatibility with open-to-closed inclusions, give $\iota^F_*[z]=\tau(\iota^F_*[z_{\sigma_1^2}^{(2)}])$. Since $\tau$ preserves inverses, $\varphi(a)=\tau(A_{12}^{(2)})=a'$. By [F7], $a'$ generates this quotient $PB_2\cong\mathbb Z$. [F5, F6, F7, F10]

2.1 **The conjugation by $a$ is conjugation by $w^{-1}$.** Put $w:=bc\in\ker\varphi$. By step 1.2, $abc=z$ with $z$ central, so $a=z(bc)^{-1}=zw^{-1}$, and for every $x\in PB_3$, in particular for every $x\in\ker\varphi$, $$axa^{-1}=zw^{-1}xwz^{-1}=w^{-1}xw .$$ [step 1.2]

2.2 **The far-right section sends $a'$ to $a$.** Write $z_2(t)=(z_1(t),z_2(t))$ for the coordinate path of $\sigma_1^2$ in $F_2(\operatorname{int}D^2)$, a loop at $Q'$ whose two entries lie in $U_1$ for every $t$ by [F10], and put $u_i(t):=h^{-1}(z_i(t))$, so that the far-right lift of [F9] is $$\varsigma(t):=\bigl(z_1(t),z_2(t),\,h(1+|u_1(t)|+|u_2(t)|)\bigr),$$ a loop at $s'(Q')$ in $F_3(\operatorname{int}D^2)$. Since $|z_i(t)|\le\frac{5}{32}$ by [F10], we have $|u_i(t)|\le\frac{5}{27}$ and, because $r\mapsto\frac{r}{1+r}$ is increasing on $[0,\infty)$, $$h(1+|u_1(t)|+|u_2(t)|)\in\bigl[\tfrac12,\tfrac{37}{64}\bigr],$$ an interval in the positive real axis. The value of the far-right section at $Q'$ is $s'(Q')=(q_1,q_2,\frac{8}{15})$: here $h^{-1}(q_1)=(-1/8)/(7/8)=-\frac17$ and $h^{-1}(q_2)=0$, so the third coordinate is $h(1+\frac17)=h(\frac87)=\frac{8}{15}$. Let $$\alpha(t):=\bigl(q_1,\,q_2,\,\tfrac18+t(\tfrac{8}{15}-\tfrac18)\bigr)$$ be the path in the fibre from $Q$ to $s'(Q')$, whose third coordinate runs along the real interval $[\frac18,\frac{8}{15}]$; this interval, and likewise $[\frac12,\frac{37}{64}]$, is contained in $[\frac18,\frac{37}{64}]$, which is disjoint from $U_1\cup\{q_1,q_2\}$ by [F10]. By [F9] the section of [F8] is built from $\sigma=\varphi_{\bar\alpha}\circ s'_*$ with $\sigma([z_2])=[(\alpha*\varsigma)*\bar\alpha]$, and we claim this class is the class of the third-strand-fixed loop $\omega_0(t):=(z_1(t),z_2(t),q_3)$ in $\pi_1(F_3(\operatorname{int}D^2),Q)$. To see this, let $v:I\to\mathbb R$ denote the third coordinate path of $\gamma:=(\alpha*\varsigma)*\bar\alpha$, so that $v(0)=v(1)=q_3$, $v$ takes values in $[\frac18,\frac{37}{64}]$, and $v$ coincides with the third coordinate of $\alpha$ on the first quarter, with $h(1+|u_1|+|u_2|)$ on the second quarter and with the reversed third coordinate of $\alpha$ on the last half. Let $\psi_0$ be the map that is $0$ on $[0,\frac14]$, $4t-1$ on $[\frac14,\frac12]$ and $1$ on $[\frac12,1]$, and put $\psi_r(t):=(1-r)\psi_0(t)+rt$ for $(r,t)\in I\times I$. Then $$G(r,t):=\Bigl(z_1(\psi_r(t)),\,z_2(\psi_r(t)),\,(1-r)v(t)+rq_3\Bigr)$$ is continuous, lies in $F_3(\operatorname{int}D^2)$ pointwise: each $\psi_r(t)$ lies in $[0,1]$, so both $z_i(\psi_r(t))$ lie in $U_1$ and are distinct, while the third coordinate is a convex combination of two points of $[\frac18,\frac{37}{64}]$ and therefore also lies in that interval, which is disjoint from $U_1\cup\{q_1,q_2\}$ by [F10]; moreover $\psi_r(0)=0$, $\psi_r(1)=1$ and $v(0)=v(1)=q_3$, so $G(r,0)=G(r,1)=Q$ for every $r$. Finally $G(0,t)=\gamma(t)$ and $G(1,t)=\omega_0(t)$. Hence $G$ is a path homotopy relative to $\{0,1\}$ from $\gamma$ to $\omega_0$ and $\sigma([z_2])=[\omega_0]$. Now $(\iota^F_*)^{-1}(a')=[z_2]^{-1}$ in $\pi_1(F_2(\operatorname{int}D^2),Q')$: by [F5] the element $a'=\varphi(a)\in PB_2$ is $(\iota^F_*[z_2])^{-1}$ and $\iota^F_*$ is an isomorphism. Since $\sigma$ is a homomorphism, $\sigma([z_2]^{-1})=[\omega_0]^{-1}$, and since the element $a=A_{12}$ of $PB_3$ is by [F5] the class $(\iota^F_*[\omega_0])^{-1}$ (the coordinate path of the braid $\sigma_1^2$ in $G_3$ is $\omega_0$), the section $s$ of [F9] satisfies $$s(a')=\iota^F_*\bigl(\sigma\bigl((\iota^F_*)^{-1}(a')\bigr)\bigr) =\iota^F_*\bigl([\omega_0]^{-1}\bigr)=a .$$ [F5, F8, F9, F10, step 1.3]

3.1 **The action and the semidirect product.** By step 2.2 the section of [F8] satisfies $s(a')=a$, and by step 2.1 $axa^{-1}=w^{-1}xw$ for every $x$ in the free kernel $\ker\varphi=\langle b,c\rangle$ of [F6]. Since the action of the section is $h\cdot x=s(h)xs(h)^{-1}$ by [F8], the positive generator $a'$ of $PB_2=\langle a'\rangle\cong\mathbb Z$ of step 1.3 acts by $x\mapsto w^{-1}xw$. The splitting of [F8] therefore exhibits $$PB_3\cong\langle b,c\rangle\rtimes\langle a\rangle\cong F_2\rtimes\mathbb Z$$ with that action. The action is conjugation by the element $w^{-1}$ of the free kernel, so it depends on the normalised section, no triviality of the action is claimed, and no direct-product decomposition is asserted. [F6, F8, step 1.3, step 2.1, step 2.2] ∎

## Remarks

- The computation of step 1.2 is a direct rank-three calculation inside $G_3$: the full twist $\Delta^2=(st)^3$ is written as the product of the three standard generators $a,b,c$, and centrality of that product is read off the single braid relation. The later centre theorem for $PB_n$ is not used, and neither is any Artin-presentation injectivity: only the surjectivity of [[prop-the-artin-presentation-surjects-onto-geometric-braids]] enters, through the generation of $G_3$ by $s$ and $t$.
- The section used above is the *normalised* far-right section: the fibre path is the straight segment from $q_3$ to $s'(Q')_3$ on the positive real axis, and on the small representative $\sigma_1^2$ of $a$ the far-right lift is homotopic to the loop with constant third coordinate, which is why $s(a')=a$. Any other section $s'$ of $\varphi$ has $s'(a')=k\,a$ for some $k\in\ker\varphi$, so its action is $x\mapsto k\,(w^{-1}xw)\,k^{-1}$, an inner automorphism of the free kernel; the displayed formula is the one for this section, and clearing it of the normalisation would require a separate conjugation bookkeeping.
- The action is by an inner automorphism of the free kernel, because $w\in\langle b,c\rangle$ itself. This example nevertheless asserts only the semidirect-product decomposition with the action of the chosen section; the classical direct-product decomposition $PB_3\cong F_2\times\mathbb Z$ is not derived here.
