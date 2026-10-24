---
id: "lem-weak-equivalences-of-pairs-induce-isomorphisms-on-relative-homotopy"
kind: "lemma"
title: "Weak equivalences of pairs induce isomorphisms on relative homotopy"
status: published
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["def-weak-homotopy-equivalence","def-relative-homotopy-group","lem-relative-homotopy-operations-are-well-defined-in-their-valid-degrees","lem-finite-relative-homotopy-lifting-across-a-weak-equivalence","prop-relative-cw-inclusions-are-cofibrations"]
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: May, A Concise Course, Chapter10 §3 pp75–76, HELP and its cylinder proof
        of injectivity; relative cubical version proved here
      url: https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: "direct"
---

## Statement

Let $f:(X,A)\to(Y,B)$ be a continuous map of pairs, with subspace topologies on $A,B$. Suppose both $f:X\to Y$ and $g=f|_A:A\to B$ are weak homotopy equivalences. For every $a\in A$, the induced map
$$f_*:\pi_n(X,A,a)\longrightarrow\pi_n(Y,B,f(a))$$
is a pointed bijection for $n=1$ and a group isomorphism for every $n\ge2$. The spaces need not be CW complexes. No choice principle is required.

## Facts & Assumptions

[F1] [[def-weak-homotopy-equivalence]] specifies all-basepoint weak equivalence. [[def-relative-homotopy-group]] uses $D=I^n$, distinguished face $F=I^{n-1}\times\{0\}$ and union $J$ of the other faces; a relative cube sends $F$ into the subspace and $J$ to the basepoint.

[F2] [[lem-relative-homotopy-operations-are-well-defined-in-their-valid-degrees]] proves functoriality for based pair maps and that postcomposition preserves products in degrees $n\ge2$.

[F3] [[lem-finite-relative-homotopy-lifting-across-a-weak-equivalence]] lifts a finite-relative CW source across a weak equivalence with a prescribed lift and prescribed comparison homotopy on its subcomplex. The lift extends the prescribed map exactly. For a constant prescribed comparison, the resulting homotopy is fixed on that subcomplex.

[F4] [[prop-relative-cw-inclusions-are-cofibrations]] gives HEP for any CW subcomplex, with arbitrary target and without choice.

## Proof

**Given:** The maps of pairs and their weak-equivalence hypotheses. Fix one $a\in A$, write $b=f(a)$, and fix $n\ge1$. Put $D=I^n$ and $S=\partial I^n=F\cup J$.

1.1 All source pairs below are finite CW pairs. Give each interval its two vertices and open edge, and each cube its product faces: a $d$-face has closure a closed $d$-cube, radially homeomorphic to a disk, with boundary its lower faces. Finite pasting gives the weak topology for this finite closed-face cover, so this is a finite CW structure. Unions of faces are subcomplexes. In particular $(S,J)$, $(D,S)$, and the cylinder face pairs used below meet [F3, F4]. This verification concerns only finite cubes, not products of arbitrary CW spaces. [F1, given]

2.1 To prove surjectivity let $u:D\to Y$ represent a relative class, so $u(S)\subseteq B$ and $u|_J=b$. Apply [F3] to $g:A\to B$, the source pair $(S,J)$, target map $u|_S$ and prescribed constant lift $a$ on $J$, with constant comparison there. Obtain $v:S\to A$ with $v|_J=a$ and a homotopy $T:u|_S\simeq gv$ in $B$ fixed on $J$. Apply [F4] to extend $T$, viewed in $Y$, to a homotopy $E:D\times I\to Y$ starting at $u$. It remains fixed on $J$ and sends $S$ into $B$ at every time, because those are its prescribed boundary values. Its endpoint $U$ satisfies $U|_S=fv$. [F3, F4, step 1.1]

2.2 To prove injectivity, take relative cubes $w_0,w_1:D\to X$ and a relative homotopy $H:D\times I\to Y$ from $fw_0$ to $fw_1$. Write $Q=D\times I$, $V=S\times I$, and $$V_0=(S\times\{0,1\})\cup(J\times I).$$ On $V_0$ prescribe a map $z:V_0\to A$ by $z(x,0)=w_0(x)$, $z(x,1)=w_1(x)$ for $x\in S$, and $z(x,t)=a$ for $x\in J$. These prescriptions agree at the intersections since both relative cubes are constant on $J$; finite closed pasting gives continuity. The restriction $H|_V$ takes values in $B$, and $H|_{V_0}=gz$. [F1, step 1.1]

3.1 Apply [F3] to $f:X\to Y$ and $(D,S)$ with target $U$, prescribed lift $v$ on $S$ and constant comparison $U|_S=fv$. Obtain $w:D\to X$ extending $v$ and a homotopy $U\simeq fw$ rel $S$. The cube $w$ is relative: $w(F)\subseteq A$ and $w(J)=a$. Concatenation with $E$ gives a relative homotopy $u\simeq fw$ fixed on $J$. Hence every target relative class is in the image, in degree one as well as higher degrees. [F1, F3, step 2.1]

3.2 Use [F3] for $g$ on the finite pair $(V,V_0)$, target $H|_V$, prescribed lift $z$, and constant comparison on $V_0$. It yields $v:V\to A$ extending $z$ and a homotopy $T:H|_V\simeq gv$ fixed on $V_0$. Let $$R=\partial Q=(D\times\{0,1\})\cup V.$$ On $R$ define a homotopy $E_R$ by $T$ on $V$ and by the stationary maps $fw_0,fw_1$ on the two end cubes. They agree on $S\times\{0,1\}$ because $T$ is fixed there. Thus $E_R$ is continuous, starts at $H|_R$, fixes both end cubes, and fixes $J\times I$ at $b$. [F3, step 2.2]

4.1 Apply [F4] for $(Q,R)$ to extend $E_R$ to a homotopy in $Y$ starting at $H:Q\to Y$. Write $U:Q\to Y$ for its endpoint. The maps $w_0,w_1$ on the two end cubes and $v$ on $V$ glue to a continuous $z_R:R\to X$, since $v$ extends the endpoint data $z$. The endpoint boundary equation is $U|_R=fz_R$. Apply [F3] to $f$ on $(Q,R)$ with this prescribed lift and constant comparison. Obtain $W:Q\to X$ with $W|_R=z_R$. Therefore $W(-,0)=w_0$, $W(-,1)=w_1$, $W(F\times I)\subseteq A$, and $W(J\times I)=a$. Thus $W$ is the required relative homotopy, proving injectivity by equality of arbitrary classes, not merely by testing the distinguished class. [F1, F3, F4, step 1.1, step 3.2]

5.1 Steps 3.1 and 4.1 give bijectivity in every positive degree. By [F2] the induced map is pointed in every degree and is a homomorphism for $n\ge2$, so its bijectivity makes it a group isomorphism in that range. The point $a$ was arbitrary, and no point or path was selected for a family of basepoints. [F2, step 3.1, step 4.1]

6.1 For $n=1$, $F=\{0\}$ and $J=\{1\}$; $(S,J)$ adds just one vertex, and $(V,V_0)$ adds the initial-endpoint interval while the terminal-endpoint interval stays constant. The constructions therefore apply literally to relative paths with their variable initial point in $A$. They require no group structure on relative $\pi_1$. Relative degree zero is not asserted. If $A$ is empty there is no $a$, and the quantified conclusion is vacuous; no source cube at a nonexistent basepoint is requested. Equal pairs, constant cubes and coincident endpoint maps cause no change. All homotopies fix the stated faces at every time, including their corners and endpoints; the finite HELP time reparametrization preserves each stationary prescribed track. All calls to [F3] have finite sources, and [F4] is choice-free. This proves the assertion without AC. [F1, F3, F4, step 1.1, step 2.1, step 2.2, step 3.2, step 4.1, step 5.1] ∎
