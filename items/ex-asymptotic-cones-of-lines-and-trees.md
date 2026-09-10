---
id: "ex-asymptotic-cones-of-lines-and-trees"
kind: "example"
title: "Cones of a line and of real trees"
status: published
origin: "pipeline"
deps: ["def-rescaled-ultralimit-and-asymptotic-cone", "lem-bounded-real-ultralimits-and-free-tail-extension", "lem-geodesic-segments-have-isometric-ultralimits", "lem-triangle-extrema-and-real-tree-tripod-rules", "lem-sublinear-minsize-makes-every-cone-geodesic-a-limit-geodesic", "lem-real-line-is-a-metric-space", "def-axiom-of-choice"]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
verification:
  audited: 2026-09-10
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  scraped: []
  references:
    - title: "Drutu–Kapovich, Geometric Group Theory — §10.6 (cones) and §11.21, Proposition 11.176 (PDF pp. 448–449), with the explicit line calculation"
      url: "https://www.math.ucdavis.edu/~kapovich/EPR/ggt.pdf"
pipeline_run: "phase-2-hg-prerequisite"
proof_strategy: direct
---

## Example

Assume AC. For every free ultrafilter $\omega$, positive scales $\lambda_n\to0$ and real basepoints $e_n$, the cone of $(\mathbb R,|x-y|)$ is isometric to $\mathbb R$ via
$$[x_n]\longmapsto\lim_\omega\lambda_n(x_n-e_n),\qquad t\longmapsto[e_n+t/\lambda_n].$$
Every asymptotic cone of a nonempty real tree is a real tree; the cone need not be isometric to the original tree.

## Facts & Assumptions

**Given:** Assume AC, fix $\omega$, $\lambda_n>0$ tending to zero, and the displayed basepoints.

[F1] Cone points are bounded-rescaled-distance sequences modulo zero ultradistance. ([[def-rescaled-ultralimit-and-asymptotic-cone]]).

[F2] Bounded real ultralimits exist and commute with subtraction and absolute value. ([[lem-bounded-real-ultralimits-and-free-tail-extension]]).

[F3] Chosen representative geodesic segments give isometric cone segments; the cone is geodesic. ([[lem-geodesic-segments-have-isometric-ultralimits]]).

[F4] A real-tree triangle is a tripod; a geodesic space all of whose triangles are tripods is a real tree. ([[lem-triangle-extrema-and-real-tree-tripod-rules]]).

[F5] Under sublinear triangle minsize every cone geodesic segment is unique and is the limit of any prescribed representative segments. ([[lem-sublinear-minsize-makes-every-cone-geodesic-a-limit-geodesic]]).

[F6] The real line has metric $|x-y|$. ([[lem-real-line-is-a-metric-space]]).

[F7] AC supplies the permitted free ultrafilter and representative-geodesic choices. ([[def-axiom-of-choice]]).

## Verification

**Proof technique:** direct.

1.1 If $(x_n)$ is admissible, $a_n=\lambda_n(x_n-e_n)$ is bounded in absolute value, so $T([x_n])=\lim_\omega a_n$ exists. For two admissible sequences, F2 gives $$|T([x_n])-T([y_n])|=\lim_\omega|\lambda_n(x_n-y_n)|=d_\omega([x_n],[y_n]).$$ Thus $T$ is constant on equivalent representatives, and equal $T$ values imply zero ultradistance and the same cone point. It is an isometric injection. [F1, F2, F6]

1.2 In a real tree every chosen triangle is a tripod by F4, and its branchpoint belongs to all three sides. Its minsize is therefore zero, giving the sublinear function $m_X(P)=0$. F3 makes the cone geodesic, and F5 applies under AC: each of its geodesic segments is unique and is the limit of any prescribed representative segments. This includes arbitrary moving basepoints and arbitrary positive scales tending to zero. The next branchpoint calculation establishes the additional tripod conclusion. [F3, F4, F5, F7]

2.1 For $t\in\mathbb R$ set $x_n=e_n+t/\lambda_n$. Then $\lambda_n|x_n-e_n|=|t|$, so this is admissible and $T([x_n])=t$. Conversely, for an admissible $(y_n)$ with $t=T([y_n])$, the distance to this inverse representative is the ultralimit of $|\lambda_n(y_n-e_n)-t|$, which is zero. Both inverse identities hold. For the concrete choice $e_n=(n+1)^2$, $\lambda_n=1/(n+1)$, the sequence $x_n=(n+1)^2+3(n+1)$ maps to $3$, and $y_n=(n+1)^2-2(n+1)$ maps to $-2$; their rescaled distance is $5$ for every $n\in\mathbb N$, including $n=0$. [step 1.1, F1, F2]

3.1 More explicitly, for three representative vertices $x_n,y_n,z_n$ choose their tree branchpoint $b_n$. It satisfies $d(b_n,x_n)\leq d(x_n,y_n)$ and hence $\lambda_nd(b_n,e_n)\leq\lambda_nd(x_n,e_n)+\lambda_nd(x_n,y_n)$, a bounded sequence. Thus $[b_n]$ exists. It is on each limit side, since $b_n$ belongs to each original side, and F3 parameterizes those sides by their rescaled distances from an endpoint. By step 1.2 these limit sides are the actual chosen cone sides. Write $b=[b_n]$. Each side splits at $b$ into its two endpoint legs by distance additivity. Two distinct legs toward vertices $x,y$ cannot share $q\ne b$, since then $d(x,y)\leq d(x,q)+d(q,y)=d(x,b)+d(b,y)-2d(b,q)<d(x,y)$. Thus they form a tripod, with zero legs permitted. Every chosen cone triangle is therefore a tripod, and F4 makes the cone a real tree. For a concrete change of isometry type, take the real tree $[0,1]$, basepoint $0$ and scales $1/(n+1)$. Every representative has rescaled distance at most $1/(n+1)$, so its cone is a single point, whereas the original interval has two points at distance one. [F1, F2, F3, F4, step 1.2] ∎
