<!-- new lines at canonical 24 -->
  proof: ai-altered

<!-- new lines at canonical 32 -->
      locator: "Author version Theorem 9.11 pp.38–39; published Geometry & Topology 12 (2008), Theorem 9.11 p.348, with Theorems 1.5 and 9.7"

<!-- new lines at canonical 54 -->

## Facts & Assumptions

**Given:** The knot, exterior, actual surface $F$ and integral grading-$g$ group in the Statement.

[F1] Under exactly these hypotheses, [[lem-ni-fiberedness-sutured-floer-and-gabai-inputs]] proves that the compact exterior cut along the actual $F$ is a product sutured manifold. Its proof explicitly imports the general balanced sutured vanishing and nonproduct rank results and records Ni's corrected characteristic-pair formulation; the resolved local signed comparison and hierarchy dependencies are preserved.

## Proof

**Proof technique:** direct.

1.1 Apply F1 to the actual class $[F]$, the actual genus $g$ and the given integral group. The cut exterior is a product $F\times[0,1]$ as a sutured manifold. In particular the two horizontal faces correspond to the two copies of the original $F$, rather than to a surface selected only by a genus or homology calculation. [F1]

2.1 To restore the exterior, identify those two faces using their actual gluing map. In product coordinates this is $(x,1)\sim(h(x),0)$ for a self-homeomorphism $h:F	o F$. Thus the exterior is the mapping torus of $h$. Its projection to $[0,1]/(0\sim1)=S^1$ is a surface bundle, and the seam is precisely the original embedded $F$. [step 1.1]

3.1 The vertical boundary is the mapping torus of $\partial F$. Its boundary collar extends this bundle over the deleted-knot end, giving the fibration of $Y\setminus K$ with fiber the interior of $F$, or equivalently with compact fiber $F$ in the compact exterior. This proves the stated fiberedness with the prescribed surface, for arbitrary $Y$ and also for genus zero. [step 2.1] ∎

