---
id: "lem-framing-obstruction-lives-in-the-normal-bundle-of-the-surgery-sphere"
kind: "lemma"
title: "The framing obstruction lives in the normal bundle of the surgery sphere"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 6
deps: ["def-framed-embedded-surgery-sphere", "def-p-surgery-on-a-smooth-m-manifold", "lem-p-surgery-kills-the-represented-pi-p-class-when-p-is-below-the-middle", "def-normal-and-conormal-bundles-of-an-embedded-submanifold", "def-tubular-neighbourhood-of-an-embedded-submanifold", "thm-tubular-neighbourhood-theorem-in-a-smooth-ambient-manifold", "prop-first-stiefel-whitney-class-classifies-orientability", "def-vector-bundle-map-section-subbundle-and-isomorphism", "cor-a-vector-bundle-is-trivial-if-and-only-if-it-has-a-global-frame", "thm-naturality-of-stiefel-whitney-classes", "prop-a-nowhere-zero-section-forces-the-euler-class-to-vanish", "def-axiom-of-choice"]
justified_by: []
aliases: []
proof_strategy: "direct: a trivialization of the normal bundle gives a product neighbourhood by the tubular neighbourhood theorem, and conversely"
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
verification:
  precheck: "pass"
sources:
  references:
    - title: "Wolfgang Lück, A Basic Introduction to Surgery Theory (lecture notes, Münster, 27 October 2004)"
      url: "https://him-lueck.uni-bonn.de/data/ictp.pdf"
      locator: "Chapter 3 §3.4.1, printed p. 73 (the existence of the extension q is equivalent to the triviality of the normal bundle of the embedding; if 2k<=n-1 then the normal bundle nu(S^k,M) is trivial); §3.4.3, Theorem 3.59 (3), printed p. 75"
    - title: "Andrew Ranicki, Algebraic and Geometric Surgery (Oxford Mathematical Monographs, 2002; electronic copy)"
      url: "https://math.uchicago.edu/~shmuel/tom-readings/ranicki-intro"
      locator: "Chapter 10 §10.1, Definition 10.4, Proposition 10.5 and Proposition 10.10, printed pp. 196-199 (the framing obstruction nu(phi) in pi_n(BO(m-n)); killable iff representable by a framed embedding)"
    - title: "C. T. C. Wall, Differential Topology (Cambridge Studies in Advanced Mathematics 156, Cambridge University Press 2016)"
      url: "https://www.math.auckland.ac.nz/~hekmati/Books/Wall.pdf"
      locator: "Chapter 7 §7.1, printed p. 197 (to extend the embedding of S^{r-1} to S^{r-1}×D^{m-r+1} the normal bundle of the sphere must be trivial; if m>=2r-1 stable triviality suffices)"
---

## Statement

Assume AC ([[def-axiom-of-choice]]), as required by the characteristic-class suppliers below. Let $M$ be a smooth $m$-manifold, let
$S\subseteq\operatorname{int}M$ be an embedded $p$-sphere with $0\le p\le m-1$,
$q=m-p$, and let $\nu$ be its normal bundle in $M$. Then:

(i) $S$ occurs as the underlying sphere of a framed embedded surgery sphere if
and only if $\nu$ is trivial: a trivialization of $\nu$ yields a product
neighbourhood by the tubular neighbourhood theorem, and conversely the product
structure of a framed embedded sphere trivializes $\nu$;

(ii) for $q=1$ the normal bundle is a line bundle and is trivial if and only if
$w_1(\nu)=0$; hence a hypersphere with nontrivial normal line bundle admits no
framing;

(iii) for a class $z\in\pi_p(M)$ with $M$ connected and $p\ge1$, the following
two representation statements are equivalent: (a) $z$ is represented by a framed
embedded surgery sphere; (b) $z$ is represented by an embedded $p$-sphere whose
normal bundle is trivial. When $M$ is closed, in the below-middle range $p\le q-2$, a datum of type
(a) is exactly what makes the $p$-surgery kill the class: $z$ lies in the kernel
of $\pi_p(M)\to\pi_p(M_\varphi)$. The page's construction takes a datum of type
(a) as its input; consequently a class $z$ for which every embedded
representative has nontrivial normal bundle is not treated by the construction,
and the converse implication from killability to (a) is not claimed here;

(iv) nonzero characteristic classes obstruct triviality of $\nu$: a framing
provides nowhere-zero sections, so the Euler class of $\nu$ vanishes when $\nu$
is oriented, and all positive-degree Stiefel-Whitney classes of $\nu$ vanish when $\nu$ is
trivial. Vanishing of these classes is necessary for triviality and is not
claimed here to suffice.

## Facts & Assumptions

**Given:** the smooth $m$-manifold $M$, an embedded $p$-sphere $S\subseteq\operatorname{int}M$ with $0\le p\le m-1$ and $q=m-p$, and its normal bundle $\nu$ in $M$.

[F1] [[def-normal-and-conormal-bundles-of-an-embedded-submanifold]]: the normal bundle of $S$ in $M$ is the fibrewise quotient $\nu(S)=\coprod_{p\in S}T_pM/T_pS$, with the smooth vector bundle structure of the tubular neighbourhood interface; a trivialization of $\nu$ is an isomorphism $\nu\cong S\times\mathbb R^q$ over $S$.

[F2] [[thm-tubular-neighbourhood-theorem-in-a-smooth-ambient-manifold]]: for a closed smooth embedded submanifold $S\hookrightarrow M$ there are an open neighbourhood $\Omega\subseteq\nu(S)$ of the zero section in the quotient normal bundle and a diffeomorphism $\Phi:\Omega\to U$ onto an open neighbourhood $U$ of $S$ in $M$ with $\Phi(0_p)=i(p)$ ([[def-tubular-neighbourhood-of-an-embedded-submanifold]]).

[F3] [[def-framed-embedded-surgery-sphere]]: a framed embedded surgery sphere is an embedding $\varphi:S^p\times D^q\hookrightarrow M$ with image in the interior whose restriction to the disk factor exhibits a trivialization of the normal bundle of the underlying sphere; the framing is part of the data.

[F4] [[prop-first-stiefel-whitney-class-classifies-orientability]]: for a numerable real bundle $E$ of rank $n\ge0$ over an admissible base, $w_1(E)=0$ if and only if $E$ is orientable, equivalently its structure group reduces to $\operatorname{SO}(n)$; real line bundles over such a base are classified by $w_1$.

[F5] [[cor-a-vector-bundle-is-trivial-if-and-only-if-it-has-a-global-frame]]: a smooth rank-$r$ vector bundle is trivial if and only if it has a global frame ([[def-vector-bundle-map-section-subbundle-and-isomorphism]]).

[F6] [[prop-a-nowhere-zero-section-forces-the-euler-class-to-vanish]]: if an oriented vector bundle admits a nowhere-zero section then its Euler class vanishes.

[F7] [[thm-naturality-of-stiefel-whitney-classes]]: the Stiefel-Whitney classes are natural under pullback of bundles along continuous maps; a trivial bundle is the pullback of a bundle over a point along the constant map, and the positive degree classes of a bundle over a point vanish.

[F8] [[lem-p-surgery-kills-the-represented-pi-p-class-when-p-is-below-the-middle]]: for a closed connected smooth $m$-manifold $M$, a framed embedded surgery sphere $\varphi$ whose underlying sphere represents $z\in\pi_p(M)$, and $p\le q-2$, the class $z$ lies in the kernel of $\pi_p(M)\to\pi_p(M_\varphi)$.

## Proof

**Given:** the objects and hypotheses of the statement.

1.1 Suppose $\nu$ is trivial and fix a smooth trivialization $\nu\cong S\times\mathbb R^q$. Apply [F2] in $\operatorname{int}M$; the compact sphere $S$ is closed there. The open tube domain contains the zero section, so finitely many product neighbourhoods give a common radius $r>0$ with $S\times D_r^q$ inside it. Restrict the tube to this closed disk bundle and rescale to obtain an embedding $S\times D^q\hookrightarrow\operatorname{int}M$. Its differential in the normal directions induces a framing (not necessarily the initially chosen trivialization, since [F2] specifies only its zero-section restriction). Thus $S$ is the underlying sphere of a framed embedded surgery sphere. [F1, F2, F3, given, construct]

2.1 Conversely, the differential of $\varphi$ at $(x,0)$ identifies $T_xS^p\oplus\mathbb R^q$ with $T_{\varphi_0(x)}M$, and identifies the first summand with the tangent space of $S$. Passing to the quotient identifies the second summand smoothly with $\nu_x$, giving a trivialization $S\times\mathbb R^q\cong\nu$. Together with step 1.1 this proves (i), and applied to each embedded representative gives the equivalence of (a) and (b) in (iii). [F1, F3, given, algebra]

3.1 For $q=1$ the normal bundle $\nu$ is a real line bundle over $S$, and $SO(1)$ is the trivial group, so orientability of $\nu$ means that its structure group reduces to the trivial group, i.e. that $\nu$ is trivial. By [F4] orientability is equivalent to $w_1(\nu)=0$, so $\nu$ is trivial exactly when $w_1(\nu)=0$, and by step 2.1 such a sphere admits no framing otherwise. This proves (ii). [F3, F4, step 2.1]

3.2 In the below-middle range $p\le q-2$, assume additionally that $M$ is closed, and let $z\in\pi_p(M)$ be represented by a framed embedded surgery sphere $\varphi$ as in (a). Then the hypothesis of [F8] is satisfied, and $z$ lies in the kernel of $\pi_p(M)\to\pi_p(M_\varphi)$: the datum of type (a) is what the construction uses to kill the class. A class whose embedded representatives all have nontrivial normal bundle has no representative of type (b) by step 2.1, hence none of type (a), so the construction does not apply to it; the converse implication is not claimed here. This proves (iii). [F3, F8, step 2.1]

4.1 A framing of $\nu$ is a trivialization, hence an isomorphism $\nu\cong S\times\mathbb R^q$. Under this isomorphism the bundle carries $q$ everywhere linearly independent sections, in particular a nowhere-zero section, so if $\nu$ is oriented its Euler class vanishes by [F6], and all positive degree Stiefel-Whitney classes vanish by naturality [F7] because the trivial bundle is pulled back from a point. Therefore a nonzero Euler class, or a nonzero positive-degree Stiefel-Whitney class, of $\nu$ obstructs a framing; this is the line-bundle statement of (ii) in the case $q=1$. Vanishing of all these classes is necessary and is not claimed to be sufficient. This proves (iv). [F5, F6, F7, step 1.1] ∎
